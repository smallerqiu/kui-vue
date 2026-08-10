import type { Ref } from "vue";
export const MenuContextKey = Symbol("menu-context");
export const SubMenuContextKey = Symbol("sub-menu-context");

export interface MenuContext {
  openKeys: Ref<string[]>;
  selectedKeys: Ref<string[]>;
  mode: Ref<"horizontal" | "vertical" | "inline">;
  inlineCollapsed: Ref<boolean>;
  popupInlineCollapsed: Ref<boolean>;
  dropdown: boolean;
  openKeysChange: (key: string, opened: boolean, keyPath: string[]) => void;
  selectedKeysChange: (key: string, selected: boolean, keyPath: string[]) => void;
}

export interface SubMenuContext {
  keyPath: string[];
  clearPopTimer: () => void;
  hidePopTimer: () => void;
}
