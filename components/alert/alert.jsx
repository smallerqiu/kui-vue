import { defineComponent, ref, computed, Transition } from "vue";
import Icon from "../icon";
import {
  InformationCircle,
  CloseCircle,
  CheckmarkCircle,
  AlertCircle,
  Close,
} from "kui-icons/dist/icons";
import { getTransitionProp } from "../base/transition";
import { withInstall } from "../utils/vue";

const Alert = defineComponent({
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: { type: Boolean, default: true },
    icon: [String, Object, Array],
    message: String,
    description: String,
    bordered: Boolean,
  },
  setup(props, { emit, slots }) {
    const closed = ref(false);

    const close = () => {
      closed.value = true;
      emit("close");
    };

    const classes = computed(() => [
      "k-alert",
      {
        [`k-alert-${props.type}`]: props.type,
        "k-alert-has-icon": props.showIcon,
        "k-alert-has-close": props.closable,
        "k-alert-bordered": props.bordered,
        "k-alert-has-description": props.description,
      },
    ]);

    const icons = {
      info: InformationCircle,
      error: CloseCircle,
      success: CheckmarkCircle,
      warning: AlertCircle,
    };

    const transitionProps = getTransitionProp("k-alert-slide");

    return () => {
      const iconNode = props.showIcon ? (
        <Icon
          type={props.icon ? props.icon : icons[props.type]}
          class="k-alert-icon"
        />
      ) : null;
      const closeIcon = props.closable ? (
        <Icon class="k-alert-close" type={Close} onClick={close} />
      ) : null;
      const descriptionNode = props.description ? (
        <div class="k-alert-description">{props.description}</div>
      ) : null;
      const msgNode = (
        <div class="k-alert-message">{props.message || slots.default?.()}</div>
      );

      return (
        <Transition {...transitionProps}>
          <div class={classes.value} v-show={!closed.value}>
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
export default withInstall(Alert);
