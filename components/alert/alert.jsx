
import Icon from "../icon";
import { getTranstionProp } from '../_tool/transition'
export default {
  components: { Icon },
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: Boolean,
    message: String,
    description: String,
  },
  data() {
    return {
      closed: false
    };
  },
  methods: {
    close() {
      this.closed = true;
      this.$emit("close");
    }
  },
  render() {

    let { closed, showIcon, closable, close, $slots, type, description, message } = this
    const classes = [
      "k-alert", {
        [`k-alert-${this.type}`]: type,
        'k-alert-has-icon': showIcon,
        'k-alert-has-close': closable,
        'k-alert-has-description': description
      }
    ];
    let icons = {
      info: "ios-information-circle",
      error: "ios-close-circle",
      success: "ios-checkmark-circle",
      warning: "ios-alert"
    };
    const iconNode = showIcon ? <Icon type={icons[this.type]} class="k-alert-icon" /> : null
    const closeIcon = closable ? <Icon class="k-alert-close" type="ios-close" onClick={close} /> : null
      description = <div class="k-alert-description">{description}</div>
    const msg = <div class="k-alert-message">{(message || $slots.default)}</div>
    const aniprop = getTranstionProp('k-alert-slide')
    console.log(aniprop)
    return (
      <transition {...aniprop} name='k-alert-slide'>
        <div class={classes} v-show={!closed}>
          {iconNode}
          {msg}
          {description}
          {closeIcon}
        </div >
      </transition >
    )
  }
}; 