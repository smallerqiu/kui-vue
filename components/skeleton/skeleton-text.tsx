import { type CSSProperties, defineComponent, type ExtractPropTypes } from "vue";

import { skeletonTextProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

export type SkeletonTextProps = ExtractPropTypes<typeof skeletonTextProps>;

const SkeletonText = defineComponent({
  name: "SkeletonText",
  props: skeletonTextProps,
  setup(ps, { slots }) {
    const show = useSkeletonLoading(
      () => ps.loading,
      () => ps.delay,
    );
    return () => {
      const { size, animated, width } = ps;
      const props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      const innerProps = {
        class: [
          "k-skeleton-text",
          {
            "k-skeleton-text-lg": size == "large",
            "k-skeleton-text-sm": size == "small",
          },
        ],
        style: {} as CSSProperties,
      };
      const child = slots.default?.();

      if (width !== undefined) {
        innerProps.style.width = `${width}px`;
      }
      return (
        <div {...props} aria-busy={ps.loading || undefined}>
          {child?.length && !show.value ? child : <span {...innerProps} aria-hidden="true"></span>}
        </div>
      );
    };
  },
});
export default SkeletonText;
