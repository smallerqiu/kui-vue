import Vue, { VueConstructor } from "vue";

/** hue component props */
export interface hueProps {
  hue?: number;
}

/** hue component instance */
export interface hue extends Vue {
  $props: hueProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** hue Vue component type */
declare const hue: VueConstructor<hue>;

export default hue;
