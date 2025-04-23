import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, inject, ref, watch, computed } from "vue";
export default defineComponent({
  name: "Checkbox",
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    label: { type: [String, Number] },
    indeterminate: Boolean,
    checked: [Boolean, Number],
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { slots, emit }) {
    const checkBoxGroup = inject("checkBoxGroup", null);

    const isChecked = ref(ps.checked); // for not set v-model

    watch(
      () => ps.checked,
      (nv, no) => {
        isChecked.value = nv;
      }
    );

    const indeterminate = computed(() => ps.indeterminate);

    const change = (e) => {
      if (ps.disabled) {
        return false;
      }
      const checked = e.target.checked;
      isChecked.value = checked;
      if (checkBoxGroup) {
        const label = ps.label || slots.default?.().text;
        emit("update", { checked, label, value: ps.value });
      } else {
        emit("update:checked", checked);
      }
      e.stopPropagation()
    };

    return () => {
      const sz = checkBoxGroup?.size || ps.size;
      const disabled = checkBoxGroup?.disabled || ps.disabled;

      const wpclasses = [
        "k-checkbox",
        {
          ["k-checkbox-disabled"]: disabled,
          ["k-checkbox-checked"]: isChecked.value && !indeterminate.value,
          ["k-checkbox-indeterminate"]: indeterminate.value && !isChecked.value,
          ["k-checkbox-sm"]: sz == "small",
          ["k-checkbox-lg"]: sz == "large",
        },
      ];

      let innerNode = isChecked.value ? <Icon type={Checkmark} strokeWidth={60} /> : null;
      const labelNode = ps.label || slots.default?.();

      return (
        <label class={wpclasses} onClick={(e) => e.stopPropagation()}>
          <span class="k-checkbox-symbol">
            <input type="checkbox" class="k-checkbox-input" checked={isChecked.value} disabled={disabled} onChange={change} />
            <span class="k-checkbox-inner">{innerNode}</span>
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
