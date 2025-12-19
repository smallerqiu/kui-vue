import Vue, { VueConstructor } from "vue";

/** formitem component props */
export interface formitemProps {
  label?: string;
  prop?: string;
  labelCol?: Record<string, any>;
  wrapperCol?: Record<string, any>;
  rules?: any[] | Record<string, any>;
}

/** formitem component instance */
export interface formitem extends Vue {
  $props: formitemProps;
  $emit(event: string, ...args: any[]): void;
}

/** formitem Vue component type */
declare const formitem: VueConstructor<formitem>;

export default formitem;
