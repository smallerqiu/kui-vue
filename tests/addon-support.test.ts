import { flushPromises, mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { describe, expect, it } from "vitest";
import AutoComplete from "../components/auto-complete";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import InputNumber from "../components/input-number";
import type { FormExpose } from "../components/form/types";

describe("InputNumber addons", () => {
  it("renders both addons outside the field and keeps stepping on the inner input", async () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 2, addonBefore: "¥", addonAfter: "RMB" },
    });

    expect(wrapper.get(".k-input-group-prefix").text()).toBe("¥");
    expect(wrapper.get(".k-input-group-suffix").text()).toBe("RMB");

    const field = wrapper.get(".k-input-number");
    expect(field.element.parentElement).toBe(wrapper.get(".k-input-group").element);
    expect(field.find(".k-input-group-prefix").exists()).toBe(false);
    expect(field.find(".k-input-group-suffix").exists()).toBe(false);

    await wrapper.get("input").trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([3]);
    await wrapper.get("input").setValue("8");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([8]);
  });

  it("accepts addons through the named slots too", () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 1 },
      slots: { addonAfter: () => h("span", { class: "addon-node" }, "RMB") },
    });

    expect(wrapper.get(".k-input-group-suffix .addon-node").text()).toBe("RMB");
  });

  it("keeps Form validation with the number field behind the addons", async () => {
    const wrapper = mount(Form, {
      props: { model: { amount: "" }, rules: { amount: [{ required: true }] } },
      slots: {
        default: () =>
          h(FormItem, { label: "Amount", prop: "amount" }, () =>
            h(InputNumber, { addonBefore: "¥", addonAfter: "RMB" }),
          ),
      },
    });

    await expect((wrapper.vm as unknown as FormExpose).validate()).resolves.toEqual({
      valid: false,
    });
    expect(wrapper.find(".k-form-item-error").exists()).toBe(true);

    await wrapper.get("input").setValue("12");
    await flushPromises();
    await expect((wrapper.vm as unknown as FormExpose).validate()).resolves.toEqual({
      valid: true,
    });
    expect(wrapper.find(".k-form-item-error").exists()).toBe(false);
  });
});

describe("AutoComplete addons", () => {
  it("renders addons around the field and still opens the filtered list", async () => {
    const wrapper = mount(AutoComplete, {
      attachTo: document.body,
      props: {
        addonBefore: "https://",
        addonAfter: ".com",
        options: ["kui", "vue", "react"],
        placeholder: "domain",
      },
    });

    expect(wrapper.get(".k-input-group-prefix").text()).toBe("https://");
    expect(wrapper.get(".k-input-group-suffix").text()).toBe(".com");
    expect(wrapper.find(".k-auto-complete .k-input-group").exists()).toBe(true);

    await wrapper.get("input").setValue("ku");
    await nextTick();
    const items = document.querySelectorAll(".k-auto-complete-dropdown .k-select-item");
    expect(Array.from(items).map((item) => item.textContent)).toEqual(["kui"]);

    (items[0] as HTMLElement).click();
    await nextTick();
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["kui"]);
    wrapper.unmount();
  });

  it("accepts addons through the named slots too", () => {
    const wrapper = mount(AutoComplete, {
      props: { options: ["kui"] },
      slots: { addonBefore: () => h("span", { class: "addon-node" }, "https://") },
    });

    expect(wrapper.get(".k-input-group-prefix .addon-node").text()).toBe("https://");
    expect(wrapper.find(".k-input-group-suffix").exists()).toBe(false);
  });
});
