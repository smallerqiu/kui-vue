import Vue, { VueConstructor } from "vue";

/** presets component props */
export interface presetsProps {
  color?: string | Record<string, any>;
  /** default: undefined */
  value?: any[];
}

/** presets component instance */
export interface presets extends Vue {
  $props: presetsProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** presets Vue component type */
declare const presets: VueConstructor<presets>;

export default presets;
