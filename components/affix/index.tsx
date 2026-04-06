import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import resize from "../directives/resize";

const affixProps = {
  offsetTop: { type: Number, default: 0 },
  offsetBottom: Number,
  target: {
    type: Function as PropType<() => any>,
    default: () => {
      return typeof window !== "undefined" ? window : null;
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
    const affixRef = ref<HTMLElement>();

    const fixed = ref(false);
    const styles = ref<CSSProperties>({});
    const placeholderStyles = ref<CSSProperties>({});
    let resizeObserver: ResizeObserver | null = null;
    let target: HTMLElement | Window | null = null;

    const getTarget = () => {
      const res = props.target?.();
      return res?.value || res;
    };

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
            position: "fixed",
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
            position: "fixed",
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
        : {};
      if (fixed.value !== isFixed) {
        fixed.value = isFixed;
        emit("change", isFixed);
      }
    };

    const removeEventListeners = () => {
      target?.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      resizeObserver?.disconnect();
      resizeObserver = null;
    };

    const addEventListeners = () => {
      target = getTarget();
      if (!target) return;

      target.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);

      if (target !== window && "ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(updatePosition);
        resizeObserver.observe(target as HTMLElement);
      }
      updatePosition();
    };

    onBeforeUnmount(() => {
      removeEventListeners();
    });

    onMounted(() => {
      nextTick(addEventListeners);
    });

    watch(
      () => [props.offsetTop, props.offsetBottom, props.target],
      () => {
        removeEventListeners();
        nextTick(addEventListeners);
      }
    );

    return () => {
      const wrapperProps = {
        ref: affixRef,
        style: placeholderStyles.value,
      };

      const innerProps = {
        style: styles.value,
        class: ["k-affix", { "k-affix-fixed": fixed.value }],
      };

      return (
        <div {...wrapperProps} v-resize={updatePosition}>
          <div {...innerProps}>{slots.default?.()}</div>
        </div>
      );
    };
  },
}) //as DefineComponent<AffixProps>;

export default Affix;
