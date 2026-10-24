import { flushPromises, mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { describe, expect, it } from "vitest";
import AutoComplete from "../components/auto-complete";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import InputNumber from "../components/input-number";
import Input from "../components/input";
import type { FormExpose } from "../components/form/types";

describe("InputNumber addons", () => {
  it.each(["fill", "outline", "dashed", "plain", "solid", "underlined"] as const)(
    "forwards %s to the addon group",
    (theme) => {
      const wrapper = mount(InputNumber, { props: { theme, addonBefore: "¥", addonAfter: "RMB" } });
      expect(wrapper.get(".k-input-group").classes()).toContain(`k-input-group-${theme}`);
      wrapper.unmount();
    },
  );
  for (const component of [Input, InputNumber]) {
    it(`${component.name} renders numeric zero consistently in props and slots`, () => {
      const wrappers = [
        mount(component, { props: { addonBefore: 0, addonAfter: 0 } }),
        mount(component, { slots: { addonBefore: () => 0, addonAfter: () => 0 } }),
      ];
      for (const wrapper of wrappers) {
        expect(wrapper.get(".k-input-group-prefix").text()).toBe("0");
        expect(wrapper.get(".k-input-group-suffix").text()).toBe("0");
        wrapper.unmount();
      }
    });
  }

  it("prefers named addon slots over props", () => {
    const wrapper = mount(InputNumber, {
      props: { addonBefore: "before", addonAfter: "after" },
      slots: { addonBefore: () => 0, addonAfter: () => h("button", "Top up") },
    });
    expect(wrapper.get(".k-input-group-prefix").text()).toBe("0");
    expect(wrapper.get(".k-input-group-suffix button").text()).toBe("Top up");
    wrapper.unmount();
  });
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

  it("takes node content for prefix and suffix", () => {
    const wrapper = mount(InputNumber, {
      props: {
        modelValue: 1,
        prefix: h("span", { class: "prefix-node" }, "$"),
        suffix: h("span", { class: "suffix-node" }, "USD"),
      },
    });

    expect(wrapper.get(".k-input-number-prefix .prefix-node").text()).toBe("$");
    expect(wrapper.get(".k-input-number-suffix .suffix-node").text()).toBe("USD");
  });

  it("takes prefix and suffix through the named slots too", () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 1 },
      slots: {
        prefix: () => h("span", { class: "prefix-node" }, "$"),
        suffix: () => h("span", { class: "suffix-node" }, "USD"),
      },
    });

    expect(wrapper.get(".k-input-number-prefix .prefix-node").text()).toBe("$");
    expect(wrapper.get(".k-input-number-suffix .suffix-node").text()).toBe("USD");
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

  it("keeps prefix and suffix inside the field", () => {
    const wrapper = mount(AutoComplete, {
      props: { prefix: "@", suffix: ".cn", options: ["kui"] },
    });

    expect(wrapper.find(".k-input-group").exists()).toBe(false);
    expect(wrapper.get(".k-input-prefix").text()).toBe("@");
    expect(wrapper.get(".k-input-suffix").text()).toBe(".cn");
  });

  it("accepts prefix and suffix through the named slots too", () => {
    const wrapper = mount(AutoComplete, {
      props: { options: ["kui"] },
      slots: {
        prefix: () => h("span", { class: "prefix-node" }, "@"),
        suffix: () => h("span", { class: "suffix-node" }, ".cn"),
      },
    });

    expect(wrapper.get(".k-input-prefix .prefix-node").text()).toBe("@");
    expect(wrapper.get(".k-input-suffix .suffix-node").text()).toBe(".cn");
  });
});
