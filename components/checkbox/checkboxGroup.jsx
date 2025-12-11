import Checkbox from "./checkbox";
import { defineComponent, watch, toRefs } from "vue";
import { withInstall } from "../utils/vue";
import { getChildren } from "../utils/element";

const CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    // [Vue 3 Upgrade]
    // modelValue: { type: Array, default: () => [] },

    // [Vue 3 Upgrade] :del
    value: {
      type: Array,
      default: () => [],
    },

    theme: String,
    disabled: Boolean,
    options: Array,
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) >= 0,
    },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit }) {
    // const { disabled, size } = toRefs(props);

    // [Vue 3 Upgrade]: const { modelValue: currentValue } = toRefs(props);
    const { value: currentValue } = toRefs(props);
    watch(
      () => props.value,
      (val) => {
        currentValue.value = val;
      }
    );
    const onChange = ({ value }) => {
      const val = [...currentValue.value];
      const index = val.indexOf(value);

      if (index > -1) {
        val.splice(index, 1);
      } else {
        val.push(value);
      }

      // [Vue 3 Upgrade]: emit("update:modelValue", val);
      emit("input", val); // Vue 2 v-model
      emit("change", val);
    };

    const optionsData = () => {
      let { options } = props;
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child, index) => {
          let { label, value, disabled } =
            child?.componentOptions?.propsData || {};
          let { children = [] } = child?.componentOptions;
          options.push({
            value,
            disabled,
            label: label || children[0]?.text || value,
          });
        });
      }
      return options;
    };

    return () => {
      let options = optionsData();
      let nodes = [];
      options.forEach((option) =>
        nodes.push(
          <Checkbox
            key={option.value}
            label={option.label}
            value={option.value}
            checked={currentValue.value.indexOf(option.value) > -1}
            disabled={props.disabled || option.disabled}
            theme={props.theme}
            size={props.size}
            onChange={onChange}
          />
        )
      );

      return (
        <div
          class={[
            "k-checkbox-group",
            { "k-checkbox-group-vertical": props.direction == "vertical" },
          ]}
        >
          {nodes}
        </div>
      );
    };
  },
});
export default withInstall(CheckboxGroup);
