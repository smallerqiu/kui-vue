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
    await nextTick();
    expect(item.getAttribute("aria-busy")).toBe("true");
    expect(item.querySelector(".k-load-loop")).not.toBeNull();
    resolveLoad([{ label: "Loaded child", value: "child", isLeaf: true }]);
    await flushPromises();
    expect(item.hasAttribute("aria-busy")).toBe(false);
    expect(item.querySelector(".k-load-loop")).toBeNull();
    expect(document.body.textContent).toContain("Loaded child");
  });

  it("treats an empty successful load as completed", async () => {
    const loadData = vi.fn(async () => [] as CascaderOption[]);
    const wrapper = mount(Cascader, {
      props: {
        options: [{ label: "Empty branch", value: "empty", isLeaf: false }],
        loadData,
      },
      attachTo: document.body,
    });
    await wrapper.trigger("click");
    await nextTick();
    const item = document.querySelector<HTMLElement>(".k-cascader-dropdown-item")!;
    item.click();
    await flushPromises();
    item.click();
    await flushPromises();

    expect(loadData).toHaveBeenCalledOnce();
    expect(wrapper.emitted("change")?.at(-1)?.[0]).toEqual(["empty"]);
  });

  it("allows a failed load to be retried", async () => {
    const loadData = vi
      .fn<() => Promise<CascaderOption[]>>()
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce([{ label: "Retried child", value: "child", isLeaf: true }]);
    const wrapper = mount(Cascader, {
      props: {
        options: [{ label: "Retry branch", value: "retry", isLeaf: false }],
        loadData,
      },
      attachTo: document.body,
    });
    await wrapper.trigger("click");
    await nextTick();
    const item = document.querySelector<HTMLElement>(".k-cascader-dropdown-item")!;
    item.click();
    await flushPromises();
    item.click();
    await flushPromises();

    expect(loadData).toHaveBeenCalledTimes(2);
    expect(document.body.textContent).toContain("Retried child");
  });

  it("supports loadData mutating option children and returning void", async () => {
    const option: CascaderOption = { label: "Mutable branch", value: "mutable", isLeaf: false };
    const loadData = vi.fn(async (target: CascaderOption) => {
      target.children = [{ label: "Mutated child", value: "child", isLeaf: true }];
    });
    const wrapper = mount(Cascader, {
      props: { options: [option], loadData },
      attachTo: document.body,
    });
    await wrapper.trigger("click");
    await nextTick();
    document.querySelector<HTMLElement>(".k-cascader-dropdown-item")!.click();
    await flushPromises();
    await nextTick();

    expect(loadData).toHaveBeenCalledOnce();
    expect(document.body.textContent).toContain("Mutated child");
  });
});
