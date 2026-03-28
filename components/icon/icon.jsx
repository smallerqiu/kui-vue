import { defineComponent } from "vue";

const formatStyle = (styles) => {
  return Object.entries(styles)
    .map(([key, value]) => `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`)
    .join(";");
};

const parseStyle = (styleString) => {
  const styles = {};
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

const Icon = defineComponent({
  name: "Icon",
  props: {
    type: [String, Array],
    size: [String, Number],
    color: String,
    spin: Boolean,
    strokeWidth: [String, Number],
    // sprite: Boolean
  },
  setup(props, { emit, slots, attrs, listeners }) {
    const renderPaths = () => {
      let paths = Array.isArray(props.type) ? props.type : [];
      return paths.map((i) => {
        let style = i.s || "fill:currentColor";
        if (props.strokeWidth) {
          let o = parseStyle(style);
          if (o["strokeWidth"]) {
            o["strokeWidth"] = props.strokeWidth;
            style = formatStyle(o);
          }
        }
        return <path d={i.d} style={style} />;
      });
    };

    return () => {
      const classes = ["k-icon", { "k-load-loop": props.spin }];
      const styles = {
        color: props.color,
      };

      if (props.size) {
        styles.fontSize = `${props.size}px`;
      }
      const propsObj = {
        ...attrs,
        style: styles,
        class: classes,
      };

      return (
        <i {...propsObj}>
          <svg viewBox="0 0 512 512" width="1em" height="1em">
            {renderPaths()}
          </svg>
        </i>
      );
    };
  },
});

export default Icon;
