import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, ref, inject, computed, onMounted } from "vue";
export default defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: Boolean,
    checked: Boolean,
    multiple: Boolean,
  },
  methods: {},
  setup(ps, { slots, emit }) {
    const lableText = ps.label || slots.default?.();

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
