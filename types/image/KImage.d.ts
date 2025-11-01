import Vue, { VueConstructor } from "vue";

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

/** KImage component instance */
export interface KImage extends Vue {
  $props: KImageProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** KImage Vue component type */
declare const KImage: VueConstructor<KImage>;

export default KImage;
