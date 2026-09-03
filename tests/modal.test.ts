import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick } from "vue";
import Modal from "../components/modal/modal";
import Select from "../components/select/select";

describe("Modal popup host", () => {
  it("closes teleported child popups when Escape closes the modal", async () => {
    const wrapper = mount(
      defineComponent(() => () =>
        h(
          Modal,
          { modelValue: true, footer: false },
          {
            default: () =>
              h(Select, { options: [{ label: "Alpha", value: "alpha" }] }),
          },
        ),
      ),
      { attachTo: document.body },
    );
    await nextTick();
    await nextTick();
    const select = wrapper.findComponent(Select);

    await select.trigger("click");
    await nextTick();
    expect(document.body.querySelector(".k-select-dropdown")).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();

    expect(select.emitted("openChange")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });
});
