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
});
