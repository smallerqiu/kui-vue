export type SelectValue = string | number;

export interface SelectOption {
  label: SelectValue;
  value: SelectValue;
  disabled?: boolean;
}

export interface OptionSelectEvent {
  value: SelectValue;
  label: VNodeChild;
  selected?: boolean;
}
import type { VNodeChild } from "vue";
