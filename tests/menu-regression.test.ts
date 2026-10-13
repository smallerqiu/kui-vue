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
      // 关闭即卸载（向 react 的 <Transition unmountOnExit> 对齐）：退场动画跑完后面板不留残骸，
      // 再展开时重新创建一份。
      await new Promise((resolve) => setTimeout(resolve, 320));
      expect(document.body.querySelector(".k-menu-submenu-popup")).toBeNull();
      await wrapper.setProps({ openKeys: ["group"] });
      await settle();
      expect(document.body.querySelector(".k-menu-submenu-popup")?.textContent).toContain("Leaf");
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

describe("Menu mode presentation", () => {
  it("leaves the expansion untouched and silent when mode changes", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "inline", openKeys: ["group"] },
      slots: { default: submenu },
    });
    wrappers.push(wrapper);
    await settle();
    expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("true");
    await wrapper.setProps({ mode: "horizontal" });
    await settle();
    expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("true");
    expect(document.querySelector(".k-menu-submenu-popup")).not.toBeNull();
    await wrapper.setProps({ mode: "inline" });
    await settle();
    expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("true");
    expect(wrapper.emitted("update:openKeys")).toBeUndefined();
    expect(wrapper.emitted("openChange")).toBeUndefined();
  });

  it("renders no overflow trigger for an empty horizontal menu", async () => {
    const wrapper = mount(Menu, { props: { mode: "horizontal" } });
    wrappers.push(wrapper);
    await settle();
    expect(wrapper.text()).not.toContain("...");
    expect(wrapper.find(".k-menu-submenu").exists()).toBe(false);
  });

  it("ignores inlineCollapsed outside inline mode", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "vertical", inlineCollapsed: true, openKeys: ["group"] },
      slots: { default: submenu },
    });
    wrappers.push(wrapper);
    await settle();
    expect(wrapper.classes()).toEqual(["k-menu", "k-menu-vertical"]);
    expect(wrapper.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("true");
    expect(document.querySelector(".k-menu-submenu-popup")).not.toBeNull();
  });

  it("links the submenu title with its popup list", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "vertical", openKeys: ["group"] },
      slots: { default: submenu },
    });
    wrappers.push(wrapper);
    await settle();
    const title = wrapper.get(".k-menu-submenu-title");
    const popupList = document.body.querySelector(".k-menu-submenu-popup ul")!;
    expect(popupList.id).toBeTruthy();
    expect(title.attributes("aria-controls")).toBe(popupList.id);
    expect(popupList.getAttribute("aria-labelledby")).toBe(title.attributes("id"));
    await wrapper.setProps({ openKeys: [] });
    await settle();
    expect(title.attributes("aria-controls")).toBeUndefined();
  });

  it("does not mark a plain menu item as expandable", async () => {
    const wrapper = mount(Menu, {
      props: { mode: "inline", inlineCollapsed: true },
      slots: { default: () => h(MenuItem, { key: "leaf" }, () => "Leaf") },
    });
    wrappers.push(wrapper);
    await settle();
    const item = wrapper.get(".k-menu-item");
    expect(item.attributes("role")).toBe("menuitem");
    expect(item.attributes("aria-expanded")).toBeUndefined();
  });
});

describe("Menu popup closure on select", () => {
  it("reports the closure of an opened popup and nothing otherwise", async () => {
    const withOpen = mount(Menu, {
      attachTo: document.body,
      props: { mode: "vertical", openKeys: ["group"] },
      slots: { default: submenu },
    });
    wrappers.push(withOpen);
    await settle();
    (document.body.querySelector(".k-menu-submenu-popup .k-menu-item") as HTMLElement).click();
    await settle();
    expect(withOpen.emitted("openChange")).toEqual([[[]]]);
    expect(withOpen.emitted("update:openKeys")).toEqual([[[]]]);
    expect(withOpen.get(".k-menu-submenu-title").attributes("aria-expanded")).toBe("false");

    const withoutOpen = mount(Menu, {
      attachTo: document.body,
      props: { mode: "inline" },
      slots: { default: () => h(MenuItem, { key: "leaf" }, () => "Leaf") },
    });
    wrappers.push(withoutOpen);
    await settle();
    withoutOpen.get(".k-menu-item").trigger("click");
    await settle();
    expect(withoutOpen.emitted("openChange")).toBeUndefined();
    expect(withoutOpen.emitted("update:openKeys")).toBeUndefined();
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

describe("Menu submenu keyboard", () => {
  const rootWithNested = () => h(SubMenu, { key: "root", title: "Root" }, () => [submenu()]);

  const mountMenu = async (props: Record<string, unknown>, slot: () => unknown) => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props,
      // SubMenu/MenuItem 在测试里以 h() 直接构造，不需要全局注册。
      slots: { default: slot },
    });
    wrappers.push(wrapper);
    await settle();
    return wrapper;
  };

  const pressEscapeOn = (element: Element) =>
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }),
    );

  it("opens a menubar submenu with ArrowDown and lands focus on its first item", async () => {
    const wrapper = await mountMenu({ mode: "horizontal" }, submenu);
    const trigger = wrapper.get(".k-menu-submenu-title").element as HTMLElement;
    trigger.focus();

    await wrapper.get(".k-menu-submenu-title").trigger("keydown", { key: "ArrowDown" });
    await settle();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    // 浮层完成定位后焦点才进入首项。
    await settle();
    expect(document.activeElement?.textContent).toBe("Leaf");

    pressEscapeOn(document.activeElement as Element);
    await settle();
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(trigger);
  });

  it("expands an inline submenu with ArrowRight and lands focus on its first child", async () => {
    const wrapper = await mountMenu({ mode: "inline" }, rootWithNested);
    const trigger = wrapper.get(".k-menu-submenu-title").element as HTMLElement;
    trigger.focus();

    await wrapper.get(".k-menu-submenu-title").trigger("keydown", { key: "ArrowRight" });
    await settle();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    // 焦点落在展开列表的第一项，也就是内层子菜单的标题。
    expect(document.activeElement).toBe(wrapper.findAll(".k-menu-submenu-title")[1].element);
  });

  it("unwinds only the innermost level when Escape is pressed inside a nested list", async () => {
    const wrapper = await mountMenu(
      { mode: "inline", openKeys: ["root", "group"] },
      rootWithNested,
    );
    const titles = wrapper.findAll(".k-menu-submenu-title");
    expect(titles).toHaveLength(2);

    await titles[1].trigger("keydown", { key: "Escape" });
    await settle();
    expect(titles[1].attributes("aria-expanded")).toBe("false");
    expect(titles[0].attributes("aria-expanded")).toBe("true");
  });
});

describe("Menu roles and overflow observing", () => {
  it("declares menubar semantics only for horizontal menus", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "horizontal", openKeys: ["group"] },
      slots: { default: submenu },
    });
    wrappers.push(wrapper);
    await settle();

    expect(wrapper.attributes("role")).toBe("menubar");
    expect(wrapper.attributes("aria-orientation")).toBe("horizontal");
    const trigger = wrapper.get(".k-menu-submenu-title").element;
    // 折叠浮层的触发项声明它弹出的是菜单，而不是笼统的 true。
    expect(trigger.getAttribute("aria-haspopup")).toBe("menu");
    // 包装 li 不参与无障碍树，菜单项身份只由标题 div 承担。
    expect(trigger.parentElement?.getAttribute("role")).toBe("none");

    const popupList = document.body.querySelector(".k-menu-submenu-popup ul");
    // horizontal 的子菜单只会纵向堆叠，不能跟着根节点报成 horizontal。
    expect(popupList?.getAttribute("aria-orientation")).toBe("vertical");

    await wrapper.setProps({ mode: "inline" });
    await settle();
    expect(wrapper.attributes("role")).toBe("menu");
    expect(wrapper.attributes("aria-orientation")).toBe("vertical");
  });

  it("observes the container only while the menu is horizontal", async () => {
    let observed = 0;
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {
          observed += 1;
        }
        disconnect() {}
      },
    );

    const wrapper = mount(Menu, {
      props: { mode: "inline" },
      slots: { default: () => h(MenuItem, { key: "a" }, () => "A") },
    });
    wrappers.push(wrapper);
    await settle();
    expect(observed).toBe(0);

    await wrapper.setProps({ mode: "horizontal" });
    await settle();
    expect(observed).toBe(1);

    await wrapper.setProps({ mode: "vertical" });
    await settle();
    expect(observed).toBe(1);
  });
});
