import { mount, type VueWrapper } from "@vue/test-utils";
import { createCommentVNode, Fragment, h, nextTick } from "vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Menu, MenuItem, SubMenu } from "../components/menu";

let wrappers: VueWrapper[] = [];
let resize: () => void;

beforeEach(() => {
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
});

afterEach(() => {
  wrappers.forEach((wrapper) => wrapper.unmount());
  wrappers = [];
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const submenu = () =>
  h(SubMenu, { key: "group", title: "Group" }, () => h(MenuItem, { key: "leaf" }, () => "Leaf"));
const settle = async () => {
  await nextTick();
  await nextTick();
  await nextTick();
};

describe("Menu controlled popups", () => {
  it.each(["vertical", "horizontal"] as const)(
    "honors initial openKeys in %s mode",
    async (mode) => {
      const wrapper = mount(Menu, {
        attachTo: document.body,
        props: { mode, openKeys: ["group"] },
        slots: { default: submenu },
      });
      wrappers.push(wrapper);
      await settle();
      const popup = document.body.querySelector<HTMLElement>(".k-menu-submenu-popup");
      expect(popup).not.toBeNull();
      expect(popup?.style.display).not.toBe("none");
      expect(popup?.style.visibility).not.toBe("hidden");
      expect(popup?.textContent).toContain("Leaf");
    },
  );

  it.each(["vertical", "horizontal"] as const)(
    "opens and closes from external state in %s mode",
    async (mode) => {
      const wrapper = mount(Menu, {
        attachTo: document.body,
        props: { mode },
        slots: { default: submenu },
      });
      wrappers.push(wrapper);
      expect(document.body.querySelector(".k-menu-submenu-popup")).toBeNull();
      await wrapper.setProps({ openKeys: ["group"] });
      await settle();
      const popup = document.body.querySelector<HTMLElement>(".k-menu-submenu-popup");
      expect(popup).not.toBeNull();
      expect(popup?.style.visibility).not.toBe("hidden");
      expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("true");
      await wrapper.setProps({ openKeys: [] });
      expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("false");
      expect(popup?.style.display).toBe("none");
      expect(wrapper.emitted("update:openKeys")).toBeUndefined();
    },
  );
});

describe("Menu keyboard activation", () => {
  it.each(["Enter", " "])("emits click and select once for %j", async (key) => {
    const onClick = vi.fn();
    const onSelect = vi.fn();
    const wrapper = mount(Menu, {
      props: { onSelect },
      slots: { default: () => h(MenuItem, { key: "leaf", onClick }, () => "Leaf") },
    });
    wrappers.push(wrapper);
    await wrapper.get(".k-menu-item").trigger("keydown", { key });
    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick.mock.calls[0][0]).toBeInstanceOf(MouseEvent);
    expect(onSelect).toHaveBeenCalledExactlyOnceWith({ key: "leaf", keyPath: [] });
  });

  it.each(["Enter", " "])("does not activate disabled items for %j", async (key) => {
    const onClick = vi.fn();
    const onSelect = vi.fn();
    const wrapper = mount(Menu, {
      props: { onSelect },
      slots: { default: () => h(MenuItem, { key: "leaf", disabled: true, onClick }, () => "Leaf") },
    });
    wrappers.push(wrapper);
    await wrapper.get(".k-menu-item").trigger("keydown", { key });
    expect(onClick).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
  });
});

it("moves individual Fragment items into overflow and restores them on resize", async () => {
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (
    this: HTMLElement,
  ) {
    return {
      width: this.classList.contains("k-menu-submenu") ? 30 : 100,
      height: 30,
      top: 0,
      left: 0,
      right: 100,
      bottom: 30,
      x: 0,
      y: 0,
      toJSON() {},
    };
  });
  let availableWidth = 150;
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => availableWidth);
  const wrapper = mount(Menu, {
    attachTo: document.body,
    props: { mode: "horizontal", style: { padding: "0px" } },
    slots: {
      default: () => [
        createCommentVNode("v-if"),
        h(
          Fragment,
          null,
          ["a", "b", "c"].map((key) => h(MenuItem, { key }, () => key)),
        ),
      ],
    },
  });
  wrappers.push(wrapper);
  await settle();
  expect(wrapper.element.querySelectorAll(":scope > .k-menu-item")).toHaveLength(1);
  await wrapper.get(".k-menu-submenu-title").trigger("mouseenter");
  await settle();
  const popupItems = document.body.querySelectorAll(".k-menu-submenu-popup .k-menu-item");
  expect(Array.from(popupItems, (item) => item.textContent)).toEqual(["b", "c"]);
  (popupItems[0] as HTMLElement).click();
  await settle();
  expect(wrapper.emitted("select")?.[0]).toEqual([{ key: "b", keyPath: [] }]);
  availableWidth = 400;
  resize();
  await settle();
  expect(wrapper.element.querySelectorAll(":scope > .k-menu-item")).toHaveLength(3);
  expect(wrapper.element.querySelector(":scope > .k-menu-submenu")).toBeNull();
});
