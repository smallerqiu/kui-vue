import { defineComponent, ref, watch } from "vue";
import { withInstall } from '../utils/vue';
const Spin = defineComponent({
  name: "Spin",
  props: {
    value: { type: Boolean, default: true },
    delay: { type: Number, default: 500 },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["large", "default", "small"].indexOf(value) >= 0;
      },
    },
    mode: {
      type: String,
      default: "rotate",
      validator(value) {
        return ["bounce", "flip", "rotate", "zoom"].indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { slots }) {
    const spinning = ref(ps.value);
    let timer = null;
    watch(
      () => ps.value,
      (nv, no) => {
        if (nv) {
          spinning.value = nv;
        } else {
          clearTimeout(timer);
          timer = setTimeout(() => {
            spinning.value = nv;
          }, ps.delay);
        }
      }
    );
    return () => {
      let { mode, size } = ps;
      const classes = [
        {
          [`k-spin-loading`]: spinning.value,

          [`k-spin-${mode}`]: mode && spinning.value,
        },
      ];
      const childs = slots.default?.();
      const root = [
        "k-spin",
        {
          [`k-spin-lg`]: size == "large",
          [`k-spin-sm`]: size == "small",
          [`k-spin-only`]: childs == null,
        },
      ];
      const spin = <div class={classes} />;
      return <div class={root}>{[spin, childs]}</div>;
    };
  },
});
export default withInstall(Spin);