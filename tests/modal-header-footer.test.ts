import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Modal from "../components/modal/modal";

/**
 * Modal 的面板谓词契约：没给 title 就不该有 header（空标题也会撑出一条带边框的横条），
 * footer 关掉时既没有 .k-modal-footer，也不该带 k-modal-has-footer（它决定 body 的可用高度）。
 * 两个仓库断言同一件事，见 kui-react/tests/modal-header-footer.test.tsx。
 */

const settle = async () => {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 80));
  await nextTick();
};

const wrappers: VueWrapper[] = [];

const open = (props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) => {
  const wrapper = mount(Modal, {
    attachTo: document.body,
    props: { modelValue: true, title: "标题", ...props },
    slots: { default: () => h("span", "内容"), ...slots },
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

const root = () => document.querySelector(".k-modal");

describe("Modal header and footer predicates", () => {
  it("renders the header and the default footer", async () => {
    open();
    await settle();

    expect(document.querySelector(".k-modal-header-inner")?.textContent).toBe("标题");
    expect(document.querySelectorAll(".k-modal-footer button")).toHaveLength(2);
    expect(root()?.classList.contains("k-modal-has-footer")).toBe(true);
  });

  it("drops the header when no title is given", async () => {
    open({ title: undefined });
    await settle();

    expect(document.querySelector(".k-modal-header")).toBeNull();
    expect(document.querySelector(".k-modal-body")?.textContent).toBe("内容");
  });

  it("drops the header for an explicit null title", async () => {
    open({ title: null });
    await settle();

    expect(document.querySelector(".k-modal-header")).toBeNull();
  });

  // title 插槽是 vue 侧对 react `title: ReactNode` 的表达方式：富内容靠它，不是靠字符串。
  it("prefers the title slot over the title prop", async () => {
    open({ title: "标题" }, { title: () => h("em", "富标题") });
    await settle();

    expect(document.querySelector(".k-modal-header-inner em")?.textContent).toBe("富标题");
    expect(document.querySelector(".k-modal-header-inner")?.textContent).toBe("富标题");
  });

  it("renders the header from the title slot alone", async () => {
    open({ title: undefined }, { title: () => h("em", "只有插槽") });
    await settle();

    expect(document.querySelector(".k-modal-header-inner")?.textContent).toBe("只有插槽");
  });

  it("falls back to the title prop when the slot renders nothing", async () => {
    open({ title: "标题" }, { title: () => null });
    await settle();

    expect(document.querySelector(".k-modal-header-inner")?.textContent).toBe("标题");
  });

  it("drops the header when the slot and the prop are both empty", async () => {
    open({ title: undefined }, { title: () => false });
    await settle();

    expect(document.querySelector(".k-modal-header")).toBeNull();
  });

  it("drops the footer node and its class when footer is off", async () => {
    open({ footer: false });
    await settle();

    expect(document.querySelector(".k-modal-footer")).toBeNull();
    expect(root()?.classList.contains("k-modal-has-footer")).toBe(false);
  });

  it("treats a null footer the same as false", async () => {
    open({ footer: null });
    await settle();

    expect(document.querySelector(".k-modal-footer")).toBeNull();
    expect(root()?.classList.contains("k-modal-has-footer")).toBe(false);
  });

  it("keeps custom footer content", async () => {
    open({}, { footer: () => h("span", "自定义") });
    await settle();

    expect(document.querySelector(".k-modal-footer")?.textContent).toBe("自定义");
    expect(root()?.classList.contains("k-modal-has-footer")).toBe(true);
  });
});
