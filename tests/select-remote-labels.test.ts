import { mount } from "@vue/test-utils";
import { expect, it, vi } from "vitest";
import Select from "../components/select/select";

it.each([false, true])(
  "preserves selected labels across remote results (multiple=%s)",
  async (multiple) => {
    const value = multiple ? [0] : 0;
    const wrapper = mount(Select, {
      props: {
        multiple,
        modelValue: value,
        onSearch: vi.fn(),
        options: [{ value: 0, label: "Zero" }],
      },
    });
    const label = () => wrapper.find(multiple ? ".k-select-labels" : ".k-select-label").text();
    expect(label()).toContain("Zero");
    await wrapper.setProps({ loading: true, options: [] });
    expect(label()).toContain("Zero");
    await wrapper.setProps({ loading: false, options: [{ value: 1, label: "One" }] });
    expect(label()).toContain("Zero");
    await wrapper.setProps({ options: [] });
    expect(label()).toContain("Zero");
    await wrapper.setProps({ options: [{ value: 0, label: "Updated" }] });
    expect(label()).toContain("Updated");
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    await wrapper.setProps({ modelValue: multiple ? [] : "", options: [] });
    expect(label()).not.toContain("Updated");
    await wrapper.setProps({ modelValue: value });
    expect(label()).toContain("0");
    expect(label()).not.toContain("Updated");
    wrapper.unmount();
  },
);

// 与 kui-react 的 `tests/select-remote-labels.test.tsx` 同语义：`Number(rawId)` 解析失败会把 NaN
// 送进 value 或 label。react 侧曾因 render 阶段用 `!==` 比较缓存标签而无限重渲染，vue 的 computed
// 版本不会循环，但两边都必须把 NaN 当普通数字渲染成 "NaN"，不许崩、也不许显示成空。
it.each([false, true])("renders a NaN selection as text (multiple=%s)", (multiple) => {
  const wrapper = mount(Select, {
    props: {
      multiple,
      modelValue: multiple ? [Number.NaN, 0] : Number.NaN,
      options: [{ value: 0, label: "Zero" }],
    },
  });
  const label = wrapper.find(multiple ? ".k-select-labels" : ".k-select-label").text();
  expect(label).toContain("NaN");
  if (multiple) expect(label).toContain("Zero");
  wrapper.unmount();
});

it("renders a NaN option label as text", () => {
  const wrapper = mount(Select, {
    props: { modelValue: 1, options: [{ value: 1, label: Number.NaN }] },
  });
  expect(wrapper.find(".k-select-label").text()).toContain("NaN");
  wrapper.unmount();
});
