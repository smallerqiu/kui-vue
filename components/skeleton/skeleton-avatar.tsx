import { defineComponent, ref, watch } from "vue";

import type { CSSProperties } from "vue";

import { skeletonProps } from "./types";

const SkeletonAvatar = defineComponent({
  name: "SkeletonAvatar",
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
      let { size, animated, radius, shape } = props;
      let _props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      let innerProps = {
        class: [
          "k-skeleton-avatar",
          {
            "k-skeleton-avatar-lg": size == "large",
            "k-skeleton-avatar-sm": size == "small",
            [`k-skeleton-avatar-${shape}`]: shape != "default",
          },
        ],
        style: {} as CSSProperties,
      };
      let child = slots.default?.();

      if (!isNaN(Number(size))) {
        innerProps.style.width = `${size}px`;
        innerProps.style.height = `${size}px`;
      }
      if (radius) {
        innerProps.style["border-radius"] = `${radius}px`;
      }
      return <div {..._props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonAvatar;
