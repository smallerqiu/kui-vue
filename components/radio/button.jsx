import { Button } from "../button";
import { defineComponent, inject, computed } from "vue";
import { withInstall } from '../utils/vue';
const RadioButton = defineComponent({
  name: "RadioButton",
  props: {
    value: { type: [String, Number], default: false },
    disabled: Boolean,
    checked: Boolean,
    label: [String, Number],
    theme: String,
    shape: String,
  },
  setup(ps, { slots, emit, attrs }) {
    const radioGroup = inject("radioGroup", null);
    const change = (e) => {
      const _label = ps.label || slots.default?.().text;

      emit("update", { label: _label, value: ps.value });
      
    };
    return () => {
      let { disabled, label, size, theme, shape, checked } = ps;
      const props = {
        ...attrs,
        onClick: change,
        disabled: radioGroup?.disabled || disabled,
        size: radioGroup?.size || size,
        theme: radioGroup?.theme || theme,
        shape: radioGroup?.shape || shape,
        type: checked ? "primary" : "default",
      };
      return <Button {...props}>{label || slots.default?.()}</Button>;
    };
  },
});
export default withInstall(RadioButton);
