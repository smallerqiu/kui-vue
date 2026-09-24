import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createCommentVNode, createTextVNode, defineComponent, Fragment, h, nextTick, ref } from "vue";
import Carousel from "../components/carousel/carousel";
import CarouselItem from "../components/carousel/carousel-item";

enableAutoUnmount(afterEach);
afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

const slides = () => [
  h(CarouselItem, { key: "one" }, () => "One"),
  h(CarouselItem, { key: "two" }, () => "Two"),
  h(CarouselItem, { key: "three" }, () => "Three"),
];

describe("Carousel", () => {
  it("measures asynchronously loaded slides and remeasures after clearing them", async () => {
    const width = vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(300);
    const loaded = ref(false);
    const Host = defineComponent(() => () =>
      h(Carousel, null, { default: () => loaded.value ? slides() : [] }),
    );
    const wrapper = mount(Host);
    await nextTick();
    await nextTick();
    loaded.value = true;
    await nextTick();
    await nextTick();
    expect(wrapper.find<HTMLElement>(".k-carousel-wrapper").element.style.width).toBe("1500px");
    loaded.value = false;
    await nextTick();
    width.mockReturnValue(400);
    loaded.value = true;
    await nextTick();
    await nextTick();
    expect(wrapper.find<HTMLElement>(".k-carousel-wrapper").element.style.width).toBe("2000px");
    await wrapper.find('[aria-label="Next slide"]').trigger("click");
    expect(wrapper.find<HTMLElement>(".k-carousel-wrapper").element.style.transform).toBe(
      "translate3d(-800px, 0px, 0)",
    );
  });

  it.each([false, true])("preserves the visible slide when loop changes from %s", async (loop) => {
    vi.useFakeTimers();
    vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(300);
    const wrapper = mount(Carousel, { props: { value: 0, loop }, slots: { default: slides } });
    await nextTick();
    await wrapper.find('[aria-label="Next slide"]').trigger("click");
    await wrapper.setProps({ loop: !loop });
    await nextTick();
    vi.advanceTimersByTime(600);
    await nextTick();
    expect(wrapper.find<HTMLElement>(".k-carousel-wrapper").element.style.transform).toBe(
      loop ? "translate3d(-300px, 0px, 0)" : "translate3d(-600px, 0px, 0)",
    );
    expect(wrapper.find('[aria-label="Go to slide 2"]').attributes("aria-selected")).toBe("true");
    expect(wrapper.emitted("change")).toEqual([[1]]);
  });

  it("ignores comments and whitespace inside nested fragments", async () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: () => [
          h(Fragment, null, [...slides(), createCommentVNode("v-if"), createTextVNode(" ")]),
        ],
      },
    });
    await nextTick();
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(3);
  });

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
