import { defineComponent, computed } from 'vue';
import BasePop from '../base/pop';

export default defineComponent({
  name: 'Tooltip',
  props: {
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    title: [String, Number, Object, Array],
    color: String,
    trigger: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value)
        );
      },
      default: "top"
    },
    value: Boolean,
    show: Boolean
  },
  setup(props, { slots }) {
    const title = computed(() => slots.title ? slots.title() : props.title);

    const basePopProps = computed(() => ({
      preCls: 'tooltip',
      ...props,
      updateKey: title.value
    }));

    return () => {
      return (
        <BasePop {...basePopProps.value}>
          {slots.default?.()}
          {title.value ? <template slot="title">{title.value}</template> : null}
        </BasePop>
      );
    };
  }
});