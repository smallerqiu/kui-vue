import Vue, { VueConstructor } from "vue";

/** paint component props */
export interface paintProps {
  hue?: number;
  value?: string | Record<string, any>;
}

/** paint component instance */
export interface paint extends Vue {
  $props: paintProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** paint Vue component type */
declare const paint: VueConstructor<paint>;

export default paint;
