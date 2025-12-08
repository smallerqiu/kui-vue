import Vue, { VueConstructor } from "vue";

/** ImageGroup component props */
export interface ImageGroupProps {}

/** ImageGroup component instance */
export interface ImageGroup extends Vue {
  $props: ImageGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** ImageGroup Vue component type */
declare const ImageGroup: VueConstructor<ImageGroup>;

export default ImageGroup;
