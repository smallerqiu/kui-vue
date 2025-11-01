import Vue, { VueConstructor } from "vue";

/** TextArea component props */
export interface TextAreaProps {
  value?: string | number;
  theme?: string;
  /** default: default */
  size?: any;
}

/** TextArea component instance */
export interface TextArea extends Vue {
  $props: TextAreaProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** TextArea Vue component type */
declare const TextArea: VueConstructor<TextArea>;

export default TextArea;
