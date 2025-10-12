import Vue from "vue";

/** presets component props */
export interface presetsProps {
  color?: string | Record<string, any>;
  /** default: undefined */
  value?: any[];
}

declare class presets extends Vue {
  $props: presetsProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default presets;
