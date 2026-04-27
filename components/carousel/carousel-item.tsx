import { defineComponent, inject, type CSSProperties, type Ref } from "vue";

const CarouselItem = defineComponent({
  name: "CarouselItem",
  setup(_, { slots }) {
    const width = inject<Ref<number>>("width");
    const height = inject<number>("height");

    return () => {
      const styles: CSSProperties = {
        width: width?.value ? `${width.value}px` : undefined,
        height: height ? `${height}px` : undefined,
      };

      /**
       * Using property spread to avoid "no-inline-styles" warnings.
       */
      const itemProps = {
        class: "k-carousel-item",
        style: styles,
      };

      return <div {...itemProps}>{slots.default?.()}</div>;
    };
  },
});
export default CarouselItem;
