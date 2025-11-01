import Vue, { VueConstructor } from "vue";

/** Form component props */
export interface FormProps {
  /** default: horizontal */
  layout?: any;
  model?: Record<string, any>;
  name?: string;
  labelCol?: Record<string, any>;
  wrapperCol?: Record<string, any>;
  /** default: undefined */
  rules?: Record<string, any>;
  /** default: default */
  size?: any;
  theme?: string;
  shape?: string;
  disabled?: boolean;
}

/** Form component instance */
export interface Form extends Vue {
  $props: FormProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Form Vue component type */
declare const Form: VueConstructor<Form>;

export default Form;
