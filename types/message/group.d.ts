import Vue, { VueConstructor } from "vue";

/** group component props */
export interface groupProps {
  type?: string;
}

/** group component instance */
export interface group extends Vue {
  $props: groupProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** group Vue component type */
declare const group: VueConstructor<group>;

export default group;
