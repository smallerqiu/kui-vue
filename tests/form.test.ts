import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { describe, expect, it } from "vitest";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import type { FormExpose } from "../components/form/types";

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
});
