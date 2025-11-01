import Vue, { VueConstructor } from "vue";

/** ImagePreview component props */
export interface ImagePreviewProps {
  type?: string;
  origin?: string;
  hasControl?: boolean;
  value?: boolean;
  /** default: false */
  transfer?: boolean;
  /** default: undefined */
  data?: any[];
  showSwitch?: boolean;
  showPanel?: boolean;
  /** default: true */
  global?: boolean;
}

/** ImagePreview component instance */
export interface ImagePreview extends Vue {
  $props: ImagePreviewProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** ImagePreview Vue component type */
declare const ImagePreview: VueConstructor<ImagePreview>;

export default ImagePreview;
