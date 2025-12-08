import Vue, { VueConstructor } from "vue";

/** mode component props */
export interface modeProps {
  value?: string | Record<string, any>;
  mode?: string;
  disabledAlpha?: boolean;
}

/** mode component instance */
export interface mode extends Vue {
  $props: modeProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** mode Vue component type */
declare const mode: VueConstructor<mode>;

export default mode;
