import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { bindResponsivePage } from "../components/page/responsive";

let available: number;
let resize: () => void;
let root: HTMLElement;
let dispose: () => void;
beforeEach(() => {
  vi.useFakeTimers();
  available = 800;
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        resize = callback;
      }
      observe() {}
      disconnect() {}
    },
  );
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(function (
    this: HTMLElement,
  ) {
    if (this.parentElement?.getAttribute("aria-hidden") === "true")
      return this.dataset.pageLayout === "full" ? 600 : 400;
    return available;
  });
  root = document.createElement("nav");
  root.innerHTML = `<ul data-page-pager="full"><li role="button" tabindex="0" aria-label="Next page">Next</li></ul>
    <ul data-page-pager="compact" hidden><li role="button" tabindex="0" aria-label="Next page">Next</li></ul>
    <ul data-page-pager="simple" hidden><li role="button" tabindex="0" aria-label="Next page">Next</li></ul>`;
  document.body.append(root);
  dispose = bindResponsivePage(root);
});
afterEach(() => {
  dispose();
  root.remove();
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
function setWidth(value: number) {
  available = value;
  resize();
  vi.advanceTimersByTime(20);
}
describe("Page container adaptation", () => {
  it("reduces page numbers before entering Simple and restores the full layout", () => {
    expect(root.dataset.pageLayout).toBe("full");
    setWidth(500);
    expect(root.dataset.pageLayout).toBe("compact");
    setWidth(300);
    expect(root.dataset.pageLayout).toBe("simple");
    setWidth(800);
    expect(root.dataset.pageLayout).toBe("full");
    expect(root.querySelectorAll("ul:not([hidden])")).toHaveLength(1);
  });
  it("requires extra room to expand so borderline sizes do not oscillate", () => {
    setWidth(399);
    expect(root.dataset.pageLayout).toBe("simple");
    setWidth(410);
    expect(root.dataset.pageLayout).toBe("simple");
    setWidth(416);
    expect(root.dataset.pageLayout).toBe("compact");
    setWidth(605);
    expect(root.dataset.pageLayout).toBe("compact");
    setWidth(616);
    expect(root.dataset.pageLayout).toBe("full");
  });
  it("handles containers revealed after having zero width", () => {
    setWidth(0);
    expect(root.dataset.pageLayout).toBe("full");
    setWidth(250);
    expect(root.dataset.pageLayout).toBe("simple");
  });
  it("moves keyboard focus to the corresponding visible control", () => {
    root.querySelector<HTMLElement>('[data-page-pager="full"] li')!.focus();
    setWidth(250);
    expect(document.activeElement?.closest("ul")?.dataset.pagePager).toBe("simple");
  });
  it("cleans up pending measurements and restores the full layout", () => {
    setWidth(250);
    resize();
    dispose();
    vi.advanceTimersByTime(50);
    expect(root.dataset.pageLayout).toBeUndefined();
    expect(root.querySelector<HTMLElement>('[data-page-pager="full"]')!.hidden).toBe(false);
    expect(root.querySelector<HTMLElement>('[data-page-pager="simple"]')!.hidden).toBe(true);
  });
});
