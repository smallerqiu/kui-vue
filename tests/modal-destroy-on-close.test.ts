import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Drawer from "../components/drawer";
import Modal, { ModalPanel } from "../components/modal/modal";

/**
 * Modal / Drawer 的关闭销毁契约（destroyOnClose 默认 true）：关窗后要等退场倒计时（300ms）跑完，
 * 整棵 .k-modal / .k-drawer 才从 DOM 摘掉，重开时重新挂载；传 destroyOnClose=false 才留一份隐藏 DOM，
 * 里面填过的表单状态才保得住。
 * panelOnly 是宿主浮层里的面板，生命周期归宿主，任何时候都不销毁。
 * 两个仓库断言同一件事，见 kui-react/tests/modal-destroy-on-close.test.tsx。
 */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// 打开：visible / rendered 都在 nextTick 里，再给进场动画留点余量
const afterOpen = async () => {
  await nextTick();
  await sleep(120);
  await nextTick();
};
// 销毁发生在 300ms 倒计时结束时。正向断言用轮询，别把边界掐死在 CI 抖动里。
const until = async (assert: () => void, timeout = 1500) => {
  const start = Date.now();
  for (;;) {
    await nextTick();
    try {
      assert();
      return;
    } catch (error) {
      if (Date.now() - start > timeout) throw error;
      await sleep(20);
    }
  }
};
const gone = (sel: string) => until(() => expect(document.querySelector(sel)).toBeNull());

// 内容是 Teleport 出去的，wrapper.find 够不着，只能按选择器从文档里取
const typed = "填过的";
const typeInto = (selector: string) => {
  const input = document.querySelector<HTMLInputElement>(selector)!;
  input.value = typed;
  return input;
};

const wrappers: VueWrapper[] = [];

const mountModal = (props: Record<string, unknown> = {}) => {
  const wrapper = mount(Modal, {
    attachTo: document.body,
    props: { modelValue: true, title: "标题", ...props },
    slots: { default: () => h("input") },
  });
  wrappers.push(wrapper);
  return wrapper;
};

const mountDrawer = (props: Record<string, unknown> = {}) => {
  const wrapper = mount(Drawer, {
    attachTo: document.body,
    props: { modelValue: true, ...props },
    slots: { default: () => h("input") },
  });
  wrappers.push(wrapper);
  return wrapper;
};

afterEach(() => {
  wrappers.forEach((wrapper) => wrapper.unmount());
  wrappers.length = 0;
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});

describe("Modal destroy on close", () => {
  it("destroys the dialog DOM once the exit countdown is over", async () => {
    const wrapper = mountModal();
    await afterOpen();
    expect(document.querySelector(".k-modal")).not.toBeNull();

    await wrapper.setProps({ modelValue: false });
    await gone(".k-modal");

    // 销毁不该把滚动锁留下
    expect(document.body.classList.contains("k-scroll-locked")).toBe(false);
  });

  it("keeps the dialog DOM and the typed value with destroyOnClose=false", async () => {
    const wrapper = mountModal({ destroyOnClose: false });
    await afterOpen();
    const input = typeInto(".k-modal-body input");

    await wrapper.setProps({ modelValue: false });
    await sleep(450);
    expect(document.querySelector(".k-modal")).not.toBeNull();

    await wrapper.setProps({ modelValue: true });
    await afterOpen();
    // 同一批节点：隐藏而非销毁，所以用户填的东西还在
    expect(document.querySelector("input")).toBe(input);
    expect(input.value).toBe(typed);
  });

  it("remounts fresh content when reopening after a destroy", async () => {
    const wrapper = mountModal();
    await afterOpen();
    const first = typeInto(".k-modal-body input");

    await wrapper.setProps({ modelValue: false });
    await gone(".k-modal");
    await wrapper.setProps({ modelValue: true });
    await afterOpen();

    const second = document.querySelector("input")!;
    expect(second).not.toBe(first);
    expect(second.value).toBe("");
  });

  it("keeps a dialog reopened before the exit countdown fires", async () => {
    const wrapper = mountModal();
    await afterOpen();
    const root = document.querySelector(".k-modal")!;
    const input = typeInto(".k-modal-body input");

    await wrapper.setProps({ modelValue: false });
    await sleep(30); // 倒计时还没跑完就反悔（窗口留足余量，别让 CI 抖动写成假失败）
    await wrapper.setProps({ modelValue: true });
    await sleep(600); // 跨过原来那次关闭的 300ms 边界
    await nextTick();

    // 反悔不该走一遍"销毁再重挂"：面板从头到尾没消失过，填过的内容也还在。
    expect(document.querySelector(".k-modal")).toBe(root);
    expect(document.querySelector("input")).toBe(input);
    expect(input.value).toBe(typed);
  });

  it("keeps panelOnly inline and never destroys it", async () => {
    const wrapper = mount(ModalPanel, {
      attachTo: document.body,
      props: { title: "标题" },
      slots: { default: () => h("input") },
    });
    wrappers.push(wrapper);
    await sleep(450);

    // panelOnly 归宿主：节点留在挂载容器里（不是 wrapper.element 就是它的子孙），不搬走也不带遮罩
    const panel = document.querySelector(".k-modal");
    expect(panel).not.toBeNull();
    expect(wrapper.element === panel || wrapper.element.contains(panel)).toBe(true);
    expect(panel?.classList.contains("k-modal-panel")).toBe(true);
    expect(panel?.querySelector(".k-modal-mask")).toBeNull();
    expect(panel?.querySelector('[role="dialog"]')?.hasAttribute("aria-modal")).toBe(false);
  });
});

describe("Drawer destroy on close", () => {
  it("destroys the drawer DOM once the exit countdown is over", async () => {
    const wrapper = mountDrawer();
    await afterOpen();
    expect(document.querySelector(".k-drawer")).not.toBeNull();

    await wrapper.setProps({ modelValue: false });
    await gone(".k-drawer");
    expect(document.body.classList.contains("k-scroll-locked")).toBe(false);
  });

  it("keeps a drawer reopened before the exit countdown fires", async () => {
    const wrapper = mountDrawer();
    await afterOpen();
    const root = document.querySelector(".k-drawer")!;
    const input = typeInto(".k-drawer-body input");

    await wrapper.setProps({ modelValue: false });
    await sleep(30);
    await wrapper.setProps({ modelValue: true });
    await sleep(600);
    await nextTick();

    // 同 Modal：反悔不该走一遍销毁重挂
    expect(document.querySelector(".k-drawer")).toBe(root);
    expect(document.querySelector("input")).toBe(input);
    expect(input.value).toBe(typed);
  });

  it("keeps the drawer DOM and the typed value with destroyOnClose=false", async () => {
    const wrapper = mountDrawer({ destroyOnClose: false });
    await afterOpen();
    const input = typeInto(".k-drawer-body input");

    await wrapper.setProps({ modelValue: false });
    await sleep(450);
    expect(document.querySelector(".k-drawer")).not.toBeNull();

    await wrapper.setProps({ modelValue: true });
    await afterOpen();
    expect(document.querySelector("input")).toBe(input);
    expect(input.value).toBe(typed);
  });
});
