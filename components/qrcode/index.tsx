import Color from "color";
import { toCanvas, type QRCodeRenderersOptions } from "qrcode";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import { Button } from "../button";
import type {
  BooleanType,
  QRCodeErrorLevel,
  QRCodeStatus,
  ShapeType,
  ThemeType,
} from "../const/types";
import zhCN from "../locale/zh-CN";
import Spin from "../spin";
const qrCodeProps = {
  value: { type: String, required: true },
  size: { type: Number, default: 160 },
  colorDark: { type: String, default: "var(--kui-color-reverse)" },
  colorLight: { type: String, default: "var(--kui-color-bg)" },
  bordered: { type: Boolean as BooleanType, default: true },
  theme: { type: String as PropType<ThemeType>, default: "outline" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  status: {
    type: String as PropType<QRCodeStatus>,
    default: "active",
  },
  logo: { type: String, default: "" },
  logoSize: { type: Number },
  margin: { type: Number, default: 0 },
  logoRadius: { type: Number, default: 4 },
  logoBorder: { type: Boolean as BooleanType, default: true },
  errorLevel: { type: String as PropType<QRCodeErrorLevel>, default: "M" },
};
export type QRCodeProps = ExtractPropTypes<typeof qrCodeProps>;
export interface QRCodeRef {
  download: (fileName?: string) => Promise<void>;
}

const QRCode = defineComponent({
  name: "QRCode",
  props: qrCodeProps,
  emits: {
    refresh: () => true,
  },
  setup(props, { emit, slots, expose }) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let rootObserver: MutationObserver | null = null;
    let drawId = 0;
    let drawPromise: Promise<void> = Promise.resolve();
    const safeSize = computed(() =>
      Number.isFinite(props.size) && props.size > 0 ? props.size : 160,
    );
    const safeMargin = computed(() =>
      Number.isFinite(props.margin) ? Math.max(0, Math.floor(props.margin)) : 0,
    );
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const initThemeObserver = () => {
      const rootEl = document.documentElement;

      rootObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes" && mutation.attributeName === "theme-mode") {
            if (props.status === "active") scheduleDraw();
            break;
          }
        }
      });

      rootObserver.observe(rootEl, {
        attributes: true,
        attributeFilter: ["theme-mode"], // 只对 theme-mode 敏感，性能损耗几乎为 0
      });
    };
    const parseCssVariable = (colorStr: string): string => {
      if (colorStr.trim().startsWith("var(")) {
        const tempDiv = document.createElement("div");
        tempDiv.style.color = colorStr;
        (canvasRef.value?.parentElement || document.body).appendChild(tempDiv);
        let computedColor = window.getComputedStyle(tempDiv).color;
        computedColor = Color(computedColor).hex();
        tempDiv.remove();
        return computedColor || "#000000";
      }
      return colorStr;
    };

    const loadImage = (src: string): Promise<HTMLImageElement | null> =>
      new Promise((resolve) => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => resolve(image);
        image.onerror = () => resolve(null);
        image.src = src;
      });

    const drawQRCode = async () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const currentDrawId = ++drawId;
      const size = safeSize.value;
      const ratio =
        Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
          ? window.devicePixelRatio
          : 1;
      const pixelSize = Math.max(1, Math.round(size * ratio));

      try {
        const realDark = parseCssVariable(props.colorDark);
        const realLight = parseCssVariable(props.colorLight);
        const options: QRCodeRenderersOptions = {
          width: pixelSize,
          margin: safeMargin.value,
          color: {
            dark: realDark,
            light: realLight,
          },
          errorCorrectionLevel: props.errorLevel,
        };

        const memCanvas = document.createElement("canvas");
        await toCanvas(memCanvas, props.value || " ", options);
        if (props.logo) {
          const image = await loadImage(props.logo);
          if (currentDrawId !== drawId) return;
          const context = memCanvas.getContext("2d");
          if (image && context) {
            const requestedLogoSize =
              Number.isFinite(props.logoSize) && (props.logoSize ?? 0) > 0
                ? props.logoSize!
                : size * 0.22;
            const finalSize = Math.min(size, requestedLogoSize) * ratio;
            const radius = Math.min(Math.max(0, props.logoRadius), requestedLogoSize / 2) * ratio;
            const x = (pixelSize - finalSize) / 2;
            const y = (pixelSize - finalSize) / 2;
            context.save();
            if (props.logoBorder) {
              const borderSize = Math.min(pixelSize, finalSize + 6 * ratio);
              context.fillStyle = realLight;
              context.beginPath();
              context.roundRect(
                (pixelSize - borderSize) / 2,
                (pixelSize - borderSize) / 2,
                borderSize,
                borderSize,
                Math.min(borderSize / 2, radius + 2 * ratio),
              );
              context.fill();
            }
            context.beginPath();
            context.roundRect(x, y, finalSize, finalSize, radius);
            context.clip();
            context.drawImage(image, x, y, finalSize, finalSize);
            context.restore();
          }
        }
        if (currentDrawId !== drawId) return;
        canvas.width = pixelSize;
        canvas.height = pixelSize;
        canvas.getContext("2d")?.drawImage(memCanvas, 0, 0, pixelSize, pixelSize);
      } catch (err) {
        if (currentDrawId === drawId) console.error("二维码生成失败: ", err);
      }
    };

    const scheduleDraw = () => {
      drawPromise = drawQRCode();
      void drawPromise;
    };

    const download = async (fileName = "qrcode.png") => {
      await drawPromise;
      const canvas = canvasRef.value;
      if (!canvas) return;
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = fileName;
      a.href = url;
      a.click();
    };

    watch(
      () => [
        props.value,
        props.size,
        props.colorDark,
        props.colorLight,
        props.logo,
        props.logoSize,
        props.logoRadius,
        props.logoBorder,
        props.status,
        props.margin,
        props.errorLevel,
      ],
      () => {
        if (props.status === "active") {
          scheduleDraw();
        }
      },
      { deep: true },
    );
    expose({ download });

    onMounted(() => {
      // if (props.status === "active")
      scheduleDraw();
      initThemeObserver();
    });
    onBeforeUnmount(() => {
      if (rootObserver) {
        rootObserver.disconnect();
      }
      drawId += 1;
    });
    // 遮罩层状态机渲染（Loading、已失效等）
    const renderMask = () => {
      if (props.status === "active") return null;

      return (
        <div class="k-qrcode-mask">
          {props.status === "loading" && (
            <div class="k-qrcode-loading-wrapper">
              {slots.loading
                ? slots.loading()
                : [<Spin size="small" />, <span>{locale.value?.k.qrcode.loading}</span>]}
            </div>
          )}
          {props.status === "expired" && (
            <div
              class="k-qrcode-expired-wrapper"
              role="button"
              tabindex={0}
              onClick={() => emit("refresh")}
              onKeydown={(event: KeyboardEvent) => {
                if (
                  event.target !== event.currentTarget ||
                  (event.key !== "Enter" && event.key !== " ")
                )
                  return;
                event.preventDefault();
                emit("refresh");
              }}
            >
              {slots.expired ? (
                slots.expired()
              ) : (
                <>
                  <div class="k-qrcode-expired">{locale.value?.k.qrcode.expired}</div>
                  <Button size="small" type="text" tabindex={-1}>
                    {locale.value?.k.qrcode.refresh}
                  </Button>
                </>
              )}
            </div>
          )}
          {props.status === "scanned" && (
            <div class="k-qrcode-scanned-wrapper">
              {slots.scanned ? slots.scanned() : <>{locale.value?.k.qrcode.scanned}</>}
            </div>
          )}
        </div>
      );
    };

    return () => {
      const wrapperStyle: CSSProperties = {
        width: `${safeSize.value}px`,
        height: `${safeSize.value}px`,
      };

      return (
        <div
          style={wrapperStyle}
          class={[
            "k-qrcode",
            `k-qrcode-${props.shape}`,
            `k-qrcode-${props.theme}`,
            { "k-qrcode-plain": props.bordered === false },
          ]}
        >
          <canvas
            ref={canvasRef}
            style={{
              width: `${safeSize.value}px`,
              height: `${safeSize.value}px`,
              display: "block",
            }}
          />
          {renderMask()}
        </div>
      );
    };
  },
});

export default QRCode;

export type { QRCodeErrorLevel, QRCodeStatus } from "../const/types";
