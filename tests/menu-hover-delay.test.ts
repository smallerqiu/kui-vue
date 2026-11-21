import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import Menu from "../components/menu/menu";

const items = [
  {
    key: "root",
    title: "Root",
    children: [
      { key: "one", title: "item1" },
      { key: "two", title: "item2", children: [{ key: "leaf", title: "Nested leaf" }] },
      { key: "three", title: "item3" },
    ],
  },
];
const wrappers: VueWrapper[] = [];
beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount());
  vi.useRealTimers();
  vi.unstubAllGlobals();
});
const title = (text: string) =>
  [...document.querySelectorAll<HTMLElement>(".k-menu-submenu-title")].find(
    (el) => el.textContent === text,
  )!;
const enter = (el: HTMLElement) => el.dispatchEvent(new MouseEvent("mouseenter"));
const leave = (el: HTMLElement) => el.dispatchEvent(new MouseEvent("mouseleave"));
const wait = async (time: number) => {
  await vi.advanceTimersByTimeAsync(time);
  await nextTick();
};
const setup = async (extra = {}) => {
  vi.useFakeTimers();
  const w = mount(Menu, {
    attachTo: document.body,
    props: { mode: "horizontal", items, openKeys: ["root"], ...extra },
  });
  wrappers.push(w);
  await wait(50);
  return w;
};

it("does not open or emit when crossing item2 to reach item3", async () => {
  const w = await setup();
  enter(title("item2"));
  await wait(100);
  leave(title("item2"));
  await wait(500);
  expect(title("item2").getAttribute("aria-expanded")).toBe("false");
  expect(document.body.textContent).not.toContain("Nested leaf");
  expect(w.emitted("openChange")).toBeUndefined();
});
it("opens after the delay and stays open while moving into its popup", async () => {
  await setup();
  const child = title("item2");
  enter(child);
  await wait(199);
  expect(child.getAttribute("aria-expanded")).toBe("false");
  await wait(51);
  expect(child.getAttribute("aria-expanded")).toBe("true");
  leave(child);
  const leaf = [...document.querySelectorAll(".k-menu-item")].find(
    (el) => el.textContent === "Nested leaf",
  )!;
  enter(leaf.closest<HTMLElement>(".k-menu-submenu-popup")!);
  await wait(300);
  expect(child.getAttribute("aria-expanded")).toBe("true");
});
it("restarts the delay on re-entry and cancels pending open on disable and unmount", async () => {
  const w = await setup();
  const child = title("item2");
  enter(child);
  await wait(150);
  leave(child);
  enter(child);
  await wait(100);
  expect(child.getAttribute("aria-expanded")).toBe("false");
  await w.setProps({
    items: [{ ...items[0], children: [{ ...items[0].children[1], disabled: true }] }],
  });
  await wait(300);
  expect(w.emitted("openChange")).toBeUndefined();
  await w.setProps({ items });
  enter(title("item2"));
  w.unmount();
  wrappers.splice(wrappers.indexOf(w), 1);
  await wait(300);
  expect(w.emitted("openChange")).toBeUndefined();
});
it("supports a zero delay and keeps keyboard opening immediate", async () => {
  await setup({ subMenuOpenDelay: 0 });
  enter(title("item2"));
  await wait(30);
  expect(title("item2").getAttribute("aria-expanded")).toBe("true");
  wrappers.splice(0).forEach((w) => w.unmount());
  await setup({ subMenuOpenDelay: 1000 });
  title("item2").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
  await wait(30);
  expect(title("item2").getAttribute("aria-expanded")).toBe("true");
});
