import {
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type ExtractPropTypes,
} from "vue";
import {
  createFlameWrap,
  htmlInCanvasMarkup,
  supportsHtmlInCanvas,
  type FlameWrapInstance,
  type FlameWrapOptions,
} from "./engine";
import { tuplePropType } from "../utils/vue";

const flameWrapProps = {
  color: {
    type: tuplePropType<[number, number, number]>(),
    validator: (value: unknown[]) =>
      value.length === 3 &&
      value.every((item) => typeof item === "number" && Number.isFinite(item)),
  },
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
    let mountFrame = 0;

    // Keep the vanilla defaults for props that the Vue caller did not pass.
    const options = (): FlameWrapOptions =>
      Object.fromEntries(
        Object.entries(props).filter(([, value]) => value !== undefined),
      ) as FlameWrapOptions;
    const isNative = () => supported.value && nativeReady.value && !failed.value;
    const measure = () => {
      const content = contentRef.value;
      if (!content) return;
      const height = Math.ceil(
        Math.max(content.scrollHeight, content.getBoundingClientRect().height),
      );
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
        options(),
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
      await new Promise<void>((resolve) => {
        mountFrame = requestAnimationFrame(() => resolve());
      });
      create();
    });
    watch(props, () => instance?.setOptions(options()), { deep: true });
    onBeforeUnmount(() => {
      cancelAnimationFrame(mountFrame);
      sizeObserver?.disconnect();
      instance?.destroy();
    });

    return () => {
      const native = isNative();
      // Chrome 156 renamed the experimental canvas attribute, so the markup is
      // taken from what this browser advertises rather than hardcoded.
      const markup = htmlInCanvasMarkup();
      const reach = Math.round(Math.max(props.height ?? 170, 24) * 1.5) + 40;
      const glow = Math.round(Math.max(props.spread ?? 8, 8) * 3) + 16;
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      // Only the copy inside the canvas is drawn, so only that one declares
      // itself drawable; the fallback copy is ordinary page content.
      const content = (drawn: Record<string, string>) =>
        h(
          "div",
          {
            ref: contentRef,
            ...drawn,
            style: { position: "relative", width: "100%", overflow: "visible" },
          },
          slots.default?.(),
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
              ...markup.canvas,
              style: native
                ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
                : { display: "none" },
            },
            native ? [content(markup.element)] : [],
          ),
          native ? null : content({}),
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
              display: "block",
              pointerEvents: "none",
            },
          }),
        ],
      );
    };
  },
});

export default FlameWrap;
