import Vue, { VueConstructor } from "vue";

/** Space component props */
export interface SpaceProps {
  align?: string;
  vertical?: boolean;
  wrap?: boolean;
  block?: boolean;
  compact?: boolean;
  size?: string | number | any[];
}

/** Space component instance */
export interface Space extends Vue {
  $props: SpaceProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Space Vue component type */
declare const Space: VueConstructor<Space>;

export default Space;
