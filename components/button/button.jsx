import Icon from "../icon";
import { Loading } from "kui-icons";
import { getChildren } from "../utils/element";
import { colors } from "../const/var";
import { withInstall } from "../utils/vue";
const Button = {
  name: "Button",
  inject: {
    parentSize: {
      from: "size",
      default: null,
    },
  },
  props: {
    htmlType: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    icon: [String, Array],
    block: Boolean,
    size: {
      type: String,
      validator(value) {
        return ["small", "large", "default"].includes(value);
      },
    },
    color: {
      type: String,
      validator(value) {
        return colors.includes(value);
      },
    },
    loading: Boolean,
    type: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "primary",
          "danger",
          "warning",
          "default",
          "text",
          "link",
        ].includes(value);
      },
    },
    disabled: Boolean,
    theme: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "outline", "solid", "light", "dashed", "card"].includes(value);
      },
    },
    shape: String,
    href: String,
    target: String,
  },
  render() {
    const size = this.size || this.parentSize;
    const children = getChildren(this.$slots.default);
    const onlyIcon = !children?.length && (this.icon || this.loading);

    const classes = [
      "k-btn",
      {
        [`k-btn-${this.type}`]: !!this.type,
        ["k-btn-outline"]: this.theme === "outline",
        ["k-btn-sm"]: size === "small",
        ["k-btn-block"]: !!this.block,
        ["k-btn-loading"]: this.loading,
        ["k-btn-icon-only"]: onlyIcon,
        [`k-btn-color-${this.color}`]: colors.includes(this.color),
        ["k-btn-lg"]: size === "large",
        ["k-btn-circle"]: this.shape === "circle",
        [`k-btn-${this.theme}`]: !!this.theme && this.theme !== "default",
      },
    ];

    let childNodes = [];

    const iconType = this.loading ? Loading : this.icon;
    if (iconType) {
      childNodes.push(<Icon type={iconType} spin={this.loading} />);
    }

    const childNode = children?.map((c) => {
      return typeof c.children === "string"
        ? <span>{c.children.trim()}</span>
        : c;
    });

    childNodes = childNodes.concat(childNode);

    const propsObj = {
      attrs: {
        disabled: this.disabled,
        type: this.htmlType,
        href: this.href,
        target: this.target,
      },
      class: classes,
      on: {
        ...this.$listeners,
        click: (e) => {
          if (this.loading || this.disabled) {
            return
          }
          this.$emit('click', e)
        }
      },
    };

    return this.type === "link" && this.href ? (
      <a {...propsObj}>{childNodes}</a>
    ) : (
      <button {...propsObj}>{childNodes}</button>
    );
  },
};

export default withInstall(Button);