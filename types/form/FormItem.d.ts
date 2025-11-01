import Vue, { VueConstructor } from "vue";

/** FormItem component props */
export interface FormItemProps {
  label?: string;
  prop?: string;
  labelCol?: Record<string, any>;
  wrapperCol?: Record<string, any>;
  rules?: any[] | Record<string, any>;
}

/** FormItem component instance */
export interface FormItem extends Vue {
  $props: FormItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** FormItem Vue component type */
declare const FormItem: VueConstructor<FormItem>;

export default FormItem;
