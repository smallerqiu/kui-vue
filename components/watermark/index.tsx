import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type PropType,
} from "vue";
import type { WatermarkProps } from "./types.ts";

export default defineComponent({
  name: "Watermark",
  props: {
    content: { type: [String, Array] as PropType<string | string[]>, default: "" },
    image: { type: String, default: "" },
    width: { type: Number, default: 240 },
    height: { type: Number, default: 189 },
    rotate: { type: Number, default: -22 },
    zIndex: { type: Number, default: 999 },
    fullscreen: { type: Boolean, default: false },
    antiTamper: { type: Boolean, default: true },
    font: {
      type: Object as PropType<WatermarkProps["font"]>,
      default: () => ({
        color: "rgba(128, 128, 128, 0.15)",
        fontSize: 15,
        fontWeight: "normal",
        fontFamily: "sans-serif",
        fontStyle: "normal",
      }),
    },
    gap: { type: Array as any as PropType<[number, number]>, default: () => [40, 40] },
    offset: { type: Array as any as PropType<[number, number]>, default: () => [20, 20] },
  },
  setup(props, { slots }) {
    const containerRef = ref<HTMLDivElement | null>(null);
    const watermarkRef = ref<HTMLDivElement | null>(null);

    let parentObserver: MutationObserver | null = null;
    let selfObserver: MutationObserver | null = null;
    let base64Url = ref("");

    // 渲染 Canvas 生成 Base64 水印图
    const createWatermarkBase64 = (): Promise<string> => {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ratio = window.devicePixelRatio || 1;

        const canvasWidth = props.width + props.gap[0];
        const canvasHeight = props.height + props.gap[1];

        // 关键高清优化：根据物理像素比放大画布
        canvas.width = canvasWidth * ratio;
        canvas.height = canvasHeight * ratio;

        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve("");

        ctx.scale(ratio, ratio);
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate((props.rotate * Math.PI) / 180);

        if (props.image) {
          // 图片水印模式
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = props.image;
          img.onload = () => {
            ctx.drawImage(img, -props.width / 2, -props.height / 2, props.width, props.height);
            resolve(canvas.toDataURL());
          };
          img.onerror = () => drawTextWatermark(ctx, resolve, canvas); // 降级为文本
        } else {
          // 文本水印模式
          drawTextWatermark(ctx, resolve, canvas);
        }
      });
    };

    const drawTextWatermark = (
      ctx: CanvasRenderingContext2D,
      resolve: any,
      canvas: HTMLCanvasElement
    ) => {
      const fontMerged = {
        color: "rgba(128, 128, 128, 0.15)",
        fontSize: 15,
        fontWeight: "normal",
        fontFamily: "sans-serif",
        ...props.font,
      };
      const fSize =
        typeof fontMerged.fontSize === "number" ? `${fontMerged.fontSize}px` : fontMerged.fontSize;

      ctx.font = `${fontMerged.fontWeight} ${fSize} ${fontMerged.fontFamily}`;
      ctx.fillStyle = fontMerged.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const contents = Array.isArray(props.content) ? props.content : [props.content || ""];
      const lineHeight = (typeof fontMerged.fontSize === "number" ? fontMerged.fontSize : 16) + 6;

      contents.forEach((text, index) => {
        const yOffset = (index - (contents.length - 1) / 2) * lineHeight;
        ctx.fillText(text, 0, yOffset);
      });

      resolve(canvas.toDataURL());
    };

    // 创建/注入水印 DOM
    const renderWatermark = async () => {
      base64Url.value = await createWatermarkBase64();

      const targetContainer = props.fullscreen ? document.body : containerRef.value;
      if (!targetContainer) return;

      // 暂时断开监听器，避免在自我销毁与更新过程中产生无限死循环
      disconnectObservers();

      // 如果旧的防篡改节点存在，直接干掉
      if (watermarkRef.value && watermarkRef.value.parentNode) {
        watermarkRef.value.parentNode.removeChild(watermarkRef.value);
      }

      //创建外部包装壳
      const wmWrapper = document.createElement("div");
      const wmStyle = {
        position: props.fullscreen ? "fixed" : "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: props.zIndex.toString(),
        margin: "0",
        padding: "0",
      };
      Object.assign(wmWrapper.style, wmStyle);
      wmWrapper.setAttribute("data-wm-root", "true");

      // 接入 Shadow DOM 形成天然样式沙箱
      const shadowRoot = wmWrapper.attachShadow({ mode: "closed" });

      const wmInner = document.createElement("div");
      const innerStyle = {
        width: "100%",
        height: "100%",
        backgroundSize: `${props.width + props.gap[0]}px ${props.height + props.gap[1]}px`,
        backgroundImage: `url(${base64Url.value})`,
        backgroundRepeat: "repeat",
        backgroundPosition: `${props.offset[0]}px ${props.offset[1]}px`,
        pointerEvents: "none",
      };
      Object.assign(wmInner.style, innerStyle);
      shadowRoot.appendChild(wmInner);

      targetContainer.appendChild(wmWrapper);
      watermarkRef.value = wmWrapper;

      // 开启无死角防篡改守护
      if (props.antiTamper) {
        nextTick(() => {
          initAntiTamper(targetContainer, wmWrapper);
        });
      }
    };

    // 高防篡改拦截算法
    const initAntiTamper = (parent: HTMLElement, self: HTMLElement) => {
      // 禁止删除node
      parentObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          const removedNodes = Array.from(mutation.removedNodes);
          if (removedNodes.includes(self)) {
            renderWatermark();
            break;
          }
        }
      });
      parentObserver.observe(parent, { childList: true });

      // 禁止修改 style
      selfObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes") {
            renderWatermark();
            break;
          }
        }
      });
      selfObserver.observe(self, {
        attributes: true,
        attributeFilter: ["style", "class", "id", "hidden"],
      });
    };

    const disconnectObservers = () => {
      if (parentObserver) parentObserver.disconnect();
      if (selfObserver) selfObserver.disconnect();
    };

    watch(
      () => [
        props.content,
        props.image,
        props.width,
        props.height,
        props.rotate,
        props.gap,
        props.offset,
        props.font,
      ],
      () => {
        renderWatermark();
      },
      { deep: true }
    );

    onMounted(() => renderWatermark());

    onBeforeUnmount(() => {
      disconnectObservers();
      if (watermarkRef.value && watermarkRef.value.parentNode) {
        watermarkRef.value.parentNode.removeChild(watermarkRef.value);
      }
    });

    return () => {
      if (props.fullscreen) {
        return slots.default ? slots.default() : null;
      }
      return (
        <div
          ref={containerRef}
          style={{ position: "relative", width: "100%", height: "100%" }}
          class="k-watermark-container"
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});
