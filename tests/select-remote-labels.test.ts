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
