import Vue, { VueConstructor } from "vue";

/** Card component props */
export interface CardProps {
  /** default: true */
  bordered?: boolean;
  title?: string;
  icon?: string | any[];
}

/** Card component instance */
export interface Card extends Vue {
  $props: CardProps;
  $emit(event: string, ...args: any[]): this;
}

/** Card Vue component type */
declare const Card: VueConstructor<Card>;

export default Card;
