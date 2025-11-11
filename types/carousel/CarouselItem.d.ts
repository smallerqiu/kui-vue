import Vue, { VueConstructor } from "vue";

/** CarouselItem component props */
export interface CarouselItemProps {}

/** CarouselItem component instance */
export interface CarouselItem extends Vue {
  $props: CarouselItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** CarouselItem Vue component type */
declare const CarouselItem: VueConstructor<CarouselItem>;

export default CarouselItem;
