import Checkbox from "./checkbox";
import { defineComponent, watch, ref, computed } from "vue";
import { withInstall } from "../utils/vue";
import { getChildren } from "../utils/vnode";

const CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    modelValue: { type: Array, default: () => [] },
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
    const currentValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
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
      emit("update:modelValue", val);
      emit("change", val);
    };

    const optionsData = computed(() => {
      let { options } = props;
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child, index) => {
          let { label, value, disabled } = child?.props;
          options.push({
            value,
            disabled,
            label: label || child.children?.default()[0].children || value,
          });
        });
      }
      return options;
    });

    return () => {
      let options = optionsData.value;
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
