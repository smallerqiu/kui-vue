import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import Select from "../components/select/select";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Select", () => {
  it("selects multiple options and emits the updated value", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        modelValue: [],
        multiple: true,
        options: [
          { label: "Alpha", value: "alpha" },
          { label: "Beta", value: "beta" },
        ],
      },
    });

    await wrapper.trigger("click");
    await nextTick();

    const options = document.body.querySelectorAll<HTMLElement>(".k-select-item");
    expect(options).toHaveLength(2);

    options[0].click();
    await nextTick();

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["alpha"]]);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([["alpha"]]);
    wrapper.unmount();
  });

  it("opens and selects an option with the keyboard", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        options: [
          { label: "Disabled", value: "disabled", disabled: true },
          { label: "Alpha", value: "alpha" },
        ],
      },
    });
    const select = wrapper.find<HTMLElement>(".k-select");

    await select.trigger("focus");
    await select.trigger("keydown", { key: "ArrowDown" });
    await nextTick();
    await nextTick();

    expect(document.body.querySelector(".k-select-item-active")?.textContent).toContain("Alpha");

    await select.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["alpha"]);
    wrapper.unmount();
  });

  it("continues keyboard navigation after the selected option", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        modelValue: [],
        multiple: true,
        allowCreate: true,
        options: [
          { label: "Alpha", value: "alpha" },
          { label: "Beta", value: "beta" },
          { label: "Gamma", value: "gamma" },
        ],
      },
    });
    const select = wrapper.find(".k-select");

    await select.trigger("keydown", { key: "ArrowDown" });
    await nextTick();
    await nextTick();
    await select.trigger("keydown", { key: "Enter" });
    await select.trigger("keydown", { key: "ArrowDown" });
    await nextTick();

    expect(document.body.querySelector(".k-select-item-active")?.textContent).toContain("Beta");

    await select.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["alpha", "beta"]]);
    wrapper.unmount();
  });

  it("creates and selects a new option when allowCreate is enabled", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        modelValue: [],
        multiple: true,
        allowCreate: true,
        options: [{ label: "Alpha", value: "alpha" }],
      },
    });

    await wrapper.find(".k-select").trigger("click");
    await nextTick();
    const input = wrapper.find<HTMLInputElement>(".k-select-search");
    await input.setValue("Beta");
    await input.trigger("keydown", { key: "Enter" });
    await nextTick();

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["Beta"]]);
    expect(input.element.value).toBe("");
    expect(wrapper.text()).toContain("Beta");
    expect(
      [...document.body.querySelectorAll(".k-select-item")].some(
        (option) => option.textContent?.trim() === "Beta"
      )
    ).toBe(true);

    await input.setValue(" beta ");
    await input.trigger("keydown", { key: "Enter" });
    await nextTick();

    expect(input.element.value).toBe("");
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
    expect(wrapper.findAll(".k-select-tag")).toHaveLength(1);
    wrapper.unmount();
  });

  it("does not create options by default", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        modelValue: [],
        multiple: true,
        filterable: true,
        options: [{ label: "Alpha", value: "alpha" }],
      },
    });

    await wrapper.find(".k-select").trigger("click");
    await nextTick();
    const input = wrapper.find<HTMLInputElement>(".k-select-search");
    await input.setValue("Beta");
    await input.trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    wrapper.unmount();
  });
});
