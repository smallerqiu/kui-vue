import { Button } from "../button";
import { defineComponent, inject } from "vue";
import { withInstall } from '../utils/vue';
const RadioButton = defineComponent({
  name: "RadioButton",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    checked: Boolean,
    label: [String, Number],
    theme: String,
    shape: String,
    size: String,
  },
  setup(ps, { slots, emit, attrs, listeners }) {
    const radioGroup = inject("radioGroup", null);
    const parentSize = inject("size", null);
    const change = (e) => {
      const _label = ps.label || slots.default?.().text;

      emit("update", { label: _label, value: ps.value });

    };
    return () => {
      let { disabled, label, size = parentSize, theme, shape, checked } = ps;
      const props = {
        ...attrs,
        // onClick: change,
        props: {
          disabled: radioGroup?.disabled || disabled,
          size: radioGroup?.size || size,
          theme: radioGroup?.theme || theme,
          shape: radioGroup?.shape || shape,
          type: checked ? "primary" : "default",
        },
        on: {
          ...listeners,
          click: change
        }
      };
      return <Button {...props}>{label || slots.default?.()}</Button>;
    };
  },
});
export default withInstall(RadioButton);
