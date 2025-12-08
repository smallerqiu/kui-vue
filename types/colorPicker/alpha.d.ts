import Vue, { VueConstructor } from "vue";

/** alpha component props */
export interface alphaProps {
  value?: string | Record<string, any>;
}

/** alpha component instance */
export interface alpha extends Vue {
  $props: alphaProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** alpha Vue component type */
declare const alpha: VueConstructor<alpha>;

export default alpha;
