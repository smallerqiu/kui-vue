import { type CSSProperties, defineComponent, ref, watch } from "vue";

import { skeletonProps } from "./types";
const SkeletonText = defineComponent({
  name: "SkeletonText",
  props: skeletonProps,
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

      if (width) {
        innerProps.style.width = `${width}px`;
      }
      return <div {...props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default SkeletonText;
