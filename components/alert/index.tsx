import { CircleAlert, CircleCheck, CircleX, Info, X } from "kui-icons";
import { defineComponent, ref, Transition, type ExtractPropTypes, type PropType } from "vue";
import { getTransitionProp } from "../base/transition";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";

const alertProps = {
  type: {
    type: String as PropType<"info" | "success" | "warning" | "error">,
    default: "warning",
  },
  closable: Boolean as BooleanType,
  showIcon: { type: Boolean as BooleanType, default: true },
  icon: [Array] as PropType<IconType[]>,
  message: String,
  description: String,
  bordered: Boolean as BooleanType,
  onClose: {
    type: Function as PropType<(e: MouseEvent) => void>,
  },
};

export type AlertProps = ExtractPropTypes<typeof alertProps>;

const Alert = defineComponent({
  name: "Alert",
  props: alertProps,
  emits: ["close"],
  setup(props, { emit, slots }) {
    const closed = ref(false);

    const close = (e: MouseEvent) => {
      closed.value = true;
      emit("close", e);
    };

    const icons = {
      info: Info,
      error: CircleX,
      success: CircleCheck,
      warning: CircleAlert,
    };

    const transitionProps = getTransitionProp("k-alert-slide");

    return () => {
      const iconNode = props.showIcon ? (
        <Icon
          type={props.icon ? props.icon : icons[props.type as keyof typeof icons]}
          class="k-alert-icon"
        />
      ) : null;

      const closeIcon = props.closable ? (
        <Icon class="k-alert-close" type={X} onClick={close} />
      ) : null;

      const descriptionNode = props.description ? (
        <div class="k-alert-description">{props.description}</div>
      ) : null;

      const msgNode = <div class="k-alert-message">{props.message || slots.default?.()}</div>;

      const innerProps = {
        class: [
          "k-alert",
          {
            [`k-alert-${props.type}`]: props.type,
            "k-alert-has-icon": props.showIcon,
            "k-alert-has-close": props.closable,
            "k-alert-bordered": props.bordered,
            "k-alert-has-description": props.description,
          },
        ],
      };

      return (
        <Transition {...transitionProps}>
          <div {...innerProps} v-show={!closed.value}>
            {iconNode}
            <div class="k-alert-content">
              {msgNode}
              {descriptionNode}
            </div>
            {closeIcon}
          </div>
        </Transition>
      );
    };
  },
});

export default Alert;
