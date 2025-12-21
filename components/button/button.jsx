import { defineComponent, inject, computed } from "vue";
import Icon from "../icon";
import { Loading } from "kui-icons";
import { getChildren } from "../utils/vnode";
import { withInstall } from "../utils/vue";
import { colors } from "../const/var";
import { sizeMap, filterSize } from "../utils/size";
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
      size: String,
      validator(value) {
        return sizeMap.includes(value);
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
    disabled: { type: Boolean, default: false },
    theme: {
      type: String,
      validator(value) {
        return ["outline", "solid", "light", "dashed", "card"].includes(value);
      },
    },
    shape: String,
    href: String,
    target: String,
  },
  emits: ["click"],
  setup(props, { emit, slots, attrs, listeners }) {
    const buttonGroup = inject("KButtonGroup", null);

    const parentSize = inject("size", null);

    const computedSize = computed(() => {
      return (
        props.size ||
        buttonGroup?.size?.value ||
        filterSize(parentSize) ||
        "default"
      );
    });

    const computedShape = computed(() => {
      return props.shape || buttonGroup?.shape?.value;
    });

    const handleClick = (e) => {
      if (props.loading || props.disabled) {
        e.preventDefault();
        return;
      }
      emit("click", e);
    };

    return () => {
      let children = getChildren(slots.default?.());
      // for Vue 3
      // const iconOnly = () => {
      //   const validChildren = children.filter((c) => c.type !== Comment);
      //   if (validChildren.length === 1) {
      //     return validChildren[0].type.name === "Icon";
      //   }
      //   return false;
      // };
      const iconOnly = () => {
        // for 2
        const excluded = children.filter(
          (c) => c.componentOptions?.tag !== "transition"
        );

        if (!excluded?.length) {
          return props.icon || props.loading;
        }
        if (excluded.length === 1) {
          return excluded[0].componentOptions?.tag === "Icon";
        }
        return false;
      };

      const classes = [
        "k-btn",
        {
          [`k-btn-${props.type}`]: !!props.type && !props.color,
          [`k-btn-outline`]: props.theme == "outline",
          ["k-btn-sm"]: computedSize.value === "small",
          ["k-btn-block"]: !!props.block,
          ["k-btn-loading"]: props.loading,
          ["k-btn-icon-only"]: iconOnly(),
          [`k-btn-${props.color}`]: colors.includes(props.color),
          ["k-btn-lg"]: computedSize.value === "large",
          ["k-btn-circle"]: computedShape.value === "circle",
          [`k-btn-${props.theme}`]: !!props.theme && props.theme !== "default",
        },
      ];
      let childNodes = [];

      const iconType = props.loading ? Loading : props.icon;
      if (iconType) {
        childNodes.push(<Icon type={iconType} spin={props.loading} />);
      }

      const processedChildren = children?.map((c) => {
        return typeof c.text === "string" ? <span>{c.text.trim()}</span> : c;
      });

      if (processedChildren) {
        childNodes = childNodes.concat(processedChildren);
      }

      const commonProps = {
        ...attrs,
        class: classes,
        href: props.href,
        target: props.target,
        disabled: props.disabled,
        type: props.htmlType, //   submit/reset
        onClick: handleClick,
      };

      return props.type === "link" && props.href && !props.disabled ? (
        <a {...commonProps}>{childNodes}</a>
      ) : (
        <button {...commonProps}>{childNodes}</button>
      );
    };
  },
});
export default withInstall(Button);
