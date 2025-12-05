import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, computed, inject, onMounted, onBeforeUnmount, watch } from "vue";
import { withInstall } from '../utils/vue';

const Option = defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: Boolean,
  },
  setup(props, { slots }) {
    const select = inject("KSelect", null);
    
    const currentLabel = computed(() => {
      return props.label || props.value;
    });

    const isSelected = computed(() => {
      if (!select) return false;
      if (select.props.multiple) {
        return select.currentValue.value.includes(props.value);
      } else {
        return select.currentValue.value === props.value;
      }
    });

    const isActive = computed(() => {
      if (!select) return false;
      const index = select.childOptions.value.findIndex(o => o.value === props.value);
      return select.hoverIndex.value === index;
    });

    const isVisible = computed(() => {
      if (!select || !select.state.queryKey) return true;
      const query = select.state.queryKey.toLowerCase();
      const text = String(currentLabel.value).toLowerCase();
      return text.includes(query);
    });

    const optionState = {
      value: props.value,
      label: currentLabel.value,
      disabled: props.disabled,
    };

    if (select) {
      onMounted(() => {
         select.registerOption(optionState);
      });
      onBeforeUnmount(() => {
         select.unregisterOption(props.value);
      });
      
      watch(currentLabel, (newLabel) => {
        optionState.label = newLabel;
        select.updateOptionLabel(props.value, newLabel);
      });
    }

    const onSelect = (e) => {
      if (props.disabled || !select) return;
      e.stopPropagation();
      select.onOptionSelect(props.value, optionState);
    };
    
    const onMouseEnter = () => {
      if (props.disabled || !select) return;
      const index = select.childOptions.value.findIndex(o => o.value === props.value);
      select.setHoverIndex(index);
    };

    return () => {
      if (!isVisible.value) return null;

      const { multiple } = select ? select.props : { multiple: false };
      
      const classes = [
        "k-select-item",
        {
          ["k-select-item-selected"]: isSelected.value,
          ["k-select-item-active"]: isActive.value,
          ["k-select-item-disabled"]: props.disabled,
        },
      ];
      
      return (
        <li 
          class={classes} 
          onClick={onSelect} 
          onMouseenter={onMouseEnter}
        >
          <span>
            {slots.default?.() || currentLabel.value}
            {multiple && isSelected.value ? <Icon type={Checkmark} /> : null}
          </span>
        </li>
      );
    };
  },
});
export default withInstall(Option);