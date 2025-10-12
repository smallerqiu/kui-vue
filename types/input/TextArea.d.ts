import Vue from "vue";

/** TextArea component props */
export interface TextAreaProps {
  value?: string | number;
  theme?: string;
  /** default: default */
  size?: any;
}

declare class TextArea extends Vue {
  $props: TextAreaProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default TextArea;
