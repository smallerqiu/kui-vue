import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, ref, inject, computed, onMounted } from "vue";
import { withInstall } from '../utils/vue';
const Option = defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: Boolean,
    checked: Boolean,
    actived: Boolean,
    multiple: Boolean,
  },
  methods: {},
  setup(ps, { slots, emit }) {
    const lableText = ps.label || slots.default?.() || ps.value;

    const checked = computed(() => ps.checked);
    const onSelect = () => {
      if (ps.disabled) return;
      // isChecked.value = !isChecked.value;
      emit("select", { value: ps.value, label: lableText });
    };

    return () => {
      const { multiple, disabled } = ps;
      const classes = [
        "k-select-item",
        {
          ["k-select-item-selected"]: checked.value,
          ["k-select-item-actived"]: ps.actived,
          ["k-select-item-disabled"]: disabled,
        },
      ];
      return (
        <li class={classes} onClick={onSelect}>
          <span>
            {lableText}
            {multiple ? <Icon type={Checkmark} /> : null}
          </span>
        </li>
      );
    };
  },
});
export default withInstall(Option);