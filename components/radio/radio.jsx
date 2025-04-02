import { defineComponent, inject, ref, watch } from "vue";
export default defineComponent({
  name: "Radio",
  props: {
    value: { type: [String, Number], default: false },
    disabled: Boolean,
    checked: [Boolean, Number],
    label: [String, Number],
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(ps, { slots, emit }) {
    const radioGroup = inject("radioGroup", null);

    watch(
      () => ps.checked,
      (nv, no) => {
        isChecked.value = nv;
      }
    );

    const isChecked = ref(ps.checked); // for not set v-model

    const change = (e) => {
      if (ps.disabled) {
        return false;
      }
      const checked = e.target.checked;
      isChecked.value = checked;
      if (radioGroup) {
        const label = ps.label || slots.default?.().text;
        emit("update", { label, value: ps.value });
      } else {
        emit("update:checked", checked);
        emit("change", e);
      }
    };

    return () => {
      const sz = radioGroup?.size || ps.size;

      const disabled = radioGroup?.disabled || ps.disabled;

      const wpclasses = [
        "k-radio",
        {
          ["k-radio-disabled"]: disabled,
          ["k-radio-checked"]: isChecked.value,
          ["k-radio-lg"]: sz == "large",
          ["k-radio-sm"]: sz == "small",
        },
      ];

      const labelNode = ps.label || slots.default?.();

      return (
        <label class={wpclasses} onClick={(e) => e.stopPropagation()}>
          <span class="k-radio-symbol">
            <input type="radio" class="k-radio-input" disabled={disabled} checked={isChecked.value} onChange={change} />
            <span class="k-radio-inner"></span>
          </span>
          {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
