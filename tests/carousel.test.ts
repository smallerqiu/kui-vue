import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import Carousel from "../components/carousel/carousel";
import CarouselItem from "../components/carousel/carousel-item";

const slides = () => [
  h(CarouselItem, { key: "one" }, () => "One"),
  h(CarouselItem, { key: "two" }, () => "Two"),
  h(CarouselItem, { key: "three" }, () => "Three"),
];

describe("Carousel", () => {
  it("emits the Vue model event and follows external model changes", async () => {
    const value = ref(0);
    const Host = defineComponent(
      () => () =>
        h(
          Carousel,
          {
            modelValue: value.value,
            "onUpdate:modelValue": (next: number) => (value.value = next),
          },
          slides,
        ),
    );
    const wrapper = mount(Host);

    await wrapper.find('[aria-label="Go to slide 2"]').trigger("click");
    expect(value.value).toBe(1);
    value.value = 2;
    await nextTick();
    expect(wrapper.find('[aria-label="Go to slide 3"]').attributes("aria-selected")).toBe("true");
  });

  it("does not wrap at the boundary when loop is disabled", async () => {
    const wrapper = mount(Carousel, {
      props: { modelValue: 2, loop: false },
      slots: { default: slides },
    });

    const next = wrapper.find<HTMLButtonElement>('[aria-label="Next slide"]');
    expect(next.element.disabled).toBe(true);
    await next.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
