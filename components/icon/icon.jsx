import { defineComponent, ref } from "vue";

const sty2obj = (stl) => {
  stl = stl.replace(/ /g, "");
  let s = stl.split(";");
  let obj = {};
  s.map((atr) => {
    let [k, v] = atr.split(":");
    if (k) {
      obj[k] = v;
    }
  });
  return obj;
};

const obj2sty = (obj) => {
  let sty = "";
  for (let k in obj) {
    sty += `${k}:${obj[k]};`;
  }
  return sty;
};

export default defineComponent({
  name: "Icon",
  props: {
    type: [String, Array],
    size: [String, Number],
    color: String,
    spin: Boolean,
    strokeWidth: [String, Number],
    // sprite: Boolean
  },
  setup(props, { emit, slots, attrs }) {
    const renderPaths = () => {
      let paths = Array.isArray(props.type) ? props.type : [];
      return paths.map((i) => {
        let sty = i.s ? i.s : "fill:currentColor";
        if (props.strokeWidth) {
          let o = sty2obj(sty);
          if (o["stroke-width"]) {
            o["stroke-width"] = props.strokeWidth;
            sty = obj2sty(o);
          }
        }
        return <path d={i.d} style={sty} />;
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
          {slots.default?.()}
        </i>
      );
    };
  },
});
