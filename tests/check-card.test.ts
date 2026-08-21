import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import { CheckCard, CheckCardGroup } from "../components/check-card";

describe("CheckCard", () => {
  it("toggles a standalone card", async () => {
    const wrapper = mount(CheckCard, { props: { modelValue: false, title: "Agreement" } });

    await wrapper.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([true]);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([{ checked: true, value: undefined }]);
  });

  it("selects only one option in a group", async () => {
    const Host = defineComponent({
      setup() {
        const value = ref("personal");
        return () =>
          h(CheckCardGroup, {
            modelValue: value.value,
            "onUpdate:modelValue": (next) => (value.value = next),
            options: [
              { value: "personal", title: "Personal" },
              { value: "team", title: "Team" },
            ],
          });
      },
    });
    const wrapper = mount(Host);
    const cards = wrapper.findAll(".k-check-card");

    expect(cards[0].attributes("aria-checked")).toBe("true");
    await cards[1].trigger("click");
    await nextTick();
    expect(cards[0].attributes("aria-checked")).toBe("false");
    expect(cards[1].attributes("aria-checked")).toBe("true");
  });

  it("supports arrow-key selection and skips disabled cards", async () => {
    const wrapper = mount(CheckCardGroup, {
      props: {
        modelValue: "one",
        options: [
          { value: "one", title: "One" },
          { value: "two", title: "Two", disabled: true },
          { value: "three", title: "Three" },
        ],
      },
    });

    await wrapper.findAll(".k-check-card")[0].trigger("keydown", { key: "ArrowRight" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["three"]);
  });

  it("renders custom slots and inherited group appearance", () => {
    const wrapper = mount(CheckCardGroup, {
      props: { modelValue: 1, theme: "fill", size: "large", shape: "square" },
      slots: {
        default: () =>
          h(
            CheckCard,
            { value: 1, title: "Plan" },
            { symbol: ({ checked }: { checked: boolean }) => (checked ? "Selected" : "Open") }
          ),
      },
    });
    const card = wrapper.find(".k-check-card");

    expect(card.classes()).toEqual(
      expect.arrayContaining([
        "k-check-card-fill",
        "k-check-card-large",
        "k-check-card-square",
        "is-checked",
      ])
    );
    expect(wrapper.find(".k-check-card-symbol").text()).toBe("Selected");
  });
});
