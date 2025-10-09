import Color from "color";
import { clamp } from "@vueuse/core";

export default {
  name: "Paint",
  props: {
    hue: Number,
    value: [String, Object],
  },
  data() {
    return {
      dotPos: { x: 0, y: 0 },
      isMousePressed: false,
      currentColor: this.value || "#000000",
    };
  },
  watch: {
    hue() {
      this.currentColor = this.value;
      this.$nextTick(() => {
        this.renderPaint();
        this.updatePos();
      });
    },
    value(val) {
      this.currentColor = val;
      this.$nextTick(() => {
        this.updatePos();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.renderPaint();
      this.updatePos();
    });
  },
  methods: {
    renderPaint() {
      const canvas = this.$refs.paint;
      if (!canvas) return;
      const { width, height } = canvas;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      // 背景白到黑渐变
      const back = ctx.createLinearGradient(1, 1, 1, height - 1);
      back.addColorStop(0, "white");
      back.addColorStop(1, "black");
      ctx.fillStyle = back;
      ctx.fillRect(0, 0, width, height);

      // 色相渐变
      const colorGradient = ctx.createLinearGradient(1, 0, width - 1, 0);
      colorGradient.addColorStop(0, `hsla(${this.hue},100%,50%,0)`);
      colorGradient.addColorStop(1, `hsla(${this.hue},100%,50%,1)`);
      ctx.fillStyle = colorGradient;
      ctx.globalCompositeOperation = "multiply";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
    },
    updatePos() {
      if (this.currentColor) {
        const { width, height } = this.$refs.paint;
        const [h, s, v] = Color(this.currentColor).hsv().array();
        const x = (s / 100) * width;
        const y = height - (v / 100) * height;
        this.dotPos.x = x - 7;
        this.dotPos.y = y - 7;
      }
    },
    onMouseMove(e) {
      const canvas = this.$refs.paint;
      const { width, height } = canvas;
      const x = clamp(
        e.clientX - canvas.getBoundingClientRect().left,
        0,
        width - 1
      );
      const y = clamp(
        e.clientY - canvas.getBoundingClientRect().top,
        0,
        height
      );

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const [r, g, b, alpha] = ctx.getImageData(x, y, 1, 1).data;
      const color = Color({ r, g, b, alpha: alpha / 255 }).rgb();

      this.dotPos.x = x - 7;
      this.dotPos.y = y - 7;
      this.currentColor = color;
      this.$emit("updateRGB", color.object());
    },
    onMouseUp() {
      setTimeout(() => {
        this.isMousePressed = false;
      }, 300);
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    },
    onMousedown(e) {
      this.isMousePressed = true;
      this.onMouseMove(e);
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
      e.preventDefault();
    },
  },
  render() {
    const { x, y } = this.dotPos;
    const canvasProps = {
      class: "k-color-picker-paint",
      attrs: {
        width: 234,
        height: 136,
      },
      ref: "paint",
      on: {
        mousedown: this.onMousedown,
      },
    };
    return (
      <div class="k-color-picker-paint-container">
        <canvas {...canvasProps} />
        <span
          class="k-color-picker-paint-dot"
          style={{ left: `${x}px`, top: `${y}px` }}
        ></span>
      </div>
    );
  },
};