import { defineComponent, ref, watch } from "vue";
import { withInstall } from '../utils/vue';
const SkeletonButton = defineComponent({
  name: "SkeletonButton",
  props: {
    animated: Boolean,
    block: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    shape: String,
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
      let { size, animated, block, shape, show, width } = ps;
      let props = {
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
export default withInstall(SkeletonButton);