import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType } from "../const/types";

export interface Font {
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  fontFamily?: string;
  fontStyle?: "normal" | "italic" | "oblique";
}
export interface WatermarkTextItem extends Font {
  text: string;
}
export type WatermarkLayoutType = "stagger" | "grid";

const watermarkProps = {
  content: {
    type: [String, Array] as PropType<string | string[] | WatermarkTextItem[]>,
    default: "",
  },
  image: { type: String, default: "" },
  width: { type: Number, default: 240 },
  height: { type: Number, default: 189 },
  rotate: { type: Number, default: -22 },
  zIndex: { type: Number, default: 999 },
  fullscreen: { type: Boolean as BooleanType, default: false },
  antiTamper: { type: Boolean as BooleanType, default: true },
  font: {
    type: Object as PropType<Font>,
    default: () => ({
      color: "rgba(128, 128, 128, 0.15)",
      fontSize: 15,
      fontWeight: "normal",
      fontFamily: "sans-serif",
      fontStyle: "normal",
    }),
  },
  gap: { type: Array as any as PropType<number[]>, default: () => [40, 40] },
  offset: { type: Array as any as PropType<number[]>, default: () => [20, 20] },
  layout: { type: String as PropType<WatermarkLayoutType>, default: "stagger" },
};
export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;

const Watermark = defineComponent({
  name: "Watermark",
  props: watermarkProps,
  setup(props, { slots }) {
    const containerRef = ref<HTMLDivElement | null>(null);
    const watermarkRef = ref<HTMLDivElement | null>(null);

    let parentObserver: MutationObserver | null = null;
    let selfObserver: MutationObserver | null = null;
    let base64Url = ref("");

    // 渲染 Canvas 生成 Base64 水印图
    // 将坐标系变换锁在 img.onload 内部，保证图片水印完美倾斜
    const createWatermarkBase64 = (): Promise<string> => {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ratio = window.devicePixelRatio || 1;

        // 单个格子的基础总宽高
        const cellW = props.width + props.gap[0];
        const cellH = props.height + props.gap[1];

        // 读取用户传入的偏移量，如果没有传则兜底为 0
        const offsetX = props.offset?.[0] ?? 0;
        const offsetY = props.offset?.[1] ?? 0;

        const isStagger = props.layout === "stagger";

        // 画布整体宽高（交错模式翻倍）
        const canvasWidth = isStagger ? cellW * 2 : cellW;
        const canvasHeight = isStagger ? cellH * 2 : cellH;

        canvas.width = canvasWidth * ratio;
        canvas.height = canvasHeight * ratio;

        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve("");

        ctx.scale(ratio, ratio);

        // 统一的单格子渲染逻辑
        const drawSingleCell = (
          ctx: CanvasRenderingContext2D,
          centerX: number,
          centerY: number,
          imgObj?: HTMLImageElement
        ) => {
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate((props.rotate * Math.PI) / 180);

          if (imgObj) {
            ctx.drawImage(imgObj, -props.width / 2, -props.height / 2, props.width, props.height);
          } else {
            drawTextWatermark(ctx);
          }
          ctx.restore();
        };

        // 渲染整体网格的方法（将偏移量 offsetX / offsetY 注入到每一个基础坐标中）
        const renderAllCells = (imgObj?: HTMLImageElement) => {
          if (isStagger) {
            // 【交错模式】同样加上起始 offset 偏置
            // 奇数行
            drawSingleCell(ctx, cellW / 2 + offsetX, cellH / 2 + offsetY, imgObj);
            drawSingleCell(ctx, cellW + cellW / 2 + offsetX, cellH / 2 + offsetY, imgObj);

            // 偶数行（错开平移 + offset）
            drawSingleCell(ctx, 0 + offsetX, cellH + cellH / 2 + offsetY, imgObj);
            drawSingleCell(ctx, cellW + offsetX, cellH + cellH / 2 + offsetY, imgObj);
            drawSingleCell(ctx, cellW * 2 + offsetX, cellH + cellH / 2 + offsetY, imgObj);
          } else {
            // 【传统常规模式】基础坐标直接加上 offset 偏移
            drawSingleCell(ctx, cellW / 2 + offsetX, cellH / 2 + offsetY, imgObj);
          }
          resolve(canvas.toDataURL());
        };

        // 判断是走图片流还是文字流
        if (props.image) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = props.image;
          img.onload = () => {
            renderAllCells(img);
          };
          img.onerror = () => {
            renderAllCells();
          };
        } else {
          renderAllCells();
        }
      });
    };

    const drawTextWatermark = (ctx: CanvasRenderingContext2D) => {
      const globalFont = {
        color: "rgba(128, 128, 128, 0.15)",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal", // 👈 全局默认 fontStyle
        fontFamily: "sans-serif",
        ...props.font,
      };

      const rawContents = Array.isArray(props.content) ? props.content : [props.content || ""];
      const contents: WatermarkTextItem[] = rawContents.map((item) => {
        if (typeof item === "string") {
          return { text: item };
        }
        return item;
      });

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let totalHeight = 0;
      const lineHeights = contents.map((item) => {
        const size = item.fontSize || globalFont.fontSize;
        return size + 8;
      });
      totalHeight = lineHeights.reduce((a, b) => a + b, 0);

      let currentY = -totalHeight / 2;

      contents.forEach((item, index) => {
        const fSize = item.fontSize || globalFont.fontSize;
        const fWeight = item.fontWeight || globalFont.fontWeight;
        const fStyle = item.fontStyle || globalFont.fontStyle; // 👈 动态读取单行配置
        const fColor = item.color || globalFont.color;

        // 【严格格式化 Canvas Font 规则】：必须遵循 [style] [weight] [size]px [family]
        ctx.font = `${fStyle} ${fWeight} ${fSize}px ${globalFont.fontFamily}`;
        ctx.fillStyle = fColor;

        const yOffset = currentY + lineHeights[index] / 2;
        ctx.fillText(item.text, 0, yOffset);

        currentY += lineHeights[index];
      });
    };

    // 创建/注入水印 DOM
    const renderWatermark = async () => {
      base64Url.value = await createWatermarkBase64();

      const targetContainer = props.fullscreen ? document.body : containerRef.value;
      if (!targetContainer) return;

      disconnectObservers();

      if (watermarkRef.value && watermarkRef.value.parentNode) {
        watermarkRef.value.parentNode.removeChild(watermarkRef.value);
      }

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

      const shadowRoot = wmWrapper.attachShadow({ mode: "closed" });

      const wmInner = document.createElement("div");
      const cellW = props.width + props.gap[0];
      const cellH = props.height + props.gap[1];
      const isStagger = props.layout === "stagger";

      const innerStyle = {
        width: "100%",
        height: "100%",
        // 外部容器的平铺尺寸宽度和高度需无缝与大网格同步
        backgroundSize: `${isStagger ? cellW * 2 : cellW}px ${isStagger ? cellH * 2 : cellH}px`,
        backgroundImage: `url(${base64Url.value})`,
        backgroundRepeat: "repeat",
        pointerEvents: "none",
      };
      Object.assign(wmInner.style, innerStyle);
      shadowRoot.appendChild(wmInner);

      targetContainer.appendChild(wmWrapper);
      watermarkRef.value = wmWrapper;

      if (props.antiTamper) {
        nextTick(() => {
          initAntiTamper(targetContainer, wmWrapper);
        });
      }
    };

    const initAntiTamper = (parent: HTMLElement, self: HTMLElement) => {
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
        props.layout,
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

export default Watermark;
