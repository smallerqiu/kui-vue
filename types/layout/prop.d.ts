import Vue, { VueConstructor } from "vue";

/** prop component props */
export interface propProps {
  suffixCls?: any;
}

/** prop component instance */
export interface prop extends Vue {
  $props: propProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** prop Vue component type */
declare const prop: VueConstructor<prop>;

export default prop;
