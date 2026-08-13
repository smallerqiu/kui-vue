export interface ColProps {
  span?: number;
  offset?: number;
}

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
}

export interface FormSubmitEvent {
  valid: boolean;
}

export interface FormExpose {
  validate: (callback?: (result: FormSubmitEvent) => void) => Promise<FormSubmitEvent>;
  reset: () => void;
  test: (key: string) => Promise<boolean> | undefined;
  submit: () => Promise<void>;
}
