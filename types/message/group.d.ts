import Vue from "vue";

/** group component props */
export interface groupProps {
  type?: string;
}

declare class group extends Vue {
  $props: groupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default group;
