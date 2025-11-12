import { defineComponent, inject } from "vue";
import Icon from "../icon";
import { Loading } from "kui-icons";
import { getChildren } from "../utils/vnode";
import { withInstall } from '../utils/vue';
import { colors } from "../const/var";
const Button = defineComponent({
  name: "Button",
  props: {
    htmlType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    icon: [String, Array],
    block: Boolean,
    size: {
      validator(value) {
        return ["small", "large", "default"].includes(value);
      },
    },
    color: {
      validator(value) {
        return colors.includes(value);
      },
    },
    loading: Boolean,
    type: {
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
      default: "default",
    },
    disabled: Boolean,
    theme: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "outline", "solid", "light", "dashed", 'card'].includes(value);
      },
    },
    shape: String,
    href: String,
    target: String,
  },
  emits: ['click'],
  setup(props, { emit, slots, attrs, listeners }) {
    const parentSize = inject('size', null)
    return () => {
      const size = props.size || parentSize
      let children = getChildren(slots.default?.());
      const onlyIcon = !children?.length && (props.icon || props.loading);
      const classes = [
        "k-btn",
        {
          [`k-btn-${props.type}`]: !!props.type,
          [`k-btn-outline`]: props.theme == 'outline',
          ["k-btn-sm"]: size === "small",
          ["k-btn-block"]: !!props.block,
          ["k-btn-loading"]: props.loading,
          ["k-btn-icon-only"]: onlyIcon,
          [`k-btn-color-${props.color}`]: colors.includes(props.color),
          ["k-btn-lg"]: size === "large",
          ["k-btn-circle"]: props.shape === "circle",
          [`k-btn-${props.theme}`]: !!props.theme && props.theme !== "default",
        },
      ];
      let childNods = [];

      const iconType = props.loading ? Loading : props.icon;
      if (iconType) {
        childNods.push(<Icon type={iconType} spin={props.loading} />);
      }

      const propsObj = {
        ...attrs,
        disabled: props.disabled,
        type: props.htmlType,
        class: classes,
        on: {
          ...listeners,
          click: (e) => {
            if (props.loading || props.disabled) {
              e.preventDefault();
              return;
            }
            emit("click", e);
          }
        },
      };

      const childNode = children?.map((c) => {
        return typeof c.children === "string" ? (
          <span>{c.children.trim()}</span>
        ) : (
          c
        );
      });
      childNods = childNods.concat(childNode);

      return props.type === "link" && props.href ? (
        <a href={props.href} target={props.target} {...propsObj}>
          {...childNods}
        </a>
      ) : (
        <button {...propsObj}>{...childNods}</button>
      );
    };
  },
});
export default withInstall(Button);
