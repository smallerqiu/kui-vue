import { type CSSProperties, defineComponent } from "vue";

import { skeletonProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";
const SkeletonText = defineComponent({
  name: "SkeletonText",
  props: skeletonProps,
  setup(ps, { slots }) {
    const show = useSkeletonLoading(
      () => ps.loading,
      () => ps.delay
    );
    return () => {
      let { size, animated, width } = ps;
      let props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      let innerProps = {
        class: [
          "k-skeleton-text",
          {
            "k-skeleton-text-lg": size == "large",
            "k-skeleton-text-sm": size == "small",
          },
        ],
        style: {} as CSSProperties,
      };
      let child = slots.default?.();

      if (width !== undefined) {
        innerProps.style.width = `${width}px`;
      }
      return <div {...props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonText;
