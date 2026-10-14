import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import Drawer from "../components/drawer";
import Select from "../components/select/select";

describe("Drawer target", () => {
  it("treats numeric string dimensions as pixels", async () => {
    const wrapper = mount(Drawer, {
      attachTo: document.body,
      props: { modelValue: true, width: "480", footer: false },
    });
    await nextTick();

    expect(document.body.querySelector<HTMLElement>(".k-drawer-box")?.style.width).toBe("480px");
    wrapper.unmount();
  });

  it("renders inside a static target and restores its positioning style", async () => {
    const Host = defineComponent({
      setup() {
        const open = ref(false);
        const target = ref<HTMLElement>();
        return () =>
          h("div", [
            h("button", { onClick: () => (open.value = true) }, "Open"),
            h("div", { ref: target, "data-testid": "drawer-target" }),
            h(
              Drawer,
              {
                modelValue: open.value,
                target: () => target.value,
                footer: false,
                mask: false,
              },
              { default: () => "Drawer content" },
            ),
          ]);
      },
    });

    const wrapper = mount(Host, { attachTo: document.body });
    const target = wrapper.find('[data-testid="drawer-target"]').element as HTMLElement;
    await wrapper.find("button").trigger("click");
    await nextTick();

    expect(target.querySelector(":scope > .k-drawer")).not.toBeNull();
    expect(target.style.position).toBe("relative");

    wrapper.unmount();
    expect(target.style.position).toBe("");
  });

  it("closes popups hosted by the drawer when the drawer closes", async () => {
    const options = [{ label: "Alpha", value: "alpha" }];
    const wrapper = mount(
      defineComponent(
        () => () =>
          h("div", [
            h(
              Drawer,
              { modelValue: true, footer: false },
              { default: () => h(Select, { options, class: "inside-select" }) },
            ),
          ]),
      ),
      { attachTo: document.body },
    );

    const select = wrapper.findComponent(Select);
    await select.trigger("click");
    await nextTick();
    expect(document.body.querySelector(".k-select-dropdown")).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();

    expect(select.emitted("openChange")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });
});

/**
 * 标题栏的有无是个谓词：不再拿写死的 "Title" 兜底（那是英文常量，也过不了国际化）。
 * Drawer 的右上角关闭按钮住在 header 里，所以只有"既没标题又不 closable"才整条不收。
 * `title` 属性收 VNode，富内容也可以走 `title` 插槽，插槽优先。
 * 两个仓库断言同一件事，见 kui-react/tests/drawer.test.tsx。
 */
describe("Drawer header", () => {
  const open = (props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) => {
    const wrapper = mount(Drawer, {
      attachTo: document.body,
      props: { modelValue: true, ...props },
      slots: { default: () => h("span", "内容"), ...slots },
    });
    return wrapper;
  };

  const settle = async () => {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 80));
    await nextTick();
  };

  it("shows the title text", async () => {
    const wrapper = open({ title: "标题" });
    await settle();
    expect(document.querySelector(".k-drawer-header-inner")?.textContent).toBe("标题");
    wrapper.unmount();
  });

  it("renders a VNode passed through the title prop", async () => {
    const wrapper = open({ title: h("em", "节点标题") });
    await settle();
    expect(document.querySelector(".k-drawer-header-inner em")?.textContent).toBe("节点标题");
    wrapper.unmount();
  });

  it("renders the title slot and prefers it over the prop", async () => {
    const wrapper = open({ title: "标题" }, { title: () => h("strong", "插槽标题") });
    await settle();
    expect(document.querySelector(".k-drawer-header-inner")?.textContent).toBe("插槽标题");
    wrapper.unmount();
  });

  it("keeps the bar for the close button when no title is given", async () => {
    const wrapper = open();
    await settle();
    // 以前这里会印出默认的 "Title"；现在标题文本是空的，X 还在。
    expect(document.querySelector(".k-drawer-header-inner")?.textContent).toBe("");
    expect(document.querySelector(".k-drawer-close")).not.toBeNull();
    wrapper.unmount();
  });

  it("drops the header when there is neither a title nor a close button", async () => {
    const wrapper = open({ closable: false });
    await settle();
    expect(document.querySelector(".k-drawer-body")).not.toBeNull();
    expect(document.querySelector(".k-drawer-header")).toBeNull();
    wrapper.unmount();
  });
});
