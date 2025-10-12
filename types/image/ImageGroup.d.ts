import Vue from "vue";

/** ImageGroup component props */
export interface ImageGroupProps {}

declare class ImageGroup extends Vue {
  $props: ImageGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default ImageGroup;
