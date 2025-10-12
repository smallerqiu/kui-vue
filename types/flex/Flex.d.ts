import Vue from "vue";

/** Flex component props */
export interface FlexProps {
  align?: string;
  justify?: string;
  vertical?: boolean;
  wrap?: boolean;
  size?: string | number | any[];
}

declare class Flex extends Vue {
  $props: FlexProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Flex;
