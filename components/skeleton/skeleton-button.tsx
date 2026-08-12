import type { CSSProperties } from "vue";
import { defineComponent } from "vue";

import { skeletonProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

const SkeletonButton = defineComponent({
  name: "SkeletonButton",
  props: skeletonProps,
  setup(props, { slots }) {
    const show = useSkeletonLoading(
      () => props.loading,
      () => props.delay
    );
    return () => {
      const { size, animated, block, shape, width } = props;
      const _props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
            "k-skeleton-block": block,
          },
        ],
      };
      const innerProps = {
        class: [
          "k-skeleton-btn",
          {
            "k-skeleton-btn-lg": size == "large",
            "k-skeleton-btn-sm": size == "small",
            [`k-skeleton-btn-${shape}`]: !!shape && shape !== "default",
          },
        ],
        style: {} as CSSProperties,
      };
      const child = slots.default?.();

      if (width !== undefined) {
        innerProps.style.width = `${width}px`;
      }
      return <div {..._props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonButton;
