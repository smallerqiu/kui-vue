import Color from "color";
import { clamp } from "../utils/number";

export default {
  name: "Alpha",
  props: {
    value: [String, Object],
  },
  data() {
    return {
      dotPos: 0,
      isMousePressed: false,
      currentColor: this.value || "#000000",
    };
  },
  watch: {
    value(val) {
      this.currentColor = val;
      this.$nextTick(() => {
        this.renderPaint();
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
    updatePos() {
      const a = Color(this.currentColor).alpha();
      const x = this.$refs.paint.width * a;
      this.dotPos = x - 7;
    },
    renderPaint() {
      const canvas = this.$refs.paint;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, width - 1, 0);
      const [r, g, b] = Color(this.currentColor).rgb().array();
      ctx.clearRect(0, 0, width, height);
      gradient.addColorStop(0, `rgba(${r},${g},${b},0)`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},1)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    },
    onMouseMove(e) {
      const canvas = this.$refs.paint;
      const width = canvas.width;
      const x = clamp(
        e.clientX - canvas.getBoundingClientRect().left,
        0,
        width
      );
      const alpha = +(x / width).toFixed(2);
      this.dotPos = x - 7;

      const [r, g, b] = Color(this.currentColor).rgb().array();
      const color = `rgba(${r},${g},${b},${alpha})`;
      this.currentColor = color;
      this.$emit("updateAlpha", alpha);
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
    const canvasProps = {
      class: "k-color-picker-alpha",
      attrs: {
        width: 190,
        height: 8,
      },
      ref: "paint",
      on: {
        mousedown: this.onMousedown,
      }
    };

    return (
      <div class="k-color-picker-alpha-box">
        <canvas {...canvasProps} />
        <span
          class="k-color-picker-alpha-dot"
          style={{
            left: this.dotPos + "px",
            backgroundColor: this.currentColor,
          }}
        ></span>
      </div>
    );
  },
};