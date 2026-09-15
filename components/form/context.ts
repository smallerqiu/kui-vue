import {
  computed,
  getCurrentInstance,
  inject,
  provide,
  type Attrs,
  type ComputedRef,
  type HTMLAttributes,
  type InjectionKey,
} from "vue";
import type { DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import { CONFIG_PROVIDER_INJECTION_KEY } from "../config/context";
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

/** Resolve appearance without letting an inherited Form value override an explicit component prop. */
export const useFormAppearance = <
  T extends { size?: SizeType; theme?: ThemeType; shape?: ShapeType },
>(
  props: T,
  field: FormFieldContext | null,
) => {
  const instance = getCurrentInstance();
  const config = inject(CONFIG_PROVIDER_INJECTION_KEY, null);
  const isExplicit = (name: "size" | "theme" | "shape") =>
    Object.prototype.hasOwnProperty.call(instance?.vnode.props ?? {}, name);

  return {
    size: computed(() =>
      isExplicit("size") ? props.size : (field?.size.value ?? config?.size.value ?? props.size),
    ),
    theme: computed(() =>
      isExplicit("theme")
        ? props.theme
        : (field?.theme.value ?? config?.theme.value ?? props.theme),
    ),
    shape: computed(() =>
      isExplicit("shape")
        ? props.shape
        : (field?.shape.value ?? config?.shape.value ?? props.shape),
    ),
  };
};

const stringAttr = (value: unknown) => (typeof value === "string" ? value : undefined);
const ariaInvalidAttr = (value: unknown): HTMLAttributes["aria-invalid"] =>
  typeof value === "boolean" ||
  value === "true" ||
  value === "false" ||
  value === "grammar" ||
  value === "spelling"
    ? value
    : undefined;
const ariaRequiredAttr = (value: unknown): HTMLAttributes["aria-required"] =>
  typeof value === "boolean" || value === "true" || value === "false" ? value : undefined;

export const resolveFormControlAttrs = (attrs: Attrs, field: FormFieldContext | null) => ({
  id: stringAttr(attrs.id) ?? (field?.prop ? field.id : undefined),
  "aria-labelledby":
    stringAttr(attrs["aria-labelledby"]) ?? (field?.prop ? field.labelId : undefined),
  "aria-describedby": stringAttr(attrs["aria-describedby"]) ?? field?.describedBy.value,
  "aria-invalid": (ariaInvalidAttr(attrs["aria-invalid"]) ?? field?.invalid.value) || undefined,
  "aria-required": (ariaRequiredAttr(attrs["aria-required"]) ?? field?.required.value) || undefined,
});

export const markFormFieldComponent = <T extends object>(component: T): T => {
  formFieldComponents.add(component);
  return component;
};

export const isFormFieldComponent = (component: unknown) =>
  (typeof component === "object" || typeof component === "function") &&
  component !== null &&
  formFieldComponents.has(component);
