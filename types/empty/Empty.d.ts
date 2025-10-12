import Vue from "vue";

/** Empty component props */
export interface EmptyProps {
  description?: string;
  image?: string;
  imageStyle?: Record<string, any>;
}

declare class Empty extends Vue {
  $props: EmptyProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Empty;
