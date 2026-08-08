import type { InjectionKey, Ref } from "vue";

export interface TreeSelectContext {
  checkOnClick: Ref<boolean>;
  query: Ref<string>;
}

export const treeSelectContextKey: InjectionKey<TreeSelectContext> = Symbol("tree-select-context");
