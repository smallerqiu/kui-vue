import Vue, { VueConstructor } from "vue";

/** Col component props */
export interface ColProps {
  span?: number;
  offset?: number;
  flex?: string | number;
}

/** Col component instance */
export interface Col extends Vue {
  $props: ColProps;
  $emit(event: string, ...args: any[]): this;
}

/** Col Vue component type */
declare const Col: VueConstructor<Col>;

export default Col;
