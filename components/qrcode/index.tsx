import Color from "color";
import { toCanvas, type QRCodeRenderersOptions } from "qrcode";
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import type { BooleanType } from "../const/types";
import zhCN from "../locale/zh-CN";
import Spin from "../spin";
export type QRCodeStatus = "active" | "loading" | "expired" | "scanned";
export type QRCodeErrorLevel = "L" | "M" | "Q" | "H";
const qrCodeProps = {
  value: { type: String, required: true },
  size: { type: Number, default: 160 },
  colorDark: { type: String, default: "var(--kui-color-reverse)" },
  colorLight: { type: String, default: "var(--kui-color-bg)" },
  bordered: { type: Boolean as BooleanType, default: true },
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

const QRCode = defineComponent({
  name: "QRCode",
  props: qrCodeProps,
  emits: ["refresh"],
  setup(props, { emit, slots, expose }) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let rootObserver: MutationObserver | null = null;

    const injectedLocale = inject<Record<string, any>>("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const initThemeObserver = () => {
      const rootEl = document.documentElement;

      rootObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes" && mutation.attributeName === "theme-mode") {
            drawQRCode();
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
        document.body.appendChild(tempDiv);
        let computedColor = window.getComputedStyle(tempDiv).color;
        computedColor = Color(computedColor).hex();
        document.body.removeChild(tempDiv);
        return computedColor || "#000000";
      }
      return colorStr;
    };

    // 适配与 Logo 异步渲染
    const drawQRCode = async () => {
      if (!canvasRef.value) return;

      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { size, value, logo, logoRadius, logoBorder, errorLevel } = props;
      const ratio = window.devicePixelRatio || 1;

      // 设置 Canvas 物理分辨率（抗锯齿高清拉伸）
      canvas.width = size * ratio;
      canvas.height = size * ratio;
      ctx.scale(ratio, ratio);

      try {
        const realDark = parseCssVariable(props.colorDark);
        const realLight = parseCssVariable(props.colorLight);
        // 利用 qrcode 库将矩阵直接渲染到当前画布上
        const options: QRCodeRenderersOptions = {
          width: size,
          margin: props.margin,
          color: {
            dark: realDark,
            light: realLight,
          },
          errorCorrectionLevel: errorLevel,
        };

        // 预渲染到一个临时的内存 canvas 中，再复制过来，避免多次缩放失真
        const memCanvas = document.createElement("canvas");
        await toCanvas(memCanvas, value || " ", options);
        ctx.drawImage(memCanvas, 0, 0, size, size);

        // 如果配置了 Logo，开始二次合成
        if (logo) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = logo;
          img.onload = () => {
            // 计算 Logo 的最终尺寸
            const computedLogoSize = props.logoSize || size * 0.22;
            const x = (size - computedLogoSize) / 2;
            const y = (size - computedLogoSize) / 2;

            ctx.save();

            // 如果开启了保护边框，先画一层白底隔离带，防止二维码格子戳进 Logo 导致视觉杂乱
            if (logoBorder) {
              ctx.fillStyle = realLight;
              // 稍微比 Logo 大一圈作为外边框
              const borderSize = computedLogoSize + 6;
              const bx = (size - borderSize) / 2;
              const by = (size - borderSize) / 2;

              ctx.beginPath();
              ctx.roundRect(bx, by, borderSize, borderSize, logoRadius + 2);
              ctx.fill();
            }

            // 裁剪画布，为 Logo 挖出完美的圆角
            ctx.beginPath();
            ctx.roundRect(x, y, computedLogoSize, computedLogoSize, logoRadius);
            ctx.clip();

            // 正式把 Logo 画到正中心
            ctx.drawImage(img, x, y, computedLogoSize, computedLogoSize);
            ctx.restore();
          };
        }
      } catch (err) {
        console.error("二维码生成失败: ", err);
      }
    };

    const download = (fileName = "qrcode.png") => {
      if (!canvasRef.value) return;
      const url = canvasRef.value.toDataURL("image/png");
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
        props.status,
        props.margin,
        props.errorLevel,
      ],
      () => {
        if (props.status === "active") {
          drawQRCode();
        }
      },
      { deep: true }
    );
    expose({ download });

    onMounted(() => {
      // if (props.status === "active")
      drawQRCode();
      initThemeObserver();
    });
    onBeforeUnmount(() => {
      if (rootObserver) {
        rootObserver.disconnect();
      }
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
            <div class="k-qrcode-expired-wrapper" onClick={() => emit("refresh")}>
              {slots.expired ? (
                slots.expired()
              ) : (
                <>
                  <div class="k-qrcode-expired">{locale.value?.k.qrcode.expired}</div>
                  <Button size="small" type="text">
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
        width: `${props.size}px`,
        height: `${props.size}px`,
      };

      return (
        <div
          style={wrapperStyle}
          class={["k-qrcode", { "k-qrcode-borderless": props.bordered === false }]}
        >
          <canvas
            ref={canvasRef}
            style={{ width: `${props.size}px`, height: `${props.size}px`, display: "block" }}
          />
          {renderMask()}
        </div>
      );
    };
  },
});

export default QRCode;
