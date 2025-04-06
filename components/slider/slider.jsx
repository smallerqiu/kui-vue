import Thumb from "./thumb";
import { times } from "../utils/number";
import { defineComponent, ref, provide, watch } from "vue";
export default defineComponent({
  props: {
    value: [Array, Number, String],
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    disabled: Boolean,
    step: {
      type: Number,
      default: 1,
      validator: (val) => val !== 0,
    },
    size: String,
    range: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    marks: Object,
    included: { type: Boolean, default: true },
    tipFormatter: [Function, Object],
    tooltipVisible: Boolean,
  },
  setup(ps, { emit, slots }) {
    const railRef = ref(null);
    const getValue = () => {
      let { value = 0, range, min, max } = ps,
        v = 0;
      // let diff = max - min;
      if (!range) {
        v = value;
        if (value >= max) v = max;
        else if (value <= min) v = min;
        // let percent = (v - min) * 100 / diff
        // v = this.getMinStep(percent)
      } else {
        if (!Array.isArray(value)) {
          v = [0, 0];
        } else {
          v = [].concat(value);
        }
        let [x, y] = v;

        // let p1 = (x - min) * 100 / diff
        // let p2 = (y - min) * 100 / diff
        // x = this.getMinStep(p1)
        // y = this.getMinStep(p2)
        // console.log(p1 * 100, p2 * 100)

        if (x >= max) x = max;
        else if (x <= min) x = min;

        if (y >= max) y = max;
        else if (y <= min) y = min;

        v = [x, y];
      }
      return v;
    };
    const value = getValue();
    const defaultValue = ref(value);
    watch(
      () => ps.value,
      (nv, no) => {
        defaultValue.value = getValue();
      }
    );

    const mouseMove = (e, type) => {
      let clientX, clientY;
      if (e.touches && e.touches.length == 1) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      let { width, height, left, right, top, bottom } = railRef.value.getBoundingClientRect();
      let { value, range, step, max, min, vertical, reverse } = ps,
        v = value;

      let percent = 0,
        diff = max - min;
      if (reverse) {
        percent = vertical ? (height - (clientY - top)) / height : (width - (clientX - left)) / width;
      } else {
        percent = vertical ? (clientY - top) / height : (clientX - left) / width;
      }
      if (percent >= 1) percent = 1;
      else if (percent <= 0) percent = 0;
      let x = range ? (type == "right" ? v[1] : v[0]) : v;

      x = getMinStep(percent * diff);

      if (x >= max) x = max;
      else if (x <= min) x = min;

      v = range ? (type == "right" ? [v[0], x] : [x, v[1]]) : x;
      defaultValue.value = v;
      emit("update:value", v);
    };

    const getMinStep = (percent) => {
      let { marks, step, min } = ps;
      if (!marks) return times(Math.round((percent + min) / step), step);
      let steps = Object.keys(marks); //, values = []
      steps = steps.map((x) => x - min);
      if (step) {
        steps.push(times(Math.round(percent / step), step));
      }

      let result = steps.reduce((x, y) => (Math.abs(x - percent) > Math.abs(y - percent) ? y : x));
      // let result = steps.reduce((x, y) => Math.abs(x - percent) > Math.abs(y - percent) ? y : x)
      // console.log(percent, result, steps)
      return result + min;
    };

    const click = (e) => {
      let { disabled, range, vertical, step, max, min, reverse } = ps;
      if (disabled) return;
      let { width, height } = e.target.getBoundingClientRect();
      let { layerX, layerY } = e;

      let percent = 0,
        diff = max - min;
      if (reverse) {
        percent = vertical ? ((height - layerY) / height) * diff : ((width - layerX) / width) * diff;
      } else {
        percent = vertical ? (layerY / height) * diff : (layerX / width) * diff;
      }
      let value = getMinStep(percent);

      if (range) {
        let [x, y] = defaultValue.value;
        let half = y > x ? (y - x) / 2 + x : (x - y) / 2 + y;
        value = value >= half && y > x ? [x, value] : [value, y];
      }

      defaultValue.value = value;
      emit("update:value", value);
      emit("change", value);
    };
    const isActice = (a) => {
      let { reverse, max, min, vertical } = ps;
      let active;
      if (ps.range) {
        let [x, y] = defaultValue.value;
        active = x < y ? a >= x && a <= y : a <= x && a >= y;
      } else {
        active = a <= defaultValue.value;
      }
      let diff = max - min;
      let pos = ((a - min) / diff) * 100 + "%";
      let sty = {};
      if (reverse) {
        sty = vertical ? { bottom: pos, transform: "translateY(50%)" } : { right: pos, transform: "translateX(50%)" };
      } else {
        sty = vertical ? { top: pos } : { left: pos };
      }
      return { active, sty };
    };

    return () => {
      let { vertical, disabled, range, step, reverse, max, min, tooltipVisible, tipFormatter, size } = ps;
      const renderMark = () => {
        let { marks } = ps;
        if (!marks) return null;
        let mks = Object.keys(marks || {});
        let txt = Object.values(marks || {});

        return (
          <div div class="k-slider-marks">
            {mks.map((v) => {
              const { active, sty } = isActice(v);
              return <div class={["k-slider-mark-symbol", { "k-slider-mark-symbol-active": active }]} style={sty} />;
            })}
            {mks.map((v, i) => {
              let { active, sty } = isActice(v);
              return (
                <div class={["k-slider-mark-text", { "k-slider-mark-text-active": active }]} style={sty}>
                  {txt[i]}
                </div>
              );
            })}
          </div>
        );
      };
      const renderTrack = () => {
        let { vertical, max, min, range, included, marks, reverse } = ps;
        let percent1 = 0,
          percent2 = 0,
          diff = max - min;
        let w, l;

        if (!range) {
          percent2 = ((defaultValue.value - min) / diff) * 100;
        } else {
          let [x, y] = defaultValue.value;
          percent1 = ((x - min) / diff) * 100;
          percent2 = ((y - min) / diff) * 100;
        }
        let trackSty = {};
        if (percent2 > percent1) {
          w = percent2 - percent1;
          l = percent1;
        } else {
          w = percent1 - percent2;
          l = percent2;
        }
        if (reverse) {
          trackSty = vertical
            ? {
                height: `${w}%`,
                top: "auto",
                bottom: `${l}%`,
              }
            : {
                width: `${w}%`,
                left: "auto",
                right: `${l}%`,
              };
        } else {
          trackSty = vertical
            ? {
                height: `${w}%`,
                top: `${l}%`,
              }
            : {
                width: `${w}%`,
                left: `${l}%`,
              };
        }
        return (included && marks) || !marks ? <div class="k-slider-track" style={{ ...trackSty }}></div> : null;
      };
      const thumbProps = {
        // props: {
        vertical,
        disabled,
        range,
        step,
        reverse,
        min,
        size,
        max,
        tipFormatter,
        tooltipVisible,
        value: range ? [].concat(defaultValue.value) : defaultValue.value * 1,
        onThumbMove: mouseMove,
        // },
        // on: {
        //   input: (value) => {
        //     if (value !== defaultValue.value) {
        //       defaultValue.value = value;
        //       emit("update:value", value);
        //       emit("change", value);
        //     }
        //   },
        // },
      };
      return (
        <div class={["k-slider", { "k-slider-disabled": disabled, "k-slider-vertical": vertical }]}>
          <div class="k-slider-bar">
            <div class="k-slider-rail" ref={railRef} onClick={click}></div>
            {renderTrack()}
            {ps.range ? <Thumb {...thumbProps} /> : null}
            <Thumb {...thumbProps} type="right" />
            {renderMark()}
          </div>
        </div>
      );
    };
  },
});
