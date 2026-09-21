import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import ColorPicker from "../components/color-picker";
import { Select } from "../components/select";
import TreeSelect from "../components/tree-select";
import Rate from "../components/rate";
import Upload from "../components/upload";
import Tooltip from "../components/tooltip";
import InputOTP from "../components/input-otp";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("disabled audit regressions", () => {
  it("disables embedded Select and TreeSelect search inputs", () => {
    for (const Component of [Select, TreeSelect]) {
      const wrapper = mount(Component, { props: { disabled: true, filterable: true } });
      expect((wrapper.get("input").element as HTMLInputElement).disabled).toBe(true);
      wrapper.unmount();
    }
  });

  it("blocks disabled ColorPicker presets and stops in-flight drags", async () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
    vi.spyOn(HTMLCanvasElement.prototype, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON() {},
    });
    const onChange = vi.fn();
    const wrapper = mount(ColorPicker, {
      props: { panelOnly: true, disabled: true, modelValue: "#ff0000", onChange },
    });
    await wrapper.get(".k-color-picker-presets span").trigger("click");
    await wrapper.get(".k-color-picker-hue").trigger("mousedown", { clientX: 50 });
    expect(onChange).not.toHaveBeenCalled();
    expect(wrapper.get(".k-color-picker-body").element.hasAttribute("inert")).toBe(true);
    await wrapper.setProps({ disabled: false });
    await wrapper.get(".k-color-picker-hue").trigger("mousedown", { clientX: 50 });
    expect(onChange).toHaveBeenCalled();
    onChange.mockClear();
    await wrapper.setProps({ disabled: true });
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: 150 }));
    expect(onChange).not.toHaveBeenCalled();
    await wrapper.setProps({ disabled: false });
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: 100 }));
    expect(onChange).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("discards hover-only Rate preview while disabled", async () => {
    const wrapper = mount(Rate, { props: { modelValue: 1 } });
    await wrapper.findAll(".k-star")[3].trigger("mousemove");
    expect(wrapper.findAll(".k-star-full")).toHaveLength(4);
    await wrapper.setProps({ disabled: true });
    expect(wrapper.findAll(".k-star-full")).toHaveLength(1);
    wrapper.unmount();
  });

  it("removes Upload drag-over styling on disable", async () => {
    const wrapper = mount(Upload, { props: { draggable: true } });
    await wrapper.get(".k-upload-add").trigger("dragenter");
    expect(wrapper.find(".k-upload-drag-over").exists()).toBe(true);
    await wrapper.setProps({ disabled: true });
    expect(wrapper.find(".k-upload-drag-over").exists()).toBe(false);
    await wrapper.get(".k-upload-add").trigger("dragleave");
    await wrapper.setProps({ disabled: false });
    expect(wrapper.find(".k-upload-drag-over").exists()).toBe(false);
    wrapper.unmount();
  });

  it("does not reopen disabled Tooltip from queued callbacks", async () => {
    const onShow = vi.fn();
    const wrapper = mount(Tooltip, {
      props: { disabled: true, "onUpdate:show": onShow },
      slots: { default: () => h("span", "Trigger") },
    });
    await wrapper.get("span").trigger("mouseenter");
    await nextTick();
    expect(onShow).not.toHaveBeenCalledWith(true);
    wrapper.unmount();
  });

  it("does not delete disabled OTP characters", async () => {
    const onChange = vi.fn();
    const wrapper = mount(InputOTP, { props: { disabled: true, modelValue: "1234", onChange } });
    await wrapper.get("input").trigger("keydown", { key: "Delete" });
    expect(onChange).not.toHaveBeenCalled();
    wrapper.unmount();
  });
});
