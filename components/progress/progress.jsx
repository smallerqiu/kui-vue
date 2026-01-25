import Icon from "../icon";
import { CheckmarkCircle, CloseCircle, Close, Checkmark } from "kui-icons";
import { defineComponent, watch, ref } from "vue";
import { withInstall } from "../utils/vue";
const Progress = defineComponent({
  name: "Progress",
  props: {
    percent: { type: Number, default: 0 },
    strokeWidth: { type: Number, default: 6 },
    color: String,
    format: Function,
    width: Number,
    strokeHeight: Number,
    gapDegree: { type: Number, default: 75 },
    strokeColor: Object,
    strokeLinecap: { type: String, default: "round" },
    size: {
      type: String,
      default: "default",
      validator: function (s) {
        return ["small", "default"].indexOf(s) >= 0;
      },
    },
    status: {
      type: String,
      default: "normal",
      validator: function (s) {
        return ["active", "exception", "success", "normal"].indexOf(s) >= 0;
      },
    },
    type: {
      type: String,
      default: "line",
      validator: function (s) {
        return ["line", "circle", "dashboard"].indexOf(s) >= 0;
      },
    },
    showInfo: { type: Boolean, default: true },
  },
  setup(ps, { slots }) {
    watch(
      () => ps.percent,
      (nv, no) => {
        currentPercent.value = nv;
      },
    );
    const currentPercent = ref(ps.percent);
    const renderTip = () => {
      if (!ps.showInfo) return null;

      let { status, type, format } = ps,
        text = `${currentPercent.value}%`;
      if (format) {
        text = format(currentPercent.value);
      } else {
        if (type == "line") {
          if (currentPercent.value == 100) {
            text = <Icon type={CheckmarkCircle} />;
          }
          if (status == "exception") text = <Icon type={CloseCircle} />;
        }
        if (type == "circle") {
          if (slots.format) {
            text = slots.format();
          } else {
            if (currentPercent.value == 100) {
              text = <Icon type={Checkmark} />;
            }
            if (status == "exception") text = <Icon type={Close} />;
          }
        }
      }
      return <div class="k-progress-text">{text}</div>;
    };
    const renderCircle = (percent, strokeColor, dashboard) => {
      let { strokeWidth, gapDegree, strokeLinecap } = ps;
      let radius = 50 - strokeWidth / 2,
        beginX = 0,
        beginY = radius,
        endX = 0,
        endY = 2 * radius;
      let gap = Math.max(0, gapDegree);
      gap = Math.min(259, gap);
      let d = `M 50,50 
               m ${beginX}, ${beginY} 
               a ${radius},${radius} 0 1 1 ${endX}, ${-endY} 
               a ${radius},${radius} 0 1 1 ${-endX},${endY}`,
        len = Math.PI * 2 * radius,
        // front color
        style = {
          strokeDasharray: `${(percent / 100) * (len - (dashboard ? gap : 0))}px ${len}px`, //长度,间距 ,实线和虚线的长度
          transition: `stroke-dasharray .3s ease 0s,opacity 0.3s ease 0s`,
          strokeDashoffset: dashboard ? -gap / 2 : 0,
          stroke: strokeColor,
          strokeLinecap: strokeLinecap,
          opacity: percent == 0 ? 0 : 1,
        };

      let ds = {};

      if (dashboard) {
        ds = {
          strokeDasharray: `${len - gap}px ${len}px`, //长度,间距
          strokeDashoffset: -gap / 2,
          strokeLinecap: strokeLinecap,
        };
      }

      return (
        <svg viewBox={`0 0 ${50 * 2} ${50 * 2}`}>
          <path
            d={d}
            fill="none"
            stroke-width={strokeWidth}
            style={ds}
            class="k-progress-inner"
          />
          <path
            d={d}
            fill="none"
            stroke-width={strokeWidth}
            style={style}
            class="k-progress-bg"
          />
        </svg>
      );
    };
    const renderBar = () => {
      let { type, color, strokeHeight } = ps;
      if (type == "line") {
        let sty = {
          width: currentPercent.value + "%",
          backgroundColor: color,
        };
        if (strokeHeight) {
          sty.height = strokeHeight + "px";
        }
        return (
          <div class="k-progress-inner">
            <div class="k-progress-bg" style={sty}></div>
          </div>
        );
      } else if (type == "circle") {
        return renderCircle(currentPercent.value, color);
      } else if (type == "dashboard") {
        return renderCircle(currentPercent.value, color, true);
      }
    };
    return () => {
      let { type, status, size, width, showInfo } = ps;
      if (currentPercent.value == 100 && status != "exception") {
        status = "success";
      }
      let classes = [
        "k-progress",
        `k-progress-${type}`,
        `k-progress-${status}`,
        { "k-progress-sm": type == "line" && size == "small" },
        { "k-progress-hide-info": !showInfo },
      ];
      let tipNode = renderTip();
      let bar = renderBar(),
        style = {};

      if (type != "line" && width > 10) {
        style = { width: width + "px", height: width + "px" };
      }
      return (
        <div class={classes} style={style}>
          {[bar, tipNode]}
        </div>
      );
    };
  },
});
export default withInstall(Progress);
