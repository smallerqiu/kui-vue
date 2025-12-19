import Vue, { VueConstructor } from "vue";

/** Flex component props */
export interface FlexProps {
  align?: string;
  justify?: string;
  vertical?: boolean;
  wrap?: boolean;
  size?: string | number | any[];
}

/** Flex component instance */
export interface Flex extends Vue {
  $props: FlexProps;
  $emit(event: string, ...args: any[]): void;
}

/** Flex Vue component type */
declare const Flex: VueConstructor<Flex>;

export default Flex;
