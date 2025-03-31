import resize from "../_tool/resize";
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "Affix",
  directives: { resize },
  props: {
    offsetTop: { type: Number, default: 0 },
    offsetBottom: Number,
    target: {
      type: Function,
      default: () => {
        return window;
      },
    },
  },
  setup(props, { slots, emit }) {
    const target = props.target();
    const blobRef = ref(null);

    const fixed = ref(false);
    const width = ref(0);
    const height = ref(0);
    const offsetTopValue = ref(0);

    const updatePosition = (e) => {
      let { offsetBottom, offsetTop } = props;
      if (!blobRef.value || !target) return;

      let rect = blobRef.value.getBoundingClientRect();
      let container = target != window && target != document ? target.getBoundingClientRect() : { top: 0, bottom: document.documentElement.clientHeight };

      let hasbottom = typeof offsetBottom == "number" && offsetBottom >= 0;
      let fx = hasbottom ? container.bottom - rect.bottom >= offsetBottom : rect.top - container.top <= offsetTop;

      if (!fx) {
        offsetTopValue.value = rect.top;
        if (target == window || target == document) {
          if (offsetTopValue.value > offsetTop && !hasbottom) {
            offsetTopValue.value = offsetTop;
          }
          if (hasbottom && container.bottom - rect.bottom < offsetBottom) {
            offsetTopValue.value = container.bottom - offsetBottom - rect.height;
          }
        } else {
          //todo:
        }
      }
      if (fixed.value != fx) {
        fixed.value = fx;
        width.value = rect.width;
        height.value = rect.height;
        emit("change", fixed.value);
      }
    };
    onBeforeUnmount(() => {
      if (target == window) {
        target.removeEventListener("scroll", updatePosition);
      }
    });
    onMounted(() => {
      if (target && typeof window !== "undefined") {
        target.addEventListener("scroll", updatePosition);
      }
    });

    return () => {
      let blobStyle = null,
        fixedStyle = null,
        classes = null;
      if (fixed.value) {
        blobStyle = {
          width: `${width.value}px`,
          height: `${height.value}px`,
        };
        fixedStyle = {
          width: `${width.value}px`,
          height: `${height.value}px`,
          top: `${offsetTopValue.value}px`,
        };
        classes = { ["k-affix"]: fixed.value };
      }
      return (
        <div style={blobStyle} ref={blobRef} v-resize={updatePosition}>
          <div style={fixedStyle} class={classes}>
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});
