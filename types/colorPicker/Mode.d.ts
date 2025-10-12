import Vue from "vue";

/** mode component props */
export interface modeProps {
  value?: string | Record<string, any>;
  mode?: string;
  disabledAlpha?: boolean;
}

declare class mode extends Vue {
  $props: modeProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default mode;
