import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import { Dropdown, DropdownButton } from "../components/dropdown";
import Popconfirm from "../components/popconfirm";
import Poptip from "../components/poptip";
import Tooltip from "../components/tooltip";

/**
 * 弹层生命周期契约：这些组件的 destroyOnClose 默认为 true —— 关闭动画跑完后面板节点从 DOM 移除，
 * 重复打开要重新挂载（实测约 14ms 固定开销）；传 false 才保留隐藏节点，换面板内表单状态。
 * 两个仓库必须断言同一件事，见 kui-react/tests/popup-destroy-on-close.test.tsx。
 */

const overlay = () => h("div", "面板内容");

/** 走 show 受控开关的组件；DropdownButton 是 target 模式，只能靠点触发按钮开合 */
const controlled = [
  { name: "Dropdown", component: Dropdown, sel: ".k-dropdown", props: { trigger: "click" } },
  { name: "Tooltip", component: Tooltip, sel: ".k-tooltip", props: { title: "提示" } },
  { name: "Poptip", component: Poptip, sel: ".k-poptip", props: { content: "内容" } },
  {
    name: "Popconfirm",
    component: Popconfirm,
    sel: ".k-popconfirm",
    props: { title: "确定？" },
  },
] as const;

const settle = async () => {
  for (let round = 0; round < 3; round += 1) {
    await nextTick();
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  await nextTick();
};

let wrappers: VueWrapper[] = [];

const mountCase = (
  component: Parameters<typeof mount>[0],
  props: Record<string, unknown>,
) => {
  const wrapper = mount(component, {
    attachTo: document.body,
    props,
    slots: { default: () => h("button", "触发"), overlay },
  });
  wrappers.push(wrapper);
  return wrapper;
};

afterEach(() => {
  wrappers.forEach((wrapper) => wrapper.unmount());
  wrappers = [];
  document.body.innerHTML = "";
});

describe.each(controlled)("$name 面板生命周期", ({ component, sel, props }) => {
  it("默认在关闭动画结束后销毁面板节点", async () => {
    const wrapper = mountCase(component, { ...props, show: true });
    await settle();
    expect(document.querySelector(sel)).not.toBeNull();

    await wrapper.setProps({ show: false });
    await settle();

    expect(document.querySelector(sel)).toBeNull();
  });

  it("destroyOnClose=false 时保留面板节点", async () => {
    const wrapper = mountCase(component, { ...props, show: true, destroyOnClose: false });
    await settle();
    expect(document.querySelector(sel)).not.toBeNull();

    await wrapper.setProps({ show: false });
    await settle();

    expect(document.querySelector(sel)).not.toBeNull();
  });
});

describe("DropdownButton 面板生命周期", () => {
  const mountButton = (props: Record<string, unknown> = {}) =>
    mountCase(DropdownButton, { trigger: "click", ...props });

  const toggle = async (wrapper: VueWrapper) => {
    await wrapper.get(".k-dropdown-trigger").trigger("click");
    await settle();
  };

  it("默认在关闭动画结束后销毁面板节点", async () => {
    const wrapper = mountButton();
    await settle();
    expect(document.querySelector(".k-dropdown")).toBeNull();

    await toggle(wrapper);
    expect(document.querySelector(".k-dropdown")).not.toBeNull();

    await toggle(wrapper);
    expect(document.querySelector(".k-dropdown")).toBeNull();
  });

  it("destroyOnClose=false 时保留面板节点", async () => {
    const wrapper = mountButton({ destroyOnClose: false });
    await settle();

    await toggle(wrapper);
    expect(document.querySelector(".k-dropdown")).not.toBeNull();

    await toggle(wrapper);
    expect(document.querySelector(".k-dropdown")).not.toBeNull();
  });
});
