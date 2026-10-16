import type { ComputedRef, InjectionKey } from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import type { CheckCardValue } from "./types";

export interface CheckCardRegistryItem {
  element: HTMLElement;
  disabled: boolean;
}

export interface CheckCardGroupContext {
  modelValue: ComputedRef<CheckCardValue | undefined>;
  disabled: ComputedRef<boolean>;
  readonly: ComputedRef<boolean>;
  // Typed as the shared tier, not a loose string: a card resolves this through the same guard it
  // applies to its own `theme`, and "whatever the group happened to put in context" would not typecheck.
  theme: ComputedRef<ThemeType | undefined>;
  size: ComputedRef<SizeType>;
  shape: ComputedRef<ShapeType>;
  select: (value: CheckCardValue) => void;
  selectRelative: (value: CheckCardValue, offset: number) => void;
  register: (value: CheckCardValue, item: CheckCardRegistryItem) => void;
  unregister: (value: CheckCardValue) => void;
}

export const checkCardGroupKey: InjectionKey<CheckCardGroupContext> = Symbol("check-card-group");
