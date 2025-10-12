import Vue from "vue";

/** Space component props */
export interface SpaceProps {
  align?: string;
  vertical?: boolean;
  wrap?: boolean;
  block?: boolean;
  compact?: boolean;
  size?: string | number | any[];
}

declare class Space extends Vue {
  $props: SpaceProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Space;
