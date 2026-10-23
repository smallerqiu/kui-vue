import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { describe, expect, it, vi } from "vitest";
import { renderSelectionTags } from "../components/utils/selection-tags";

describe("shared selection tags", () => {
  it.each([0, -2, 0.9, 1.9])(
    "preserves removal indexes with maxTagCount=%s",
    async (maxTagCount) => {
      const onRemove = vi.fn();
      const count = Math.max(0, Math.floor(maxTagCount));
      const wrapper = mount(
        {
          render: () =>
            h("div", renderSelectionTags({ labels: ["Apple", "Pear"], maxTagCount, onRemove })),
        },
        { attachTo: document.body },
      );
      try {
        await wrapper
          .findAll(".k-tag")
          .find((tag) => tag.text() === `+${2 - count}...`)!
          .trigger("mouseenter");
        await nextTick();
        const hidden = document.querySelectorAll(".k-tooltip .k-tag");
        expect(hidden).toHaveLength(2 - count);
        hidden[hidden.length - 1]
          .querySelector(".k-tag-close")!
          .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(onRemove).toHaveBeenCalledWith(1);
      } finally {
        wrapper.unmount();
      }
    },
  );
  it.each([undefined, NaN, Infinity])("shows all tags for a non-finite limit %s", (maxTagCount) => {
    const wrapper = mount({
      render: () =>
        h(
          "div",
          renderSelectionTags({ labels: ["Apple", "Pear"], maxTagCount, onRemove: vi.fn() }),
        ),
    });
    try {
      expect(wrapper.findAll(".k-tag")).toHaveLength(2);
      expect(wrapper.text()).toBe("ApplePear");
    } finally {
      wrapper.unmount();
    }
  });
  it.each(["small", "medium", "large"] as const)(
    "keeps the overflow preview at the control's own size (%s)",
    async (size) => {
      const wrapper = mount(
        {
          render: () =>
            h(
              "div",
              renderSelectionTags({
                labels: ["Apple", "Pear"],
                maxTagCount: 0,
                size,
                onRemove: vi.fn(),
              }),
            ),
        },
        { attachTo: document.body },
      );
      try {
        await wrapper
          .findAll(".k-tag")
          .find((tag) => tag.text() === "+2...")!
          .trigger("mouseenter");
        await nextTick();
        const hidden = document.querySelectorAll(".k-tooltip .k-tag");
        expect(hidden).toHaveLength(2);
        // The preview holds the very tags the limit hid, so shrinking them there reads as a
        // different kind of chip. Both size classes are pinned: the medium control paints neither.
        for (const tag of hidden) {
          expect(tag.classList.contains("k-tag-sm")).toBe(size === "small");
          expect(tag.classList.contains("k-tag-lg")).toBe(size === "large");
        }
      } finally {
        wrapper.unmount();
      }
    },
  );
});
