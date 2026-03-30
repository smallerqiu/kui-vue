export interface ColProps {
  span?: number;
  offset?: number;
}

export interface FormRule {
  required?: boolean;
  trigger?: "blur" | "change";
  message?: string;
  validator?: (rule: FormRule, value: any, callback: (error?: string) => void) => void;
  pattern?: RegExp;
  type?: "mobile" | "mail" | "number";
  min?: number;
  max?: number;
}
