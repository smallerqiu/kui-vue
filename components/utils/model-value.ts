import { computed, shallowRef, type WritableComputedRef } from "vue";

/** Capture value once; subsequent external updates belong to modelValue. */
export function useInitialValue<T>(props: { modelValue?: T; value: T }): WritableComputedRef<T>;
export function useInitialValue<T>(props: {
  modelValue?: T;
  value?: T;
}): WritableComputedRef<T | undefined>;
export function useInitialValue<T>(props: { modelValue?: T; value?: T }) {
  const initial = props.value;
  const local = shallowRef<T | undefined>(Array.isArray(initial) ? ([...initial] as T) : initial);
  return computed({
    get: () => (props.modelValue !== undefined ? props.modelValue : local.value),
    set: (value: T | undefined) => {
      local.value = value;
    },
  });
}
