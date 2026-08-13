import type { InjectionKey } from "vue";
import type { DirectionType } from "kui-vue/const/types";

export interface MenuContext {
  openKeys: string[];
  selectedKeys: string[];
  mode: DirectionType;
  inlineCollapsed: boolean;
  popupInlineCollapsed: boolean;
  dropdown: boolean;
  openKeysChange: (key: string, opened: boolean, keyPath: string[]) => void;
  selectedKeysChange: (key: string, selected: boolean, keyPath: string[]) => void;
}

export interface SubMenuContext {
  keyPath: string[];
  clearPopTimer: () => void;
  hidePopTimer: () => void;
}

export const MenuContextKey: InjectionKey<MenuContext> = Symbol("menu-context");
export const SubMenuContextKey: InjectionKey<SubMenuContext> = Symbol("sub-menu-context");
