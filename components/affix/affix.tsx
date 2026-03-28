import {
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";
import resize from "../directives/resize";

export const affixProps = {
  offsetTop: { type: Number, default: 0 },
  offsetBottom: Number,
  target: {
    type: Function as PropType<() => any>,
    default: () => {
      return typeof window !== 'undefined' ? window : null;
    },
  },
};

export type AffixProps = ExtractPropTypes<typeof affixProps>;

const Affix = defineComponent({
  name: "Affix",
  directives: { resize },
  props: affixProps,
  emits: ["change"],
  setup(props, { slots, emit }) {
    let target: HTMLElement | Window | null = null;
    const affixRef = ref<HTMLElement>();

    const fixed = ref(false);
    const styles = ref<CSSProperties>({});
    const placeholderStyles = ref<CSSProperties | null>(null);
    let resizeObserver: ResizeObserver | null = null;

    const updatePosition = () => {
      if (!affixRef.value || !target) return;
      const rect = affixRef.value.getBoundingClientRect();
      const isWindow = target === window;
      const targetRect = !isWindow
        ? (target as HTMLElement).getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight };
      let isFixed = false;

      if (props.offsetBottom !== undefined) {
        const offset = targetRect.bottom - rect.bottom - props.offsetBottom;
        if (offset <= 0) {
          isFixed = true;
          styles.value = {
            position: 'fixed',
            bottom: `${window.innerHeight - targetRect.bottom + props.offsetBottom}px`,
            width: `${rect.width}px`,
          };
        } else {
          isFixed = false;
          styles.value = {};
        }
      } else {
        const offset = rect.top - targetRect.top - (props.offsetTop || 0);
        if (offset <= 0) {
          isFixed = true;
          styles.value = {
            position: 'fixed',
            top: `${targetRect.top + (props.offsetTop || 0)}px`,
            width: `${rect.width}px`,
          };
        } else {
          isFixed = false;
          styles.value = {};
        }
      }

      placeholderStyles.value = isFixed
        ? { height: `${rect.height}px`, width: `${rect.width}px` }
        : null;
      if (fixed.value !== isFixed) {
        fixed.value = isFixed;
        emit("change", isFixed);
      }
    };

    onBeforeUnmount(() => {
      target?.removeEventListener("scroll", updatePosition);
      if (resizeObserver != null) {
        resizeObserver.disconnect();
      }
    });

    onMounted(() => {
      nextTick(() => {
        const res = props.target?.();
        target = res?.value || res;
        target?.addEventListener("scroll", updatePosition);
        updatePosition();
        if (target && target !== window && "ResizeObserver" in window) {
          resizeObserver = new ResizeObserver(updatePosition);
          resizeObserver.observe(target as HTMLElement);
        }
      });
    });

    watch(
      () => [props.offsetTop, props.offsetBottom, props.target],
      () => {
        nextTick(updatePosition);
      }
    );

    return () => (
      <div style={placeholderStyles.value as CSSProperties} ref={affixRef} v-resize={updatePosition}>
        <div style={styles.value} class={{ ["k-affix"]: fixed.value }}>
          {slots.default?.()}
        </div>
      </div>
    );
  },
});
export default Affix;