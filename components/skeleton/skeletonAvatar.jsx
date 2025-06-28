import { defineComponent, ref, watch } from "vue";
import { withInstall } from '../utils/vue';
const SkeletonAvatar = defineComponent({
  name: "SkeletonAvatar",
  props: {
    animated: Boolean,
    radius: Number,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    shape: String,
    size: [Number, String],
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
      let { size, animated, radius, shape } = ps;
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
          "k-skeleton-avatar",
          {
            "k-skeleton-avatar-lg": size == "large",
            "k-skeleton-avatar-sm": size == "small",
            [`k-skeleton-avatar-${shape}`]: shape != "default",
          },
        ],
        style: {},
      };
      let child = slots.default?.();

      if (!isNaN(Number(size))) {
        innerProps.style.width = `${size}px`;
        innerProps.style.height = `${size}px`;
      }
      if (radius) {
        innerProps.style["border-radius"] = `${radius}px`;
      }
      return <div {...props}>{child && !show.value ? child : <span {...innerProps}></span>}</div>;
    };
  },
});
export default withInstall(SkeletonAvatar);