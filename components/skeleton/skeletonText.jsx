import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "SkeletonText",
  props: {
    animated: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    size: String,
    width: Number,
  },
  setup(ps, { slots }) {
    const show = ref(ps.loading);
    const timer = ref(null);
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
        style: {},
      };
      let child = slots.default?.();

      if (width) {
        innerProps.style.width = `${width}px`;
      }
      return <div {...props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
