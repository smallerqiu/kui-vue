import { defineComponent } from "vue";

import type { CSSProperties } from "vue";

import { skeletonProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

const SkeletonAvatar = defineComponent({
  name: "SkeletonAvatar",
  props: skeletonProps,
  setup(props, { slots }) {
    const show = useSkeletonLoading(
      () => props.loading,
      () => props.delay
    );

    return () => {
      let { size, animated, radius, shape } = props;
      const avatarShape = shape || "circle";
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
            [`k-skeleton-avatar-${avatarShape}`]: true,
          },
        ],
        style: {} as CSSProperties,
      };
      let child = slots.default?.();

      if (!isNaN(Number(size))) {
        innerProps.style.width = `${size}px`;
        innerProps.style.height = `${size}px`;
      }
      if (radius !== undefined) {
        innerProps.style["border-radius"] = `${radius}px`;
      }
      return <div {..._props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonAvatar;
