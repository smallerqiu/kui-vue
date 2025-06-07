import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import {
  canvasHelper,
  limit,
  hslToRgb,
  rgbToHsl,
  parseColor,
  rgbToHex,
  rgbToHsv,
  cssColorToRgba,
} from "./canvasHelper";
import { clamp } from "@vueuse/core";
export default defineComponent({
  name: "Paint",
  props: {
    value: String,
  },
  setup(ps, { emit }) {
    const refPaint = ref(null);
    const dotPos = reactive({ x: 0, y: 0 });
    const isMousePressed = ref(false);
    const currentColor = ref(ps.value, "#000000");
    // const painter = ref(null);

    watch(
      () => ps.value,
      (val) => {
        currentColor.value = val;
        updatePos();
      }
    );

    onMounted(() => {
      // painter.value = canvasHelper(refPaint.value);
      renderPaint();
      updatePos();
    });
    const findColor = (r, g, b) => {
      const { width, height } = refPaint.value;
      const [, s, v] = rgbToHsv(r, g, b);
      const x = s * width;
      const y = height - v * height;
      return [x, y];
    };
    const renderPaint = () => {
      const canvas = refPaint.value;
      const ctx = canvas.getContext("2d", { willReadFrequently: true }),
        height = canvas.height;

      const WBG = ctx.createLinearGradient(1, 1, 1, height - 1);
      WBG.addColorStop(0, "white");
      WBG.addColorStop(1, "black");
    };
    const updatePos = () => {
      if (currentColor.value) {
        const [r, g, b, a] = parseColor(currentColor.value, "rgba");
        const [x, y] = findColor(r, g, b);
        if (x >= 0) {
          dotPos.x = x - 7 + 10;
          dotPos.y = y - 7 + 10;
        }
      }
    };
    const onMouseMove = (e) => {
      const canvas = refPaint.value;
      const { width, height } = canvas;
      const x = clamp(
          e.clientX - canvas.getBoundingClientRect().left,
          0,
          width - 1
        ),
        y = clamp(
          e.clientY - canvas.getBoundingClientRect().top,
          0,
          height - 1
        ),
        color = paintHelper.value.grabColor(x, y);

      dotPos.x = x - 7 + 10;
      dotPos.y = y - 7 + 10;
      currentColor.value = color;

      emit("update:value", color);
    };
    const onMouseUp = () => {
      setTimeout(() => {
        isMousePressed.value = false;
      }, 300);

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    const onMousedown = (e) => {
      isMousePressed.value = true;

      onMouseMove(e);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      e.preventDefault();
    };

    return () => {
      let { x, y } = dotPos;
      let prop = {
        class: "k-color-picker-paint",
        width: 234,
        height: 136,
        ref: refPaint,
        onMousedown: onMousedown,
      };
      return (
        <div class="k-color-picker-paint-container">
          <canvas {...prop} />
          <span
            class="k-color-picker-paint-dot"
            style={{ left: x, top: y }}></span>
        </div>
      );
    };
  },
});
