export interface DropdownContext {
  dropdown: boolean;
  menuSelected: (data: { key: string; keyPath: string[] }) => void;
  triggerIn: () => void;
  triggerOut: () => void;
  clearPopTimer: () => void;
}

export const DropdownContextKey = Symbol("dropdown-context");
