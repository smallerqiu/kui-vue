import { defineComponent, ref, computed, Transition } from "vue";
import Icon from "../icon";
import { InformationCircle, CloseCircle, CheckmarkCircle, AlertCircle, Close } from "kui-icons";
import { getTransitionProp } from "../base/transition";
import { withInstall } from '../utils/vue';

const Alert = defineComponent({
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: Boolean,
    message: String,
    description: String,
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
        "k-alert-has-description": props.description,
      },
    ]);

    const icons = {
      info: InformationCircle,
      error: CloseCircle,
      success: CheckmarkCircle,
      warning: AlertCircle,
    };

    const aniprop = getTransitionProp("k-alert-slide");

    return () => {
      const iconNode = props.showIcon ? <Icon type={icons[props.type]} class="k-alert-icon" /> : null;
      const closeIcon = props.closable ? <Icon class="k-alert-close" type={Close} onClick={close} /> : null;
      const descriptionNode = props.description ? <div class="k-alert-description">{props.description}</div> : null;
      const msgNode = <div class="k-alert-message">{props.message || slots.default?.()}</div>;

      return (
        <Transition {...aniprop}>
          <div class={classes.value} v-show={!closed.value}>
            {iconNode}
            {msgNode}
            {descriptionNode}
            {closeIcon}
          </div>
        </Transition>
      );
    };
  },
});
export default withInstall(Alert);
