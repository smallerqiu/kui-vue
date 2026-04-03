import { Loading } from "kui-icons";
import {
  Comment,
  computed,
  defineComponent,
  inject,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { colors, type TypeSize } from "../const/var";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";

export const buttonProps = {
  htmlType: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  icon: [Array] as PropType<IconType[]>,
  block: Boolean,
  size: {
    type: String as PropType<TypeSize>,
  },
  color: {
    type: String as PropType<(typeof colors)[number]>,
  },
  loading: Boolean,
  type: {
    type: String as PropType<"primary" | "danger" | "warning" | "default" | "text" | "link">,
    default: "default",
  },
  disabled: { type: Boolean, default: false },
  theme: {
    type: String as PropType<"outline" | "solid" | "light" | "dashed" | "card">,
  },
  shape: String as PropType<"circle" | string>,
  href: String,
  target: String,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name: "Button",
  props: buttonProps,
  emits: ["click","mouseenter","mouseleave"],
  setup(props, { emit, slots, attrs }) {
    const buttonGroup = inject<any>("KButtonGroup", null);
    const parentSize = inject<string | null>("size", null);

    const computedSize = computed(() => {
      return props.size || buttonGroup?.size || parentSize || "default";
    });

    const computedShape = computed(() => {
      return props.shape || buttonGroup?.shape?.value;
    });

    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) {
        e.preventDefault();
        return;
      }
      emit("click", e);
    };

    const children = computed(() => getChildren(slots.default?.()));

    return () => {
      const iconOnly = () => {
        const excluded = children.value.filter((c: any) => c.type !== Comment);
        if (!excluded?.length) {
          return props.icon || props.loading;
        }
        if (excluded.length === 1) {
          const type = excluded[0].type;
          return type && (type.name === "Icon" || type === Icon);
        }
        return false;
      };

      const classes = [
        "k-btn",
        {
          [`k-btn-${props.type}`]: !!props.type && !props.color,
          [`k-btn-outline`]: props.theme === "outline",
          ["k-btn-sm"]: computedSize.value === "small",
          ["k-btn-block"]: !!props.block,
          ["k-btn-loading"]: props.loading,
          ["k-btn-icon-only"]: iconOnly(),
          [`k-btn-${props.color}`]: props.color && colors.includes(props.color),
          ["k-btn-lg"]: computedSize.value === "large",
          ["k-btn-circle"]: computedShape.value === "circle",
          [`k-btn-${props.theme}`]: !!props.theme,
        },
      ];

      let childNodes: any[] = [];
      const iconType = props.loading ? Loading : props.icon;

      if (iconType) {
        childNodes.push(<Icon type={iconType} spin={props.loading} />);
      }

      const processedChildren = children.value?.map((c: any) => {
        return typeof c.children === "string" ? <span>{c.children.trim()}</span> : c;
      });

      if (processedChildren) {
        childNodes = childNodes.concat(processedChildren);
      }

      const commonProps = {
        ...attrs,
        class: classes,
        href: props.href,
        target: props.target,
        disabled: props.disabled || props.loading,
        type: props.htmlType,
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
