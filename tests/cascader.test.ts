import { enableAutoUnmount, flushPromises, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import Cascader from "../components/cascader";
import type { CascaderOption } from "../components/cascader/types";

const options: CascaderOption[] = [
  {
    label: "Zhejiang",
    value: "zhejiang",
    children: [{ label: "Hangzhou", value: "hangzhou" }],
  },
  {
    label: "Jiangsu",
    value: "jiangsu",
    children: [{ label: "Nanjing", value: "nanjing" }],
  },
];

enableAutoUnmount(afterEach);

describe("Cascader", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("supports selecting a complete path with the keyboard", async () => {
    const wrapper = mount(Cascader, { props: { options }, attachTo: document.body });
    await wrapper.trigger("keydown", { key: "Enter" });
    await nextTick();
    await wrapper.trigger("keydown", { key: "Enter" });
    await wrapper.trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("update:modelValue")?.at(-1)?.[0]).toEqual(["zhejiang", "hangzhou"]);
  });

  it("renders custom empty text", async () => {
    const wrapper = mount(Cascader, {
      props: { emptyText: "Nothing here" },
      attachTo: document.body,
    });
    await wrapper.trigger("click");
    await nextTick();
    expect(document.body.textContent).toContain("Nothing here");
  });

  it("keeps ArrowDown in the current column", async () => {
    const wrapper = mount(Cascader, { props: { options } });
    await wrapper.trigger("keydown", { key: "Enter" });
    await nextTick();
    await wrapper.trigger("keydown", { key: "ArrowDown" });
    await wrapper.trigger("keydown", { key: "Enter" });
    await wrapper.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")?.at(-1)?.[0]).toEqual(["jiangsu", "nanjing"]);
  });

  it("loads children once and renders them when resolved", async () => {
    let resolveLoad!: (value: CascaderOption[]) => void;
    const loadData = vi.fn(
      () => new Promise<CascaderOption[]>((resolve) => (resolveLoad = resolve)),
    );
    const wrapper = mount(Cascader, {
      props: {
        options: [{ label: "Async", value: "async", isLeaf: false }],
        loadData,
      },
      attachTo: document.body,
    });
    await wrapper.trigger("click");
    await nextTick();
    const item = document.querySelector<HTMLElement>(".k-cascader-dropdown-item")!;
    item.click();
    item.click();
    expect(loadData).toHaveBeenCalledOnce();
    resolveLoad([{ label: "Loaded child", value: "child", isLeaf: true }]);
    await flushPromises();
    expect(document.body.textContent).toContain("Loaded child");
  });
});
