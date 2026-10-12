export interface DropdownContext {
  dropdown: boolean;
  menuSelected: (data: { key: string; keyPath: string[] }) => void;
  /** target 模式下的触发按钮（DropdownButton 右块）需要自己反映展开状态 */
  expanded: () => boolean;
  triggerIn: () => void;
  triggerOut: () => void;
  triggerClick: () => void;
  triggerContextmenu: () => void;
  triggerKeydown: (event: KeyboardEvent) => void;
  clearPopTimer: () => void;
}

export const DropdownContextKey = Symbol("dropdown-context");
