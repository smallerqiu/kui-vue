import { Checkmark, CheckmarkCircle, Close, CloseCircle } from "kui-icons";
import {
  defineComponent,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, SizeType } from "../const/types";
import Icon from "../icon";

export type ProgressStatus = "active" | "exception" | "success" | "normal";
export type ProgressStroke = "round" | "butt" | "square";
export type ProgressType = "line" | "circle" | "dashboard";

export const progressProps = {
  percent: { type: Number, default: 0 },
  strokeWidth: { type: Number, default: 6 },
  color: String,
  format: Function as PropType<(percent: number) => any>,
  width: Number,
  strokeHeight: Number,
  gapDegree: { type: Number, default: 75 },
  strokeLinecap: {
    type: String as PropType<ProgressStroke>,
    default: "round",
  },
  size: {
    type: String as PropType<SizeType>,
    default: "default",
  },
  status: {
    type: String as PropType<ProgressStatus>,
    default: "normal",
  },
  type: {
    type: String as PropType<ProgressType>,
    default: "line",
  },
  showInfo: { type: Boolean as BooleanType, default: true },
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;

export default defineComponent({
  name: "Progress",
  props: progressProps,
  setup(props, { slots }) {
    const currentPercent = ref(props.percent);
    watch(
      () => props.percent,
      (nv) => {
        currentPercent.value = nv;
      }
    );

    const renderTip = (status: ProgressProps["status"], type: ProgressProps["type"]) => {
      if (!props.showInfo) return null;

      let text: any = `${currentPercent.value}%`;
      if (props.format) {
        text = props.format(currentPercent.value);
      } else {
        if (type === "line") {
          if (currentPercent.value === 100) {
            text = <Icon type={CheckmarkCircle} />;
          }
          if (status === "exception") {
            text = <Icon type={CloseCircle} />;
          }
        } else if (type === "circle" || type === "dashboard") {
          if (slots.format) {
            text = slots.format();
          } else {
            if (currentPercent.value === 100) {
              text = <Icon type={Checkmark} />;
            }
            if (status === "exception") {
              text = <Icon type={Close} />;
            }
          }
        }
      }
      return <div class="k-progress-text">{text}</div>;
    };

    const renderCircle = (percent: number, strokeColor: string | undefined, dashboard: boolean) => {
      const { strokeWidth, gapDegree, strokeLinecap } = props;
      const radius = 50 - strokeWidth / 2;
      const beginX = 0;
      const beginY = radius;
      const endX = 0;
      const endY = 2 * radius;
      let gap = Math.max(0, gapDegree);
      gap = Math.min(259, gap);

      const d = `M 50,50 
               m ${beginX}, ${beginY} 
               a ${radius},${radius} 0 1 1 ${endX}, ${-endY} 
               a ${radius},${radius} 0 1 1 ${-endX},${endY}`,
        len = Math.PI * 2 * radius;

      const style: CSSProperties = {
        strokeDasharray: `${(percent / 100) * (len - (dashboard ? gap : 0))}px ${len}px`,
        transition: `stroke-dasharray .3s ease 0s,opacity 0.3s ease 0s`,
        strokeDashoffset: dashboard ? -gap / 2 : 0,
        stroke: strokeColor,
        strokeLinecap: strokeLinecap,
        opacity: percent === 0 ? 0 : 1,
      };

      const ds: CSSProperties = {};
      if (dashboard) {
        ds.strokeDasharray = `${len - gap}px ${len}px`;
        ds.strokeDashoffset = -gap / 2;
        ds.strokeLinecap = strokeLinecap;
      }
      const innerProps = {
        d,
        fill: "none",
        style: ds,
        class: "k-progress-inner",
      };
      const bgProps = {
        d,
        fill: "none",
        style: style,
        class: "k-progress-bg",
      };
      return (
        <svg viewBox={`0 0 ${50 * 2} ${50 * 2}`}>
          <path stroke-width={strokeWidth} {...innerProps} />
          <path stroke-width={strokeWidth} {...bgProps} />
        </svg>
      );
    };
    const renderBar = () => {
      const { type, color, strokeHeight } = props;
      if (type === "line") {
        const style: CSSProperties = {
          width: currentPercent.value + "%",
          backgroundColor: color || undefined,
        };
        if (strokeHeight) {
          style.height = strokeHeight + "px";
        }
        const bgProps = {
          class:'k-progress-bg',
          style
        }
        return (
          <div class="k-progress-inner">
            <div {...bgProps}></div>
          </div>
        );
      } else if (type === "circle") {
        return renderCircle(currentPercent.value, color, false);
      } else if (type === "dashboard") {
        return renderCircle(currentPercent.value, color, true);
      }
      return null;
    };
    return () => {
      let { type, status, size, width, showInfo } = props;
      if (currentPercent.value === 100 && status !== "exception") {
        status = "success";
      }
      const classes = [
        "k-progress",
        `k-progress-${type}`,
        `k-progress-${status}`,
        { "k-progress-sm": type === "line" && size === "small" },
        { "k-progress-hide-info": !showInfo },
      ];
      const tipNode = renderTip(status, type);
      const bar = renderBar();
      const style: CSSProperties = {};
      if (type !== "line" && width !== undefined && width > 10) {
        style.width = width + "px";
        style.height = width + "px";
      }
      const pgProps = {
        class: classes,
        style,
      };
      return (
        <div {...pgProps}>
          {bar}
          {tipNode}
        </div>
      );
    };
  },
});
