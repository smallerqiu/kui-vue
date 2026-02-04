import { defineComponent, inject } from "vue";
import { withInstall } from "../utils/vue";
const CarouselItem = defineComponent({
  name: "CarouselItem",
  setup(props, { slots }) {
    const width = inject("width", 0);
    const height = inject("height", 0);
    return () => {
      let styles = { width: `${width.value}px`, height: `${height.value}px` };
      return (
        <div class="k-carousel-item" style={styles}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
export default withInstall(CarouselItem);
