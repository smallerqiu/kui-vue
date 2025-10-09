import Color from "color";
import { clamp } from "@vueuse/core";

export default {
  name: "Hue",
  props: {
    hue: Number,
  },
  data() {
    return {
      dotPos: 0,
      isMousePressed: false,
      currentHue: this.hue || 360,
      currentColor: Color({ h: this.hue || 360, s: "100", l: "50" }).rgb(),
    };
  },
  watch: {
    hue(val) {
      this.currentHue = val;
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
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const step = 1 / 360;
      const width = canvas.width;
      const height = canvas.height;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      for (let i = 0; i <= 1; i += step) {
        gradient.addColorStop(i, `hsl(${360 * i},100%,50%)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    },
    updatePos() {
      this.currentColor = Color({
        h: this.currentHue,
        s: "100",
        l: "50",
      }).rgb();
      this.dotPos = (this.currentHue / 360) * 190 - 7;
    },
    onMouseMove(e) {
      const canvas = this.$refs.paint;
      const width = canvas.width;
      const x = clamp(
        e.clientX - canvas.getBoundingClientRect().left,
        0,
        width
      );

      this.dotPos = x - 7;
      const hue = clamp((x / 100) * width, 0, 359) * 1;
      this.currentColor = Color({
        h: hue,
        s: "100",
        l: "50",
      }).rgb();

      this.$emit("updateHue", Math.round(hue));
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
      class: "k-color-picker-hue",
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
      <div class="k-color-picker-slider-hue">
        <span
          class="k-color-picker-hue-dot"
          style={{
            left: this.dotPos + "px",
            backgroundColor: this.currentColor,
          }}
        ></span>
        <canvas {...canvasProps} />
      </div>
    );
  },
};