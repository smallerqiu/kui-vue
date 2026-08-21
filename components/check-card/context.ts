import type { ComputedRef, InjectionKey } from "vue";
import type { ShapeType, SizeType } from "../const/types";
import type { CheckCardTheme, CheckCardValue } from "./types";

export interface CheckCardRegistryItem {
  element: HTMLElement;
  disabled: boolean;
}

export interface CheckCardGroupContext {
  modelValue: ComputedRef<CheckCardValue | undefined>;
  disabled: ComputedRef<boolean>;
  theme: ComputedRef<CheckCardTheme>;
  size: ComputedRef<SizeType>;
  shape: ComputedRef<ShapeType>;
  select: (value: CheckCardValue) => void;
  selectRelative: (value: CheckCardValue, offset: number) => void;
  register: (value: CheckCardValue, item: CheckCardRegistryItem) => void;
  unregister: (value: CheckCardValue) => void;
}

export const checkCardGroupKey: InjectionKey<CheckCardGroupContext> = Symbol("check-card-group");
