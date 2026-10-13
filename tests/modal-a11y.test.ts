import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Modal from "../components/modal/modal";

/**
 * Modal 的遮罩语义契约：打开时锁页面滚动、给 dialog 标 aria-modal、把 Tab 关在面板内，
 * 关闭/卸载时把锁和焦点还给触发元素；嵌套时锁按引用计数，先关的那层不能把别的层的锁解掉。
 * 两个仓库断言同一件事，见 kui-react/tests/modal-a11y.test.tsx。
 */

const settle = async () => {
  await nextTick();
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 80));
  await nextTick();
};

const wrappers: VueWrapper[] = [];

const mountModal = (props: Record<string, unknown> = {}) => {
  const wrapper = mount(Modal, {
    attachTo: document.body,
    props: { modelValue: true, title: "标题", ...props },
    slots: { default: () => h("input", { "aria-label": "输入框" }) },
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

const locked = () => document.body.classList.contains("k-scroll-locked");

describe("Modal scroll lock and focus trap", () => {
  it("locks page scroll and marks the dialog modal", async () => {
    mountModal();
    await settle();

    expect(locked()).toBe(true);
    expect(document.body.style.overflowY).toBe("hidden");
    expect(document.querySelector(".k-modal-wrap")?.getAttribute("aria-modal")).toBe("true");
    expect(document.querySelector('[role="dialog"]')).not.toBeNull();
  });

  it("never locks or traps for panelOnly", async () => {
    mountModal({ panelOnly: true, modelValue: undefined });
    await settle();

    expect(locked()).toBe(false);
    expect(document.body.style.overflowY).toBe("");
    expect(document.querySelector(".k-modal-wrap")?.getAttribute("aria-modal")).toBeNull();
  });

  it("keeps Tab inside the panel", async () => {
    mountModal();
    await settle();

    const inner = document.querySelector<HTMLElement>(".k-modal-inner");
    const focusables = Array.from(
      inner?.querySelectorAll<HTMLElement>(
        "button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])",
      ) ?? [],
    );
    // 排除 .k-modal-inner 自己：它是 tabindex="-1" 的兜底焦点，不算在 Tab 序列里
    expect(focusables.length).toBeGreaterThan(2);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    last.focus();
    inner?.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
    expect(document.activeElement).toBe(first);

    first.focus();
    inner?.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true }),
    );
    expect(document.activeElement).toBe(last);
  });

  it("returns focus to the trigger once the modal closes", async () => {
    const trigger = document.createElement("button");
    trigger.textContent = "打开";
    document.body.appendChild(trigger);
    trigger.focus();

    const wrapper = mountModal();
    await settle();
    expect(document.activeElement?.closest(".k-modal-inner")).not.toBeNull();

    await wrapper.setProps({ modelValue: false });
    await settle();

    expect(document.activeElement).toBe(trigger);
    expect(locked()).toBe(false);
    trigger.remove();
  });

  it("unlocks only after the last stacked modal is gone", async () => {
    const outer = mountModal({ title: "外层" });
    await settle();
    const inner = mountModal({ title: "内层" });
    await settle();
    expect(locked()).toBe(true);

    inner.unmount();
    wrappers.splice(wrappers.indexOf(inner), 1);
    await settle();
    // 外层还开着，锁必须还在
    expect(locked()).toBe(true);

    outer.unmount();
    wrappers.splice(wrappers.indexOf(outer), 1);
    await settle();
    expect(locked()).toBe(false);
  });
});
