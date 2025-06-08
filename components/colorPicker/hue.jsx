import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import Color from "color";
import { clamp } from "@vueuse/core";
export default defineComponent({
  name: "Hue",
  props: {
    hue: Number,
  },
  setup(ps, { emit }) {
    const dotPos = ref(0);
    const refPaint = ref(null);
    const isMousePressed = ref(false);
    // const painter = ref(null);
    const currentHue = ref(ps.hue || 360);
    const currentColor = ref(null);
    watch(
      () => ps.hue,
      (val) => {
        currentHue.value = val;
        updatePos();
      }
    );

    onMounted(() => {
      renderPaint();
      updatePos();
    });

    const onMouseMove = (e) => {
      const canvas = refPaint.value;
      const width = canvas.width;
      const x = clamp(
        e.clientX - canvas.getBoundingClientRect().left,
        0,
        width
      );
      dotPos.value = x - 7;
      const hue = clamp((x / 100) * width, 0, 359) * 1;
      currentColor.value = Color({
        h: hue,
        s: "100",
        l: "50",
      }).rgb();
      // console.log(hue);
      emit("updateHue", Math.round(hue));
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

    const renderPaint = () => {
      const canvas = refPaint.value;
      const ctx = canvas.getContext("2d", { willReadFrequently: true }),
        setp = 1 / 360,
        width = canvas.width,
        height = canvas.height,
        gradient = ctx.createLinearGradient(0, 0, width, height);

      for (let i = 0; i <= 1; i += setp) {
        gradient.addColorStop(i, `hsl(${360 * i},100%,50%)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    const updatePos = () => {
      currentColor.value = Color({
        h: currentHue.value,
        s: "100",
        l: "50",
      }).rgb();
      // console.log(currentHue.value);
      dotPos.value = (currentHue.value / 360) * 190 - 7;
    };
    return () => {
      let prop = {
        class: "k-color-picker-hue",
        width: 190,
        height: 8,
        ref: refPaint,
        onMousedown: onMousedown,
      };
      return (
        <div class="k-color-picker-slider-hue">
          <span
            class="k-color-picker-hue-dot"
            style={{
              left: dotPos.value + "px",
              backgroundColor: currentColor.value,
            }}></span>
          <canvas {...prop} />
        </div>
      );
    };
  },
});
