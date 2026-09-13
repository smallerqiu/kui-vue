import { inject, provide, type ComputedRef, type InjectionKey } from "vue";
import type { DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import type { ColProps, FormRule, FormRules, FormValidateTrigger } from "./types";

export interface FormItemRegistration {
  prop?: string;
  rules?: FormRule | FormRule[];
  valid: boolean;
  validate: (rules: FormRule | FormRule[], trigger?: FormValidateTrigger) => Promise<boolean>;
}

export interface FormProviderContext {
  getValueFromProp?: (prop: string | undefined) => unknown;
  rules?: FormRules;
  register?: (item: FormItemRegistration) => void;
  unregister?: (item: FormItemRegistration, prop?: string) => void;
  layout?: "inline" | DirectionType;
  name?: string;
  size?: SizeType;
  shape?: ShapeType;
  disabled?: boolean;
  readonly?: boolean;
  colon?: boolean;
  theme?: ThemeType;
  updateModel?: (prop: string, value: unknown) => void;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  cleaned?: boolean;
}

export const FORM_INJECTION_KEY: InjectionKey<FormProviderContext> = Symbol("KForm");

export interface FormFieldContext {
  id: string;
  labelId: string;
  errorId: string;
  prop?: string;
  value: ComputedRef<unknown>;
  size: ComputedRef<SizeType | undefined>;
  shape: ComputedRef<ShapeType | undefined>;
  theme: ComputedRef<ThemeType | undefined>;
  disabled: ComputedRef<boolean>;
  readonly: ComputedRef<boolean>;
  invalid: ComputedRef<boolean>;
  required: ComputedRef<boolean>;
  describedBy: ComputedRef<string | undefined>;
  update: (value: unknown) => void;
  blur: () => void;
}

export const FORM_FIELD_INJECTION_KEY: InjectionKey<FormFieldContext | null> = Symbol("KFormField");
const formFieldComponents = new WeakSet<object>();

export const useFormField = (isolate = false) => {
  const field = inject(FORM_FIELD_INJECTION_KEY, null);
  if (isolate) provide(FORM_FIELD_INJECTION_KEY, null);
  return field;
};

export const markFormFieldComponent = <T extends object>(component: T): T => {
  formFieldComponents.add(component);
  return component;
};

export const isFormFieldComponent = (component: unknown) =>
  (typeof component === "object" || typeof component === "function") &&
  component !== null &&
  formFieldComponents.has(component);
