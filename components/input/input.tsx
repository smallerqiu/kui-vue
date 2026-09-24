import { defineComponent, getCurrentInstance, ref } from "vue";
import { markFormFieldComponent } from "../form/context";
import InputBase, { inputProps, inputEmits, type InputProps, type InputRef } from "./input-base";

export type { InputProps, InputEvents, InputRef } from "./input-base";

const Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: inputProps,
  emits: inputEmits,
  setup(props, { attrs, slots, emit, expose }) {
    const inner = ref<InputRef>();
    const instance = getCurrentInstance();
    expose({
      focus: () => inner.value?.focus(),
      blur: () => inner.value?.blur(),
    });
    return () => {
      // Preserve whether appearance props were explicitly supplied, so the base
      // can still inherit ConfigProvider/Form defaults.
      const forwardedProps: Partial<typeof props> = { ...props };
      for (const name of ["size", "theme", "shape"] as const) {
        if (!Object.prototype.hasOwnProperty.call(instance?.vnode.props ?? {}, name)) {
          delete forwardedProps[name];
        }
      }
      return (
        <InputBase
          {...attrs}
          {...forwardedProps}
          ref={inner}
          stylePrefix="input"
          onUpdate:modelValue={(value) => emit("update:modelValue", value)}
          onChange={(value) => emit("change", value)}
          onClear={() => emit("clear")}
          onFocus={(event) => emit("focus", event)}
          onBlur={(event) => emit("blur", event)}
          onSearch={instance?.vnode.props?.onSearch ? (value) => emit("search", value) : undefined}
          onIconClick={
            instance?.vnode.props?.onIconClick ? (event) => emit("iconClick", event) : undefined
          }
          v-slots={{ ...slots, controls: undefined }}
        />
      );
    };
  },
});

const FormInput = markFormFieldComponent(Input);
export default FormInput as typeof FormInput & {
  new (): Omit<InstanceType<typeof FormInput>, "$props"> & InputRef & { $props: InputProps };
};
