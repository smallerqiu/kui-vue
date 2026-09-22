import { afterEach, describe, expect, it, vi } from "vitest";
import { Odometer } from "../components/stat-card/utils/odometer";

describe("continuous statistical-number tracks", () => {
  it.each([
    [12345, 54321, "up"],
    [54321, 12345, "down"],
  ] as const)(
    "%s to %s uses independent digit directions and leaves unchanged digits still",
    async (from, to, direction) => {
      vi.useFakeTimers();
      const element = document.createElement("span");
      const odometer = new Odometer({ duration: 0.3, mode: "continuous" });
      odometer.render(element, from.toLocaleString("en-US"), from);
      odometer.render(element, to.toLocaleString("en-US"), to);
      const tracks = Array.from(element.querySelectorAll<HTMLElement>(".odometer-track"));
      expect(tracks).toHaveLength(4);
      expect(tracks[0].textContent).toBe("12345");
      expect(tracks.map((track) => track.dataset.direction)).toEqual(
        direction === "up" ? ["up", "up", "down", "down"] : ["down", "down", "up", "up"],
      );
      const staticDigits = Array.from(element.querySelectorAll('[aria-hidden="true"]'))
        .filter((slot) => !slot.querySelector(".odometer-track"))
        .map((slot) => slot.textContent);
      expect(staticDigits).toContain("3");
      for (const track of tracks) {
        const digits = Array.from(track.children, (child) => Number(child.textContent));
        for (let index = 1; index < digits.length; index++) {
          expect(digits[index]).toBe((digits[index - 1] + 1) % 10);
        }
        expect(track.children.length).toBeLessThanOrEqual(30);
      }
      await vi.advanceTimersByTimeAsync(40);
      expect(tracks[0].style.transform).toBe(
        direction === "up" ? "translateY(-4em)" : "translateY(0)",
      );
      expect(parseFloat(tracks[0].style.transition.split(" ")[1])).toBeLessThan(
        parseFloat(tracks[3].style.transition.split(" ")[1]),
      );
      await vi.advanceTimersByTimeAsync(350);
      expect(element.textContent).toBe(to.toLocaleString("en-US"));
      expect(element.querySelector(".odometer-track")).toBeNull();
      odometer.destroy();
      expect(vi.getTimerCount()).toBe(0);
    },
  );

  it.each([
    [999, 1000],
    [1000, 999],
    [-12.3, -2.1],
    [-2.1, -12.3],
  ])("settles formatting and digit count for %s to %s", async (from, to) => {
    vi.useFakeTimers();
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 0.3, mode: "continuous" });
    odometer.render(element, from.toLocaleString("en-US"), from);
    odometer.render(element, to.toLocaleString("en-US"), to);
    await vi.advanceTimersByTimeAsync(400);
    expect(element.textContent).toBe(to.toLocaleString("en-US"));
    odometer.destroy();
  });

  it("cancels obsolete long tracks on rapid reversal and unmount", async () => {
    vi.useFakeTimers();
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 0.3, mode: "continuous" });
    odometer.render(element, "12345", 12345);
    for (const value of [54321, 12345, 99999, 11111]) {
      odometer.render(element, String(value), value);
      await vi.advanceTimersByTimeAsync(50);
      expect(element.querySelectorAll(".odometer-track span").length).toBeLessThanOrEqual(150);
    }
    await vi.advanceTimersByTimeAsync(400);
    expect(element.textContent).toBe("11111");
    odometer.render(element, "54321", 54321);
    odometer.destroy();
    const html = element.innerHTML;
    await vi.advanceTimersByTimeAsync(1000);
    expect(element.innerHTML).toBe(html);
    expect(vi.getTimerCount()).toBe(0);
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("bidirectional odometer", () => {
  it("respects reduced motion", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 1 });
    odometer.render(element, "1", 1);
    odometer.render(element, "2", 2);
    expect(element.textContent).toBe("2");
    expect(element.querySelector(".odometer-track")).toBeNull();
    odometer.destroy();
  });
  it.each([
    [9, 10, "up"],
    [10, 9, "down"],
    [-12, -2, "up"],
    [-2, -12, "down"],
    [1.9, 1.2, "down"],
  ] as const)("%s to %s rolls %s", async (from, to, direction) => {
    vi.useFakeTimers();
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 0.3 });
    odometer.render(element, String(from), from);
    odometer.render(element, String(to), to);
    expect(element.querySelector(".odometer-numbers")?.getAttribute("data-direction")).toBe(
      direction,
    );
    const track = element.querySelector<HTMLElement>(".odometer-track")!;
    expect(track.style.transform).toBe(direction === "up" ? "translateY(0)" : "translateY(-1em)");
    await vi.advanceTimersByTimeAsync(40);
    expect(track.style.transform).toBe(direction === "up" ? "translateY(-1em)" : "translateY(0)");
    await vi.advanceTimersByTimeAsync(350);
    expect(element.textContent).toBe(String(to));
    expect(element.querySelector(".odometer-track")).toBeNull();
    odometer.destroy();
  });

  it("coalesces rapid changes without retaining digit trails or stale work", async () => {
    vi.useFakeTimers();
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 0.3 });
    odometer.render(element, "99", 99);
    for (const value of [100, 98, 101, 9]) odometer.render(element, String(value), value);
    expect(element.querySelectorAll(".odometer-track span").length).toBeLessThanOrEqual(6);
    await vi.advanceTimersByTimeAsync(400);
    expect(element.textContent).toBe("9");
    odometer.render(element, "10", 10);
    const html = element.innerHTML;
    odometer.destroy();
    await vi.advanceTimersByTimeAsync(1000);
    expect(element.innerHTML).toBe(html);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("renders zero duration immediately and does not interpret formatted text as HTML", () => {
    const element = document.createElement("span");
    const odometer = new Odometer({ duration: 0 });
    odometer.render(element, "1", 1);
    odometer.render(element, "<b>2</b>", 2);
    expect(element.textContent).toBe("<b>2</b>");
    expect(element.querySelector("b")).toBeNull();
    odometer.destroy();
  });
});
