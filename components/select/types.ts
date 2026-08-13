export type SelectValue = string | number;

export interface SelectOption {
  label: SelectValue;
  value: SelectValue;
  disabled?: boolean;
}

export interface OptionSelectEvent {
  value: SelectValue;
  label: SelectValue;
}
