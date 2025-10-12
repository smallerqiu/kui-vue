import Vue from "vue";

/** CarouselItem component props */
export interface CarouselItemProps {}

declare class CarouselItem extends Vue {
  $props: CarouselItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default CarouselItem;
