import Vue from "vue";

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

declare class ImagePreview extends Vue {
  $props: ImagePreviewProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default ImagePreview;
