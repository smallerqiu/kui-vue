import Vue, { VueConstructor } from "vue";

/** Empty component props */
export interface EmptyProps {
  description?: string;
  image?: string;
  imageStyle?: Record<string, any>;
}

/** Empty component instance */
export interface Empty extends Vue {
  $props: EmptyProps;
  $emit(event: string, ...args: any[]): this;
}

/** Empty Vue component type */
declare const Empty: VueConstructor<Empty>;

export default Empty;
