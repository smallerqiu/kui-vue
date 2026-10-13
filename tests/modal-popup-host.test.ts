import { mount, type VueWrapper } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { h, nextTick, type VNodeChild } from "vue";
import Drawer from "../components/drawer";
import Menu from "../components/menu/menu";
import Modal from "../components/modal/modal";
import Select from "../components/select/select";

/**
 * 宿主窗口（Modal / Drawer）关掉时，窗口里那些 teleported 到 body 的浮层必须跟着收掉：
 * 面板不在窗口 DOM 里，窗口摘了它还飘在页面上（React 侧镜像见 kui-react/tests/modal-popup-host.test.tsx）。
 *
 * 用例都走"受控 modelValue 直接翻成 false"这条路径，不用 Escape、也不点关闭按钮：
 * 下拉自己会响应 Escape，点窗口里任何地方又会被当成外部点击把面板关掉——那两种关法
 * 不靠 popup-host 也能过，等于没测到东西。destroyOnClose=false 是为了让"节点被卸载"
 * 也没法解释面板消失，只有 openChange(false) 才是宿主帮忙关的证据。
 */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const afterOpen = async () => {
  await nextTick();
  await sleep(120);
  await nextTick();
};

async function until(assert: () => void, timeout = 1500) {
  const start = Date.now();
  for (;;) {
    try {
      assert();
      return;
    } catch (error) {
      if (Date.now() - start > timeout) throw error;
      await sleep(10);
    }
  }
}

const selectItems = [{ label: "Alpha", value: "alpha" }];
const menuItems = [{ key: "root", title: "Root", children: [{ key: "leaf", title: "Leaf" }] }];
// openKeys 必须是同一个数组：slot 每次重渲染都会新建字面量，Menu 盯着 props.openKeys 的 watch
// 就会被"新身份"再同步一次，把刚收掉的子菜单又展开回去（那是测试的锅，不是库的）。
const openedKeys = ["root"];

let view: VueWrapper | null = null;

afterEach(() => {
  view?.unmount();
  view = null;
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});

const mountModal = (child: () => VNodeChild) =>
  (view = mount(Modal, {
    attachTo: document.body,
    props: { modelValue: true, title: "宿主", footer: false, destroyOnClose: false },
    slots: { default: child },
  }));

const mountDrawer = (child: () => VNodeChild) =>
  (view = mount(Drawer, {
    attachTo: document.body,
    props: { modelValue: true, footer: false, destroyOnClose: false },
    slots: { default: child },
  }));

describe("Modal 关窗连带收掉窗口里的浮层", () => {
  it("受控关窗时把窗口里的下拉一起关掉", async () => {
    const onOpenChange = vi.fn();
    const wrapper = mountModal(() => h(Select, { options: selectItems, onOpenChange }));
    await afterOpen();
    await wrapper.findComponent(Select).trigger("click");
    await until(() => expect(document.body.querySelector(".k-select-dropdown")).not.toBeNull());
    onOpenChange.mockClear();

    await wrapper.setProps({ modelValue: false });
    await sleep(450);

    expect(onOpenChange).toHaveBeenCalledWith(false);
    await until(() => expect(document.body.querySelector(".k-select-dropdown")).toBeNull());
  });

  it("关窗不该把窗口里的子菜单面板留下", async () => {
    const onOpenChange = vi.fn();
    const wrapper = mountModal(() =>
      h(Menu, { mode: "vertical", openKeys: openedKeys, items: menuItems, onOpenChange }),
    );
    await afterOpen();
    await until(() =>
      expect(document.querySelectorAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(1),
    );

    await wrapper.setProps({ modelValue: false });
    await sleep(450);

    expect(onOpenChange).toHaveBeenCalledWith([]);
    // 只看"折叠了没有"：面板节点在 vue 是 v-show 留着，react 那边会被摘掉，两边形状本来就不同。
    await until(() =>
      expect(document.querySelectorAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(0),
    );
  });
});

describe("Drawer 关抽屉连带收掉抽屉里的浮层", () => {
  it("关抽屉时把抽屉里的下拉一起关掉", async () => {
    const onOpenChange = vi.fn();
    const wrapper = mountDrawer(() => h(Select, { options: selectItems, onOpenChange }));
    await afterOpen();
    await wrapper.findComponent(Select).trigger("click");
    await until(() => expect(document.body.querySelector(".k-select-dropdown")).not.toBeNull());
    onOpenChange.mockClear();

    await wrapper.setProps({ modelValue: false });
    await sleep(450);

    expect(onOpenChange).toHaveBeenCalledWith(false);
    await until(() => expect(document.body.querySelector(".k-select-dropdown")).toBeNull());
  });

  it("关抽屉时收掉子菜单面板", async () => {
    const onOpenChange = vi.fn();
    const wrapper = mountDrawer(() =>
      h(Menu, { mode: "vertical", openKeys: openedKeys, items: menuItems, onOpenChange }),
    );
    await afterOpen();
    await until(() =>
      expect(document.querySelectorAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(1),
    );

    await wrapper.setProps({ modelValue: false });
    await sleep(450);

    expect(onOpenChange).toHaveBeenCalledWith([]);
    // 只看"折叠了没有"：面板节点在 vue 是 v-show 留着，react 那边会被摘掉，两边形状本来就不同。
    await until(() =>
      expect(document.querySelectorAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(0),
    );
  });
});
