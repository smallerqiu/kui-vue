import type { CSSProperties } from "vue";
import { defineComponent, ref, watch } from "vue";

import { skeletonProps } from "./types";

const SkeletonButton = defineComponent({
  name: "SkeletonButton",
  props: skeletonProps,
  setup(props, { slots }) {
    const show = ref(props.loading);
    const timer = ref();
    watch(
      () => props.loading,
      (v) => {
        if (v) {
          show.value = v;
        } else {
          clearTimeout(timer.value);
          timer.value = setTimeout(() => {
            show.value = v;
          }, props.delay);
        }
      }
    );
    return () => {
      let { size, animated, block, shape, width } = props;
      let _props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
            "k-skeleton-block": block,
          },
        ],
      };
      let innerProps = {
        class: [
          "k-skeleton-btn",
          {
            "k-skeleton-btn-lg": size == "large",
            "k-skeleton-btn-sm": size == "small",
            [`k-skeleton-btn-${shape}`]: shape != "default",
          },
        ],
        style: {} as CSSProperties,
      };
      let child = slots.default?.();

      if (width) {
        innerProps.style.width = `${width}px`;
      }
      return <div {..._props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonButton;
