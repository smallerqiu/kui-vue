import Icon from "../icon";
import { Checkmark } from "kui-icons/dist/icons";
import { defineComponent, computed } from "vue";
import { withInstall } from "../utils/vue";
const Option = defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: Boolean,
    checked: Boolean,
    active: Boolean,
    multiple: Boolean,
  },
  methods: {},
  setup(ps, { slots, emit }) {
    const labelText = ps.label || slots.default?.() || ps.value;

    const checked = computed(() => ps.checked);
    const onSelect = () => {
      if (ps.disabled) return;
      // isChecked.value = !isChecked.value;
      emit("select", { value: ps.value, label: labelText });
    };

    return () => {
      const { multiple, disabled } = ps;
      const classes = [
        "k-select-item",
        {
          ["k-select-item-selected"]: checked.value,
          ["k-select-item-active"]: ps.active,
          ["k-select-item-disabled"]: disabled,
        },
      ];
      return (
        <li class={classes} onClick={onSelect}>
          <span>
            {labelText}
            {multiple ? <Icon type={Checkmark} /> : null}
          </span>
        </li>
      );
    };
  },
});
export default withInstall(Option);
