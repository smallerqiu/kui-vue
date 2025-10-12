import Vue from "vue";

/** Card component props */
export interface CardProps {
  /** default: true */
  bordered?: boolean;
  title?: string;
  icon?: string | any[];
}

declare class Card extends Vue {
  $props: CardProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Card;
