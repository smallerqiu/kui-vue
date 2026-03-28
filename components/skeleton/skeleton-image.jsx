import { defineComponent, ref, watch } from "vue";
import Icon from "../icon";

const SkeletonImage = defineComponent({
  name: "SkeletonImage",
  props: {
    animated: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    radius: Number,
    size: [Number, Array],
  },
  setup(ps, { slots }) {
    const show = ref(ps.loading);
    const timer = ref();
    watch(
      () => ps.loading,
      (v) => {
        if (v) {
          show.value = v;
        } else {
          clearTimeout(timer.value);
          timer.value = setTimeout(() => {
            show.value = v;
          }, ps.delay);
        }
      }
    );
    return () => {
      let { animated, radius, size } = ps;
      let props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      let innerProps = {
        class: ["k-skeleton-image"],
        style: {},
        // style: {
        //   'border-radius': radius ? radius + 'px' : ''
        // }
      };
      let child = slots.default?.();

      if (radius) {
        innerProps.style["border-radius"] = `${radius}px`;
      }

      if (!isNaN(Number(size))) {
        innerProps.style.width = `${size}px`;
        innerProps.style.height = `${size}px`;
      }

      if (Array.isArray(size)) {
        innerProps.style.width = `${size[0]}px`;
        innerProps.style.height = `${size[1]}px`;
      }
      return (
        <div {...props}>
          {child && !show.value ? (
            child
          ) : (
            <span {...innerProps}>
              <Icon type="image-outline" class="k-skeleton-image-icon" />
            </span>
          )}
        </div>
      );
    };
  },
});
export default SkeletonImage;
