import Form from "./form";
import type { FormExpose } from "./types";
import FormItem from "./form-item";
export type { FormProps } from "./form";
export type { FormRules, FormSubmitEvent, FormExpose, FormValidateTrigger } from "./types";
export type { FormItemProps } from "./form-item";
export { Form, FormItem };
export type FormContext = InstanceType<typeof Form> & FormExpose;
