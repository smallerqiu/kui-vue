export interface CheckboxChangeEvent {
  value?: string | number | boolean;
  label?: string | number;
  checked: boolean;
}

export interface CheckboxOption {
  label?: string;
  value: string | number;
  disabled?: boolean;
  readonly?: boolean;
}

export type CheckboxValue = string | number | boolean;
