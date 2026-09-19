import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { h, nextTick, type Component } from "vue";
import InputTag from "../components/input-tag";
import TreeSelect from "../components/tree-select";

const treeData = [
  { key: "apple", title: "Apple" },
  { key: "pear", title: "Pear" },
];

describe.each(["InputTag", "TreeSelect"])("%s overflow preview", (name) => {
  it.each(["disabled", "readonly", "editable"])(
    "keeps a readable preview in %s state",
    async (mode) => {
      const onUpdate = vi.fn();
      const component = name === "InputTag" ? InputTag : TreeSelect;
      const wrapper = mount(
        {
          render: () =>
            h(component as Component, {
              modelValue: ["apple", "pear"],
              maxTagCount: 1,
              disabled: mode === "disabled",
              readonly: mode === "readonly",
              "onUpdate:modelValue": onUpdate,
              ...(name === "TreeSelect" ? { multiple: true, treeData } : {}),
            }),
        },
        { attachTo: document.body },
      );
      try {
        const trigger = wrapper.findAll(".k-tag").find((tag) => tag.text().includes("+1..."))!;
        await trigger.trigger("mouseenter");
        await nextTick();
        const tag = document.querySelector(".k-tooltip .k-tag")!;
        expect(tag?.textContent?.toLowerCase()).toContain("pear");
        expect(tag.closest('[theme-mode="dark"]')).not.toBeNull();
        const close = tag.querySelector(".k-tag-close");
        if (mode === "editable") {
          expect(close).not.toBeNull();
          close!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          await nextTick();
          expect(onUpdate).toHaveBeenLastCalledWith(["apple"]);
        } else {
          expect(close).toBeNull();
          tag.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          await nextTick();
          expect(onUpdate).not.toHaveBeenCalled();
        }
      } finally {
        wrapper.unmount();
      }
    },
  );
});
