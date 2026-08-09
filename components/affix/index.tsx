import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

const affixProps = {
  offsetTop: { type: Number, default: 0 },
  offsetBottom: Number,
  target: {
    type: Function as PropType<() => any>,
    default: () => {
      return typeof window !== "undefined" ? window : null;
    },
  },
  onChange: {
    type: Function as PropType<(affixed: boolean) => void>,
  },
};

export type AffixProps = ExtractPropTypes<typeof affixProps>;

const Affix = defineComponent({
  name: "Affix",
  props: affixProps,
  emits: {
    change: (_affixed: boolean) => true,
  },
  setup(props, { slots, emit }) {
    const affixRef = ref<HTMLElement>();
    const innerRef = ref<HTMLElement>();

    const fixed = ref(false);
    const styles = ref<CSSProperties>({});
    const placeholderStyles = ref<CSSProperties>({});
    let resizeObserver: ResizeObserver | null = null;
    let target: HTMLElement | Window | null = null;
    let frameId: number | null = null;

    const getTarget = () => {
      const res = props.target?.();
      return res?.value || res;
    };

    const updatePosition = () => {
      frameId = null;
      if (!affixRef.value || !innerRef.value || !target) return;
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
            left: `${rect.left}px`,
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
            left: `${rect.left}px`,
            width: `${rect.width}px`,
          };
        } else {
          isFixed = false;
          styles.value = {};
        }
      }

      placeholderStyles.value = isFixed
        ? { height: `${innerRef.value.getBoundingClientRect().height}px` }
        : {};
      if (fixed.value !== isFixed) {
        fixed.value = isFixed;
        emit("change", isFixed);
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(updatePosition);
    };

    const removeEventListeners = () => {
      window.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      resizeObserver = null;
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const addEventListeners = () => {
      if (!affixRef.value || !innerRef.value) return;
      target = getTarget();
      if (!target) return;

      window.addEventListener("scroll", scheduleUpdate, true);
      window.addEventListener("resize", scheduleUpdate);

      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(scheduleUpdate);
        resizeObserver.observe(affixRef.value!);
        resizeObserver.observe(innerRef.value!);
        if (target !== window) resizeObserver.observe(target as HTMLElement);
      }
      scheduleUpdate();
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
        ref: innerRef,
        style: styles.value,
        class: ["k-affix", { "k-affix-fixed": fixed.value }],
      };

      return (
        <div {...wrapperProps}>
          <div {...innerProps}>{slots.default?.()}</div>
        </div>
      );
    };
  },
});

export default Affix;
