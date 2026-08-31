export interface ColProps {
  span?: number;
  offset?: number;
}

/** 校验触发时机 */
export type FormValidateTrigger = "blur" | "change";

export interface FormRule {
  required?: boolean;
  message?: string;
  validator?: (
    rule: FormRule,
    value: unknown,
    callback: (error?: Error) => void
  ) => void | Promise<void>;
  pattern?: RegExp;
  type?: "mobile" | "mail" | "number";
  min?: number;
  max?: number;
  /** 该规则在何时触发校验，未设置时默认在 `change` 时校验 */
  trigger?: FormValidateTrigger | FormValidateTrigger[];
}

export interface FormSubmitEvent {
  valid: boolean;
}

export interface FormExpose {
  validate: (callback?: (result: FormSubmitEvent) => void) => Promise<FormSubmitEvent>;
  reset: () => void;
  test: (key: string, trigger?: FormValidateTrigger) => Promise<boolean> | undefined;
  submit: () => Promise<void>;
}
