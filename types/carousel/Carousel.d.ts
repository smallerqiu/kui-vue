import Vue, { VueConstructor } from "vue";

/** Carousel component props */
export interface CarouselProps {
  /** default: 0 */
  value?: number;
  /** default: true */
  loop?: boolean;
  autoplay?: boolean;
  /** default: 3000 */
  delay?: number;
  vertical?: boolean;
  /** default: true */
  dots?: boolean;
}

/** Carousel component instance */
export interface Carousel extends Vue {
  $props: CarouselProps;
  $emit(event: string, ...args: any[]): this;
}

/** Carousel Vue component type */
declare const Carousel: VueConstructor<Carousel>;

export default Carousel;
