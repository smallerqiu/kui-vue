import type { InjectionKey, Ref } from "vue";

export type CollapseKey = string | number;

export interface CollapseContext {
  openKeys: Ref<CollapseKey[]>;
  toggle: (key: CollapseKey) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol("collapse-context");
