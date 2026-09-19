import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import Select from "../components/select/select";

describe("Select overflow preview", () => {
  it("uses dark theme tokens and keeps disabled tags non-removable", async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        multiple: true,
        disabled: true,
        modelValue: ["apple", "pear"],
        maxTagCount: 1,
        options: [
          { label: "Apple", value: "apple" },
          { label: "Pear", value: "pear" },
        ],
      },
    });
    try {
      const trigger = wrapper.findAll(".k-tag").find((tag) => tag.text().includes("+1..."))!;
      await trigger.trigger("mouseenter");
      await nextTick();
      const tag = document.querySelector(".k-tooltip .k-tag")!;
      expect(tag?.textContent).toContain("Pear");
      expect(tag.closest('[theme-mode="dark"]')).not.toBeNull();
      expect(tag.querySelector(".k-tag-close")).toBeNull();
      tag.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      await nextTick();
      expect(wrapper.emitted("update:modelValue")).toBeUndefined();
      expect(wrapper.get('[role="combobox"]').attributes("aria-expanded")).toBe("false");
    } finally {
      wrapper.unmount();
    }
  });
});
