import type { IconType } from "../icon";

export interface ChangeEvent {
  value?: string | number;
  label: string;
  checked: boolean;
}

export interface RadioOption {
  label?: string;
  value: string | number;
  disabled?: boolean;
  icon?: IconType[];
}
