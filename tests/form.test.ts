import { flushPromises, mount } from "@vue/test-utils";
import { defineComponent, h, nextTick, reactive, ref } from "vue";
import { describe, expect, it, vi } from "vitest";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import Checkbox from "../components/checkbox/checkbox";
import CheckboxGroup from "../components/checkbox/checkbox-group";
import CheckCard from "../components/check-card/check-card";
import ColorPicker from "../components/color-picker";
import ConfigProvider from "../components/config";
import Radio from "../components/radio/radio";
import RadioGroup from "../components/radio/radio-group";
import type { FormExpose, FormRule } from "../components/form/types";
import Rate from "../components/rate";
import { Input } from "../components/input";
import TextArea from "../components/input/textarea";
import InputNumber from "../components/input-number";
import Segmented from "../components/segmented";
import Switch from "../components/switch";
import Transfer from "../components/transfer";

describe("Form", () => {
  it("inherits appearance defaults from ConfigProvider and allows local overrides", () => {
    const wrapper = mount(ConfigProvider, {
      props: { size: "small", theme: "fill", shape: "square" },
      slots: {
        default: () =>
          h(Form, { model: { global: "", local: "" } }, () => [
            h(FormItem, { prop: "global" }, () => h(Input)),
            h(FormItem, { prop: "local" }, () =>
              h(Input, { size: "large", theme: "outline", shape: "round" }),
            ),
          ]),
      },
    });
    const inputs = wrapper.findAll(".k-input");

    expect(inputs[0].classes()).toEqual(
      expect.arrayContaining(["k-input-sm", "k-input-fill", "k-input-square"]),
    );
    expect(inputs[1].classes()).toContain("k-input-lg");
    expect(inputs[1].classes()).not.toContain("k-input-fill");
    expect(inputs[1].classes()).not.toContain("k-input-square");
  });

  it("keeps the required marker and colon inside a wrapping label", () => {
    const wrapper = mount(Form, {
      props: {
        model: { password: "" },
        rules: { password: { required: true } },
      },
      slots: {
        default: () => h(FormItem, { label: "Confirm Password", prop: "password" }, () => h(Input)),
      },
    });
    const label = wrapper.get(".k-form-item-label label");

    expect(label.get(".k-form-item-label-main").element.children).toHaveLength(2);
    expect(label.find(".k-form-item-required-mark").text()).toBe("*");
    expect(label.find(".k-form-item-label-text").text()).toBe("Confirm Password");
    expect(label.find(".k-form-item-colon").text()).toBe(":");
  });

  it("uses a replacement model object instead of the setup-time reference", async () => {
    const model = ref<Record<string, unknown>>({ name: "Ada" });
    const Host = defineComponent(
      () => () =>
        h(Form, { model: model.value }, () => h(FormItem, { prop: "name" }, () => h(Input))),
    );
    const wrapper = mount(Host);

    model.value = { name: "Grace" };
    await nextTick();
    expect(wrapper.find("input").element.value).toBe("Grace");

    await wrapper.find("input").setValue("Lin");
    expect(model.value.name).toBe("Lin");
  });

  it("does not select an empty-string RadioGroup option by default", () => {
    const wrapper = mount(RadioGroup, {
      props: { options: [{ label: "Empty", value: "" }] },
    });

    expect(wrapper.find("input").element.checked).toBe(false);
  });

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
      },
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

  it("links labels, controls and validation errors with accessible attributes", async () => {
    const wrapper = mount(Form, {
      props: {
        model: { name: "" },
        rules: { name: { required: true, message: "Name is required" } },
      },
      slots: {
        default: () => h(FormItem, { label: "Name", prop: "name" }, () => h("input")),
      },
    });
    await nextTick();

    const input = wrapper.find("input");
    const label = wrapper.find("label");
    expect(input.attributes("id")).toMatch(/^form_.+_name$/);
    expect(label.attributes("for")).toBe(input.attributes("id"));

    await (wrapper.vm as unknown as FormExpose).validate();
    await nextTick();
    const error = wrapper.find('[role="alert"]');
    expect(input.attributes("aria-invalid")).toBe("true");
    expect(input.attributes("aria-describedby")).toBe(error.attributes("id"));
  });

  it("forwards accessibility attributes to Radio and Checkbox inputs", async () => {
    const wrapper = mount(Form, {
      props: {
        model: reactive({ accepted: false, choice: "" }),
        rules: {
          accepted: { required: true, message: "Required" },
          choice: { required: true, message: "Required" },
        },
      },
      slots: {
        default: () => [
          h(FormItem, { label: "Accepted", prop: "accepted" }, () => h(Checkbox)),
          h(FormItem, { label: "Choice", prop: "choice" }, () => h(Radio, { value: "yes" })),
        ],
      },
    });
    await nextTick();

    const inputs = wrapper.findAll("input");
    const labels = wrapper.findAll(".k-form-item-label label");
    expect(labels[0].attributes("for")).toBe(inputs[0].attributes("id"));
    expect(labels[1].attributes("for")).toBe(inputs[1].attributes("id"));
    expect(inputs.every((input) => input.attributes("aria-required") === "true")).toBe(true);

    await (wrapper.vm as unknown as FormExpose).validate();
    await nextTick();
    expect(inputs.every((input) => input.attributes("aria-invalid") === "true")).toBe(true);
  });

  it("clears a standalone Radio when the form is reset", async () => {
    const model = reactive({ choice: true });
    const wrapper = mount(Form, {
      props: { model },
      slots: {
        default: () =>
          h(FormItem, { label: "Choice", prop: "choice" }, () => h(Radio, { value: "yes" })),
      },
    });

    expect(wrapper.find(".k-radio").classes()).toContain("k-radio-checked");
    (wrapper.vm as unknown as { reset: () => void }).reset();
    await nextTick();

    expect(model.choice).toBeNull();
    expect(wrapper.find(".k-radio").classes()).not.toContain("k-radio-checked");
  });

  it("does not mutate wrapperCol in vertical layout", () => {
    const wrapperCol = { span: 12, offset: 6 };
    mount(Form, {
      props: { layout: "vertical", wrapperCol },
      slots: { default: () => h(FormItem, { label: "Name" }, () => h("input")) },
    });
    expect(wrapperCol).toEqual({ span: 12, offset: 6 });
  });

  it("combines required, pattern and length constraints", async () => {
    const model = { code: "Abc" };
    const wrapper = mount(Form, {
      props: {
        model,
        rules: { code: [{ required: true, pattern: /^A/, min: 4, message: "Invalid code" }] },
      },
      slots: { default: () => h(FormItem, { prop: "code" }, () => h("input")) },
    });
    await nextTick();
    await expect((wrapper.vm as unknown as FormExpose).validate()).resolves.toEqual({
      valid: false,
    });
  });

  it("keeps the latest asynchronous validation result", async () => {
    const callbacks: Array<(error?: Error) => void> = [];
    const model = reactive({ name: "old" });
    const wrapper = mount(Form, {
      props: {
        model,
        rules: {
          name: [
            {
              validator: (_rule, _value, callback) => callbacks.push(callback),
            },
          ],
        },
      },
      slots: { default: () => h(FormItem, { prop: "name" }, () => h("input")) },
    });
    await nextTick();
    const form = wrapper.vm as unknown as FormExpose;
    const first = form.validate();
    model.name = "new";
    const second = form.validate();
    callbacks[1]();
    await second;
    callbacks[0](new Error("Stale error"));
    await first;
    await flushPromises();
    expect(wrapper.text()).not.toContain("Stale error");
  });

  it("updates registration when FormItem prop changes", async () => {
    const field = ref("first");
    const formRef = ref<FormExpose>();
    const model = { first: "", second: "ok" };
    const Host = defineComponent(
      () => () =>
        h(
          Form,
          {
            ref: formRef,
            model,
            rules: {
              first: [{ required: true }],
              second: [{ required: true }],
            },
          },
          { default: () => h(FormItem, { prop: field.value }, () => h("input")) },
        ),
    );
    const wrapper = mount(Host);
    await nextTick();
    await expect(formRef.value?.validate()).resolves.toEqual({ valid: false });
    field.value = "second";
    await nextTick();
    await expect(formRef.value?.validate()).resolves.toEqual({ valid: true });
    wrapper.unmount();
  });

  it("only injects model props into the first form control", async () => {
    const Control = defineComponent({
      props: { modelValue: String, size: String },
      setup: (props) => () =>
        h("span", { "data-value": props.modelValue, "data-size": props.size }),
    });
    const model = reactive({ name: "Ada" });
    const wrapper = mount(Form, {
      props: { model, size: "large" },
      slots: {
        default: () =>
          h(FormItem, { prop: "name" }, () => [h("div", "Hint"), h(Control), h(Control)]),
      },
    });
    const controls = wrapper.findAll("span");
    expect(wrapper.find("div").attributes("modelvalue")).toBeUndefined();
    expect(controls[0].attributes("data-value")).toBe("Ada");
    expect(controls[0].attributes("data-size")).toBe("large");
    expect(controls[1].attributes("data-value")).toBeUndefined();

    model.name = "Grace";
    await nextTick();
    expect(wrapper.findAll("span")[0].attributes("data-value")).toBe("Grace");
  });

  it("resets global and sticky regexp state between validations", async () => {
    const wrapper = mount(Form, {
      props: { model: { code: "AAA" }, rules: { code: [{ pattern: /^A/g }] } },
      slots: { default: () => h(FormItem, { prop: "code" }, () => h("input")) },
    });
    await nextTick();
    const form = wrapper.vm as unknown as FormExpose;
    await expect(form.validate()).resolves.toEqual({ valid: true });
    await expect(form.validate()).resolves.toEqual({ valid: true });
  });

  it("skips other built-in rules for an optional empty value", async () => {
    const wrapper = mount(Form, {
      props: { model: { mail: "" }, rules: { mail: [{ type: "mail", min: 5 }] } },
      slots: { default: () => h(FormItem, { prop: "mail" }, () => h("input")) },
    });
    await nextTick();
    await expect((wrapper.vm as unknown as FormExpose).validate()).resolves.toEqual({
      valid: true,
    });
  });

  it("keeps the inherited Rate size after its value changes", async () => {
    const model = reactive({ rate: 0 });
    const wrapper = mount(Form, {
      props: { model, size: "large" },
      slots: {
        default: () => h(FormItem, { prop: "rate" }, () => h(Rate)),
      },
    });
    await nextTick();
    expect(wrapper.find(".k-rate").attributes("style")).toContain("font-size: 32px");
    model.rate = 5;
    await nextTick();
    expect(wrapper.findAll(".k-star-full")).toHaveLength(5);

    await wrapper.setProps({ size: "small" });
    expect(wrapper.find(".k-rate").attributes("style")).toContain("font-size: 20px");
    expect(wrapper.findAll(".k-rate .k-icon")).toHaveLength(10);
    expect(wrapper.findAll(".k-rate .k-icon").map((icon) => icon.attributes("style"))).toEqual(
      Array(10).fill("font-size: 20px;"),
    );

    expect(wrapper.findAll(".k-star-full")).toHaveLength(5);

    await wrapper.find(".k-star").trigger("click", { clientX: 1 });
    await nextTick();
    expect(model.rate).toBe(1);
    expect(wrapper.find(".k-rate").attributes("style")).toContain("font-size: 20px");
    expect(wrapper.findAll(".k-rate .k-icon").map((icon) => icon.attributes("style"))).toEqual(
      Array(10).fill("font-size: 20px;"),
    );
  });

  it("keeps migrated controls synchronized without binding their internal Input twice", async () => {
    const model = reactive({ name: "Ada", count: 2, enabled: false });
    const wrapper = mount(Form, {
      props: { model, size: "large", disabled: false },
      slots: {
        default: () => [
          h(FormItem, { label: "Name", prop: "name" }, () => h(Input)),
          h(FormItem, { label: "Count", prop: "count" }, () => h(InputNumber)),
          h(FormItem, { label: "Enabled", prop: "enabled" }, () => h(Switch)),
        ],
      },
    });
    await nextTick();

    const inputs = wrapper.findAll("input");
    expect(inputs[0].element.value).toBe("Ada");
    expect(inputs[1].element.value).toBe("2");
    expect(wrapper.find(".k-switch").attributes("aria-checked")).toBe("false");

    model.name = "Grace";
    model.count = 8;
    model.enabled = true;
    await nextTick();
    expect(inputs[0].element.value).toBe("Grace");
    expect(inputs[1].element.value).toBe("8");
    expect(wrapper.find(".k-switch").attributes("aria-checked")).toBe("true");

    await inputs[0].setValue("Lin");
    await wrapper.find(".k-switch").trigger("click");
    expect(model.name).toBe("Lin");
    expect(model.enabled).toBe(false);
  });

  it("passes Form appearance to every compatible field control", async () => {
    const model = reactive({
      input: "",
      textarea: "",
      number: 1,
      enabled: false,
      segmented: "daily",
      checks: [] as string[],
      color: "#1677ff",
    });
    const wrapper = mount(Form, {
      props: { model, size: "small", theme: "outline", shape: "square" },
      slots: {
        default: () => [
          h(FormItem, { prop: "input" }, () => h(Input)),
          h(FormItem, { prop: "textarea" }, () => h(TextArea)),
          h(FormItem, { prop: "number" }, () => h(InputNumber)),
          h(FormItem, { prop: "enabled" }, () => h(Switch)),
          h(FormItem, { prop: "segmented" }, () => h(Segmented, { options: ["daily", "weekly"] })),
          h(FormItem, { prop: "checks" }, () =>
            h(CheckboxGroup, { options: [{ label: "Vue", value: "vue" }] }),
          ),
          h(FormItem, { prop: "color" }, () => h(ColorPicker)),
        ],
      },
    });

    expect(wrapper.get(".k-input").classes()).toEqual(
      expect.arrayContaining(["k-input-sm", "k-input-square"]),
    );
    expect(wrapper.get(".k-input").classes()).not.toContain("k-input-fill");
    expect(wrapper.get(".k-textarea").classes()).toEqual(
      expect.arrayContaining(["k-textarea-sm", "k-textarea-square"]),
    );
    expect(wrapper.get(".k-input-number").classes()).toEqual(
      expect.arrayContaining(["k-input-number-sm", "k-input-number-square"]),
    );
    expect(wrapper.get(".k-switch").classes()).toEqual(
      expect.arrayContaining(["k-switch-sm", "k-switch-square"]),
    );
    expect(wrapper.get(".k-segmented").classes()).toEqual(
      expect.arrayContaining(["k-segmented-small", "k-segmented-square"]),
    );
    expect(wrapper.get(".k-checkbox").classes()).not.toContain("k-checkbox-fill");
    expect(wrapper.get(".k-color-picker").classes()).toContain("k-color-picker-square");
    expect(wrapper.get(".k-color-picker").classes()).not.toContain("k-color-picker-fill");
  });

  it("passes fill and shape appearance to compound field controls", () => {
    const model = reactive({ card: false, transfer: [] as string[] });
    const wrapper = mount(Form, {
      props: { model, theme: "fill", shape: "square", size: "small" },
      slots: {
        default: () => [
          h(FormItem, { prop: "card" }, () => h(CheckCard, { title: "Card" })),
          h(FormItem, { prop: "transfer" }, () =>
            h(Transfer, { dataSource: [{ key: "vue", title: "Vue" }] }),
          ),
        ],
      },
    });

    expect(wrapper.get(".k-check-card").classes()).toEqual(
      expect.arrayContaining(["k-check-card-fill", "k-check-card-small", "k-check-card-square"]),
    );
    expect(wrapper.get(".k-transfer").classes()).toContain("k-transfer-fill");
  });
});
