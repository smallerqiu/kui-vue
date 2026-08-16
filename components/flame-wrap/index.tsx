import {
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import {
  createFlameWrap,
  supportsHtmlInCanvas,
  type FlameWrapInstance,
  type FlameWrapOptions,
} from "./engine";

const flameWrapProps = {
  color: Array as unknown as PropType<[number, number, number]>,
  intensity: Number,
  height: Number,
  spread: Number,
  radius: Number,
  speed: Number,
  scale: Number,
  turbulence: Number,
  turbulenceScale: Number,
  turbulenceReach: Number,
  sparks: Number,
  sparkSize: Number,
  sparkDensity: Number,
  sparkSpeed: Number,
  rim: Number,
  melt: Number,
  distortion: Number,
  smoke: Number,
  ember: Number,
  scorch: Number,
};

export type FlameWrapProps = ExtractPropTypes<typeof flameWrapProps>;
export type { FlameWrapInstance, FlameWrapOptions };

const FlameWrap = defineComponent({
  name: "FlameWrap",
  inheritAttrs: false,
  props: flameWrapProps,
  setup(props, { attrs, slots }) {
    const sourceRef = ref<HTMLCanvasElement>();
    const contentRef = ref<HTMLElement>();
    const outputRef = ref<HTMLCanvasElement>();
    const supported = ref(false);
    const nativeReady = ref(false);
    const failed = ref(false);
    const contentHeight = ref<number>();
    let instance: FlameWrapInstance | null = null;
    let sizeObserver: ResizeObserver | null = null;

    const options = (): FlameWrapOptions => ({ ...props });
    const isNative = () => supported.value && nativeReady.value && !failed.value;
    const measure = () => {
      const content = contentRef.value;
      if (!content) return;
      const height = Math.ceil(Math.max(content.scrollHeight, content.getBoundingClientRect().height));
      if (height > 0) contentHeight.value = height;
    };
    const connectSizeObserver = () => {
      sizeObserver?.disconnect();
      if (!contentRef.value) return;
      sizeObserver = new ResizeObserver(measure);
      sizeObserver.observe(contentRef.value);
      measure();
    };
    const create = () => {
      instance?.destroy();
      if (!sourceRef.value || !contentRef.value || !outputRef.value) return;
      instance = createFlameWrap(
        { source: sourceRef.value, content: contentRef.value, output: outputRef.value },
        options()
      );
      if (isNative() && !instance) {
        failed.value = true;
        nextTick(create);
      }
    };

    onMounted(async () => {
      supported.value = supportsHtmlInCanvas();
      await nextTick();
      connectSizeObserver();
      if (supported.value && contentHeight.value) {
        nativeReady.value = true;
        await nextTick();
        connectSizeObserver();
      }
      create();
    });
    watch(props, () => instance?.setOptions(options()), { deep: true });
    onBeforeUnmount(() => {
      sizeObserver?.disconnect();
      instance?.destroy();
    });

    return () => {
      const native = isNative();
      const reach = Math.round(Math.max(props.height ?? 170, 24) * 1.5) + 40;
      const glow = Math.round(Math.max(props.spread ?? 8, 8) * 3) + 16;
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      const content = () =>
        h(
          "div",
          { ref: contentRef, style: { position: "relative", width: "100%", overflow: "visible" } },
          slots.default?.()
        );
      return h(
        "div",
        {
          ...restAttrs,
          class: customClass,
          style: [
            { position: "relative", ...(native ? { height: `${contentHeight.value}px` } : {}) },
            customStyle,
          ],
        },
        [
          h(
            "canvas",
            {
              ref: sourceRef,
              layoutsubtree: "true",
              style: native
                ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
                : { display: "none" },
            },
            native ? [content()] : []
          ),
          native ? null : content(),
          h("canvas", {
            ref: outputRef,
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: `${-reach}px`,
              right: `${-glow}px`,
              bottom: `${-glow}px`,
              left: `${-glow}px`,
              width: `calc(100% + ${glow * 2}px)`,
              height: `calc(100% + ${reach + glow}px)`,
              pointerEvents: "none",
            },
          }),
        ]
      );
    };
  },
});

export default FlameWrap;
