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
  createRipple,
  supportsHtmlInCanvas,
  type RippleInstance,
  type RippleOptions,
  type RippleTrigger,
} from "./engine";

const rippleProps = {
  amplitude: Number,
  speed: Number,
  wavelength: Number,
  rings: Number,
  decay: Number,
  refraction: Number,
  dispersion: Number,
  shine: Number,
  trigger: String as PropType<RippleTrigger>,
  interval: Number,
};

export type RippleProps = ExtractPropTypes<typeof rippleProps>;
export type { RippleInstance, RippleOptions, RippleTrigger };

const Ripple = defineComponent({
  name: "Ripple",
  inheritAttrs: false,
  props: rippleProps,
  setup(props, { attrs, slots }) {
    const sourceRef = ref<HTMLCanvasElement>();
    const contentRef = ref<HTMLElement>();
    const outputRef = ref<HTMLCanvasElement>();
    const supported = ref(false);
    const nativeReady = ref(false);
    const failed = ref(false);
    const contentHeight = ref<number>();
    let instance: RippleInstance | null = null;
    let sizeObserver: ResizeObserver | null = null;
    let mountFrame = 0;

    // Vue includes every declared prop on `props`, even when it was not
    // provided. Do not let those undefined entries overwrite engine defaults.
    const options = (): RippleOptions =>
      Object.fromEntries(
        Object.entries(props).filter(([, value]) => value !== undefined)
      ) as RippleOptions;
    const isNative = () => supported.value && nativeReady.value && !failed.value;

    const measure = () => {
      const content = contentRef.value;
      if (!content) return;
      const height = Math.ceil(Math.max(content.scrollHeight, content.getBoundingClientRect().height));
      if (height <= 0) return;
      contentHeight.value = height;
    };

    const connectSizeObserver = () => {
      sizeObserver?.disconnect();
      const content = contentRef.value;
      if (!content) return;
      sizeObserver = new ResizeObserver(measure);
      sizeObserver.observe(content);
      measure();
    };

    const create = () => {
      instance?.destroy();
      const source = sourceRef.value;
      const content = contentRef.value;
      const output = outputRef.value;
      if (!source || !content || !output) return;
      instance = createRipple({ source, content, output }, options());
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
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
              pointerEvents: "none",
            },
          }),
        ]
      );
    };
  },
});

export default Ripple;
