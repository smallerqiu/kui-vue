import Vue from "vue";

/** KImage component props */
export interface KImageProps {
  alt?: string;
  src?: string;
  type?: string;
  origin?: string;
  height?: string | number;
  width?: string | number;
  placeholder?: string;
  imgStyle?: Record<string, any>;
  showPanel?: boolean;
}

declare class KImage extends Vue {
  $props: KImageProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default KImage;
