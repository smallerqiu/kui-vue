import Vue from "vue";

/** FormItem component props */
export interface FormItemProps {
  label?: string;
  prop?: string;
  labelCol?: Record<string, any>;
  wrapperCol?: Record<string, any>;
  rules?: any[] | Record<string, any>;
}

declare class FormItem extends Vue {
  $props: FormItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default FormItem;
