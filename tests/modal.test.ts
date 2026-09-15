import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick } from "vue";
import Modal from "../components/modal/modal";
import Select from "../components/select/select";

describe("Modal popup host", () => {
  it("moves focus into the dialog and restores the previous focus when closed", async () => {
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    trigger.focus();
    const wrapper = mount(Modal, {
      attachTo: document.body,
      props: { modelValue: true, title: "Accessible modal" },
    });
    await nextTick();
    await nextTick();
    await Promise.resolve();

    const dialog = document.body.querySelector<HTMLElement>(".k-modal-wrap");
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
    expect(document.body.querySelector(".k-modal-inner")?.contains(document.activeElement)).toBe(
      true,
    );

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await Promise.resolve();
    expect(document.activeElement).toBe(trigger);
    wrapper.unmount();
    trigger.remove();
  });

  it("treats a numeric string width as pixels", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, panelOnly: true, width: "480" } });
    expect(wrapper.find(".k-modal-inner").attributes("style")).toContain("width: 480px");
  });

  it("closes teleported child popups when Escape closes the modal", async () => {
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(
            Modal,
            { modelValue: true, footer: false },
            {
              default: () => h(Select, { options: [{ label: "Alpha", value: "alpha" }] }),
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
