import { flushPromises, mount } from "@vue/test-utils";
import { h, nextTick, reactive } from "vue";
import { describe, expect, it, vi } from "vitest";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import type { FormExpose, FormRule } from "../components/form/types";

describe("Form", () => {
  it("validates required fields through the exposed API", async () => {
    const model = { name: "" };
    const wrapper = mount(Form, {
      props: {
        model,
        rules: {
          name: [{ required: true, message: "Name is required" }],
        },
      },
      slots: {
        default: () => h(FormItem, { label: "Name", prop: "name" }, () => h("input")),
      },
    });

    await nextTick();
    const form = wrapper.vm as unknown as FormExpose;

    await expect(form.validate()).resolves.toEqual({ valid: false });
    await nextTick();
    expect(wrapper.text()).toContain("Name is required");

    model.name = "Ada";
    await expect(form.validate()).resolves.toEqual({ valid: true });
  });

  it("honours rule trigger", async () => {
    const model = reactive({ name: "" });
    const wrapper = mount(Form, {
      props: {
        model,
        rules: {
          name: [{ required: true, message: "Name is required", trigger: "blur" }],
        },
      },
      slots: {
        default: () => h(FormItem, { label: "Name", prop: "name" }, () => h("input")),
      },
    });
    await nextTick();

    // 值变为非法时，trigger 为 blur 的规则仍不应在 change 时校验
    model.name = "Ada";
    await flushPromises();
    model.name = "";
    await flushPromises();
    expect(wrapper.text()).not.toContain("Name is required");

    // 失焦时才校验
    await wrapper.find("input").trigger("blur");
    await flushPromises();
    expect(wrapper.text()).toContain("Name is required");
  });

  it("runs validator together with required", async () => {
    const validator = vi.fn(
      (_rule: FormRule, value: unknown, callback: (error?: Error) => void) => {
        if (value === "taken") callback(new Error("Name is taken"));
        else callback();
      }
    );
    const model = { name: "taken" };
    const wrapper = mount(Form, {
      props: {
        model,
        rules: { name: [{ required: true, validator }] },
      },
      slots: {
        default: () => h(FormItem, { label: "Name", prop: "name" }, () => h("input")),
      },
    });
    await nextTick();
    const form = wrapper.vm as unknown as FormExpose;

    await expect(form.validate()).resolves.toEqual({ valid: false });
    expect(validator).toHaveBeenCalled();
    await flushPromises();
    expect(wrapper.text()).toContain("Name is taken");
  });

  it("clears the message when validation passes", async () => {
    const model = { mail: "not-a-mail" };
    const wrapper = mount(Form, {
      props: {
        model,
        rules: { mail: [{ type: "mail", message: "Invalid mail" }] },
      },
      slots: {
        default: () => h(FormItem, { label: "Mail", prop: "mail" }, () => h("input")),
      },
    });
    await nextTick();
    const form = wrapper.vm as unknown as FormExpose;

    await expect(form.validate()).resolves.toEqual({ valid: false });
    expect(wrapper.text()).toContain("Invalid mail");

    model.mail = "ada@example.com";
    await expect(form.validate()).resolves.toEqual({ valid: true });
    await flushPromises();
    expect(wrapper.text()).not.toContain("Invalid mail");
  });
});
