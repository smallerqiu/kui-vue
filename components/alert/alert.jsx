
import Icon from "../icon";
import { getChild } from '../_tool/utils'
import Transition from '../collapse/collapse.jsx'
export default {
  components: { Icon },
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: Boolean
  },
  data() {
    return {
      closed: false
    };
  },
  computed: {
    icon() {
      let icons = {
        info: "ios-information-circle",
        error: "ios-close-circle",
        success: "ios-checkmark-circle",
        warning: "ios-alert"
      };
      return icons[this.type];
    },
    classes() {
      return [
        "k-alert", { [`k-alert-${this.type}`]: this.type }
      ];
    }
  },
  methods: {
    close() {
      this.closed = true;
      this.$emit("close");
    }
  },
  render() {

    let { closed, classes, icon, showIcon, closable, close, $slots } = this
    let iconNode = showIcon ? <Icon type={icon} /> : null
    let closeIcon = closable ? <a class="k-alert-close" onClick={close} /> : null
    let kid = getChild($slots.default)

    return (
      <Transition>
        <div class={classes} v-show={!closed}>
          {iconNode}
          {kid}
          {closeIcon}
        </div >
      </Transition >
    )
  }
}; 