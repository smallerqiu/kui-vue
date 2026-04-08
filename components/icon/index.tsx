import {
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType
} from "vue";
import type { TypeBoolean } from "../const/var";

const parseStyle = (styleString: string) => {
  const styles: any = {};
  if (!styleString) return styles;

  styleString.split(";").forEach((rule) => {
    const [property, value] = rule.split(":");
    if (property && value) {
      const propName = property.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styles[propName] = value.trim();
    }
  });

  return styles;
};

export interface IconType {
  d: string;
  s?: string;
}

const iconProps = {
  type: [Array] as PropType<IconType[]>,
  size: [String, Number],
  color: String,
  spin: Boolean as TypeBoolean,
  strokeWidth: [String, Number],
  onClick: Function as PropType<(e:MouseEvent) => void>,
} ;

export type IconProps = Partial<ExtractPropTypes<typeof iconProps>> ;

const Icon = defineComponent({
  name: "Icon",
  props: iconProps,
  emits: ["click"],
  setup(props, { attrs }) {
    const renderPaths = () => {
      const paths = Array.isArray(props.type) ? props.type : [];
      return paths.map((i) => {
        const styleObj = parseStyle(i.s || "fill:currentColor");
        if (props.strokeWidth) {
          styleObj.strokeWidth = props.strokeWidth;
        }
        const dProps = {
          d: i.d,
          style: styleObj,
        };
        return <path {...dProps} />;
      });
    };

    return () => {
      const styles: CSSProperties = { color: props.color };

      if (props.size) {
        styles.fontSize = `${props.size}px`;
      }

      /**
       * Using property spread to avoid "no-inline-styles" warnings
       * and maintain consistent component library architecture.
       */
      const iProps = {
        ...attrs,
        style: styles,
        class: ["k-icon", { "k-load-loop": props.spin }],
      };

      return (
        <i {...iProps}>
          <svg viewBox="0 0 512 512" width="1em" height="1em">
            {renderPaths()}
          </svg>
        </i>
      );
    };
  },
}) //as DefineComponent<IconProps>;

export default Icon;
