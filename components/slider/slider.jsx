import Thumb from "./thumb";
import { multiply, add, subtract } from "../utils/number";
import { defineComponent, ref, provide, watch } from "vue";
import { withInstall } from "../utils/vue";
const Slider = defineComponent({
  name: "Slider",
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
    vertical: Boolean,
    range: Boolean,
    reverse: Boolean,
    marks: Object,
    included: { type: Boolean, default: true },
    tipFormatter: [Function, Object],
    tooltipVisible: Boolean,
  },
  setup(ps, { emit, slots }) {
    const railRef = ref();
    const getValue = (value) => {
      if (value === undefined) {
        value = ps.value;
      }
      let { min, max } = ps,
        v = 0;
      // let diff = max - min;
      if (!ps.range) {
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

    const keydownUpdate = (e, type) => {
      // emit("keydown-update", e, ps.type);
      let step = ps.step || 1;
      const plus = e.key === "ArrowRight" || e.key === "ArrowUp";
      if (ps.range) {
        let [a, b] = defaultValue.value;
        let v;
        if (plus) {
          v = type === "right" ? [a, add(b, step)] : [add(a, step), b];
        } else {
          v =
            type === "right" ? [a, subtract(b, step)] : [subtract(a, step), b];
        }
        defaultValue.value = getValue(v);
      } else {
        let v = defaultValue.value;
        if (plus) {
          v = add(v, step);
        } else {
          v = subtract(v, step) * 1;
        }
        defaultValue.value = getValue(v);
      }
      // emit("update:value", defaultValue.value);
      emit("input", defaultValue.value);
    };

    const mouseMove = (e, type) => {
      let clientX, clientY;
      if (e.touches && e.touches.length == 1) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      let { width, height, left, top } = railRef.value.getBoundingClientRect();
      let { max, min, vertical, reverse, step } = ps;

      let percent = 0,
        diff = max - min;
      if (reverse) {
        percent = vertical
          ? (height - (clientY - top)) / height
          : (width - (clientX - left)) / width;
      } else {
        percent = vertical
          ? (clientY - top) / height
          : (clientX - left) / width;
      }
      if (percent >= 1) percent = 1;
      else if (percent <= 0) percent = 0;

      let x = getMinStep(percent * diff);

      if (x >= max) x = max;
      else if (x <= min) x = min;

      // 使用解构创建新数组，避免引用问题
      const v = ps.range ? [...defaultValue.value] : defaultValue.value;
      let newValue = null;
      if (ps.range) {
        // todo:
        // v = type === "right" ? [v[0], x] : [x, v[1]];
        // 可以交叉
        let [a, b] = [...v];
        // let x1 = Math.min(a, b, x);
        // let y1 = Math.max(a, b, x);
        if (type == "right") {
          // if (x > a) {
          //   newValue = [a, x];
          // } else if (x < a) {
          //   newValue = [x, b ];
          // } else {
          //   console.log(a, b, x);
          newValue = [a, x];
          // }
        } else {
          newValue = [x, b];
        }

        // let [x1, y1] = [...newValue];
        // if (x1 > y1) {
        //   newValue = [y1, x1];
        // }
        // console.log(x1,y1);

        // 不能交叉
        // if (type === "right") {
        //   v = [v[0], Math.max(v[0], x)]; // 右边不能小于左边
        // } else {
        //   v = [Math.min(x, v[1]), v[1]]; // 左边不能大于右边
        // }
      } else {
        newValue = x;
      }

      defaultValue.value = newValue;
      // emit("update:value", newValue);
      emit("input", newValue);
    };

    const getMinStep = (percent) => {
      let { marks, step, min } = ps;
      if (!marks) return multiply(Math.round((percent + min) / step), step);
      let steps = Object.keys(marks); //, values = []
      steps = steps.map((x) => x - min);
      if (step) {
        steps.push(multiply(Math.round(percent / step), step));
      }

      let result = steps.reduce((x, y) =>
        Math.abs(x - percent) > Math.abs(y - percent) ? y : x
      );
      // let result = steps.reduce((x, y) => Math.abs(x - percent) > Math.abs(y - percent) ? y : x)
      // console.log(percent, result, steps)
      return result + min;
    };

    const click = (e) => {
      let { disabled, vertical, step, max, min, reverse } = ps;
      if (disabled) return;
      let { width, height } = e.target.getBoundingClientRect();
      let { layerX, layerY } = e;

      let percent = 0,
        diff = max - min;
      if (reverse) {
        percent = vertical
          ? ((height - layerY) / height) * diff
          : ((width - layerX) / width) * diff;
      } else {
        percent = vertical ? (layerY / height) * diff : (layerX / width) * diff;
      }
      let value = getMinStep(percent);

      if (ps.range) {
        let [x, y] = defaultValue.value;
        let half = y > x ? (y - x) / 2 + x : (x - y) / 2 + y;
        value = value >= half && y > x ? [x, value] : [value, y];
      }

      defaultValue.value = value;
      // emit("update:value", value);
      emit("input", value);
    };
    const getActiveOps = (a) => {
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
        sty = vertical
          ? { bottom: pos, transform: "translateY(50%)" }
          : { right: pos, transform: "translateX(50%)" };
      } else {
        sty = vertical ? { top: pos } : { left: pos };
      }
      return { active, sty };
    };
    const getThumbValue = (t) => {
      if (!ps.range) {
        return defaultValue.value;
      } else {
        let [a, b] = [...defaultValue.value];
        return t == 0 ? a * 1 : b * 1;
      }
    };

    return () => {
      let {
        vertical,
        disabled,
        step,
        reverse,
        max,
        marks,
        min,
        tooltipVisible,
        tipFormatter,
        size,
        included,
      } = ps;
      const renderMark = () => {
        let { marks } = ps;
        let mks = Object.keys(marks || {});
        let txt = Object.values(marks || {});
        return (
          <div div class="k-slider-marks">
            {mks.map((v) => {
              const { active, sty } = getActiveOps(v);
              return (
                <div
                  class={[
                    "k-slider-mark-symbol",
                    { "k-slider-mark-symbol-active": active },
                  ]}
                  style={sty}
                />
              );
            })}
            {mks.map((v, i) => {
              let { active, sty } = getActiveOps(v);
              return (
                <div
                  class={[
                    "k-slider-mark-text",
                    { "k-slider-mark-text-active": active },
                  ]}
                  style={sty}
                >
                  {txt[i]}
                </div>
              );
            })}
          </div>
        );
      };
      const renderTrack = () => {
        let { vertical, max, min, reverse } = ps;
        let percent1 = 0,
          percent2 = 0,
          diff = max - min;
        let w, l;

        if (!ps.range) {
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
        return <div class="k-slider-track" style={{ ...trackSty }}></div>;
      };

      const thumbProps = {
        props: {
          vertical,
          disabled,
          step,
          reverse,
          min,
          size,
          max,
          tipFormatter,
          tooltipVisible,
        },
        // onKeydownUpdate: keydownUpdate,
        // onThumbMove: mouseMove,
        on: {
          keydownUpdate: keydownUpdate,
          thumbMove: mouseMove,
        },
      };
      const children = [];
      if ((included && marks) || !marks) {
        const track = renderTrack();
        children.push(track);
      }
      if (ps.range) {
        let v = getThumbValue(0);
        children.push(<Thumb {...thumbProps} value={v} />);
      }
      let v2 = getThumbValue(1);
      children.push(<Thumb {...thumbProps} type="right" value={v2} />);
      if (marks) {
        const mark = renderMark();
        children.push(mark);
      }
      return (
        <div
          class={[
            "k-slider",
            { "k-slider-disabled": disabled, "k-slider-vertical": vertical },
          ]}
        >
          <div class="k-slider-bar">
            <div class="k-slider-rail" ref={railRef} onClick={click}></div>
            {...children}
          </div>
        </div>
      );
    };
  },
});
export default withInstall(Slider);
