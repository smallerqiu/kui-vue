import Vue, { VueConstructor } from "vue";

/** Collapse component props */
export interface CollapseProps {
  activeKey?: any[];
  accordion?: boolean;
  sample?: boolean;
}

/** Collapse component instance */
export interface Collapse extends Vue {
  $props: CollapseProps;
  $emit(event: string, ...args: any[]): void;
}

/** Collapse Vue component type */
declare const Collapse: VueConstructor<Collapse>;

export default Collapse;
