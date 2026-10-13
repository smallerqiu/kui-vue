import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Drawer from "../components/drawer";
import Modal from "../components/modal/modal";
import Popup from "../components/popup";

/**
 * Escape 的归属契约：一次按键只关最上面那一层；已经关上的、panelOnly 的、escKey=false 的窗口
 * 都不该抢走这次按键。遮罩层（Modal / Drawer）和弹层（Popup）共用同一个顺序时钟，
 * 所以下拉压在 Modal 上时，第一次 Escape 归下拉，Modal 保持打开（滚动锁还在就是没关）。
 * 两个仓库断言同一件事，见 kui-react/tests/overlay-escape.test.tsx。
 */

const settle = async () => {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 80));
  await nextTick();
};

const pressEscape = () => {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
};

// 打开着的遮罩层都锁着页面滚动，用它当"这层还开着"的判据
const stillOpen = () => document.body.classList.contains("k-scroll-locked");

const wrappers: VueWrapper[] = [];

const track = <T extends VueWrapper>(wrapper: T) => {
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

const openModal = (props: Record<string, unknown> = {}) =>
  track(
    mount(Modal, {
      attachTo: document.body,
      props: { modelValue: true, title: "标题", ...props },
      slots: { default: () => h("span", "内容") },
    }),
  );

const closes = (wrapper: VueWrapper) => (wrapper.emitted("close") ?? []).length;

describe("Escape closes only the topmost overlay", () => {
  it("leaves the modal below alone", async () => {
    const outer = openModal({ title: "外层" });
    await settle();
    const inner = openModal({ title: "内层" });
    await settle();

    pressEscape();
    await settle();
    expect(closes(inner)).toBe(1);
    expect(closes(outer)).toBe(0);
    expect(stillOpen()).toBe(true);

    pressEscape();
    await settle();
    expect(closes(outer)).toBe(1);
    expect(stillOpen()).toBe(false);
  });

  it("prefers the modal over the drawer opened before it", async () => {
    const drawer = track(
      mount(Drawer, {
        attachTo: document.body,
        props: { modelValue: true },
        slots: { default: () => h("span", "抽屉") },
      }),
    );
    await settle();
    const modal = openModal();
    await settle();

    pressEscape();
    await settle();
    expect(closes(modal)).toBe(1);
    expect(closes(drawer)).toBe(0);
  });

  it("yields to a popup opened above the modal", async () => {
    const modal = openModal();
    await settle();
    const popup = track(
      mount(Popup, {
        attachTo: document.body,
        props: { open: true, overlay: "下拉内容" },
        slots: { default: () => h("button", "触发") },
      }),
    );
    await settle();

    pressEscape();
    await settle();
    expect(closes(modal)).toBe(0);
    expect(stillOpen()).toBe(true);

    popup.unmount();
    wrappers.splice(wrappers.indexOf(popup), 1);
    await settle();
    pressEscape();
    await settle();
    expect(closes(modal)).toBe(1);
  });

  it("ignores a modal that is already closed", async () => {
    const modal = openModal();
    await settle();
    await modal.setProps({ modelValue: false });
    await settle();

    pressEscape();
    await settle();
    expect(closes(modal)).toBe(0);
  });

  it("ignores a panelOnly modal", async () => {
    const modal = openModal({ panelOnly: true, modelValue: undefined });
    await settle();

    pressEscape();
    await settle();
    expect(closes(modal)).toBe(0);
  });

  it("stops listening while escKey is off and resumes when it is back on", async () => {
    const modal = openModal({ escKey: false });
    await settle();

    pressEscape();
    await settle();
    expect(closes(modal)).toBe(0);

    await modal.setProps({ escKey: true });
    pressEscape();
    await settle();
    expect(closes(modal)).toBe(1);
  });
});
