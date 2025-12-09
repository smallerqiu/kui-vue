import Vue, { VueConstructor } from "vue";

/** TextArea component props */
export interface TextAreaProps {
  value?: string | number | Record<string, any> | any[];
  theme?: string;
  disabled?: boolean;
}

/** TextArea component instance */
export interface TextArea extends Vue {
  $props: TextAreaProps;
  $emit(event: string, ...args: any[]): void;
}

/** TextArea Vue component type */
declare const TextArea: VueConstructor<TextArea>;

export default TextArea;
