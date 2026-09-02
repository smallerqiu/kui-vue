import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import Drawer from "../components/drawer";

describe("Drawer target", () => {
  it("renders inside a static target and restores its positioning style", async () => {
    const Host = defineComponent({
      setup() {
        const open = ref(false);
        const target = ref<HTMLElement>();
        return () =>
          h("div", [
            h("button", { onClick: () => (open.value = true) }, "Open"),
            h("div", { ref: target, "data-testid": "drawer-target" }),
            h(
              Drawer,
              {
                modelValue: open.value,
                target: () => target.value,
                footer: false,
                mask: false,
              },
              { default: () => "Drawer content" },
            ),
          ]);
      },
    });

    const wrapper = mount(Host, { attachTo: document.body });
    const target = wrapper.find('[data-testid="drawer-target"]').element as HTMLElement;
    await wrapper.find("button").trigger("click");
    await nextTick();

    expect(target.querySelector(":scope > .k-drawer")).not.toBeNull();
    expect(target.style.position).toBe("relative");

    wrapper.unmount();
    expect(target.style.position).toBe("");
  });
});
