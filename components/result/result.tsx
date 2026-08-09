import { CircleCheck, CircleX, Info, TriangleAlert } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import Icon, { type IconType } from "../icon";

export type ResultStatus = "success" | "error" | "info" | "warning" | "403" | "404" | "500";

const resultProps = {
  status: { type: String as PropType<ResultStatus>, default: "info" },
  title: [String, Number, Object] as PropType<VNodeChild>,
  subTitle: [String, Number, Object] as PropType<VNodeChild>,
  icon: Array as PropType<IconType[]>,
};

export type ResultProps = ExtractPropTypes<typeof resultProps>;

const statusIcons: Record<ResultStatus, IconType[]> = {
  success: CircleCheck,
  error: CircleX,
  info: Info,
  warning: TriangleAlert,
  "403": Info,
  "404": Info,
  "500": CircleX,
};

const Result = defineComponent({
  name: "Result",
  inheritAttrs: false,
  props: resultProps,
  setup(props, { attrs, slots }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const isHttpStatus =
        props.status === "403" || props.status === "404" || props.status === "500";
      const icon =
        slots.icon?.() ||
        (props.icon ? (
          <Icon type={props.icon} />
        ) : isHttpStatus ? (
          <span class="k-result-code">{props.status}</span>
        ) : (
          <Icon type={statusIcons[props.status]} />
        ));
      const title = slots.title?.() || props.title;
      const subTitle = slots.subTitle?.() || props.subTitle;
      const content = slots.default?.();
      const extra = slots.extra?.();

      return (
        <div
          {...restAttrs}
          class={["k-result", `k-result-${props.status}`, customClass]}
          role="status"
        >
          <div class="k-result-icon" aria-hidden="true">
            {icon}
          </div>
          {title !== undefined && title !== null && <div class="k-result-title">{title}</div>}
          {subTitle !== undefined && subTitle !== null && (
            <div class="k-result-subtitle">{subTitle}</div>
          )}
          {content && <div class="k-result-content">{content}</div>}
          {extra && <div class="k-result-extra">{extra}</div>}
        </div>
      );
    };
  },
});

export default Result;
