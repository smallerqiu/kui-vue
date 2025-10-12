import Vue from "vue";

/** hue component props */
export interface hueProps {
  hue?: number;
}

declare class hue extends Vue {
  $props: hueProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default hue;
