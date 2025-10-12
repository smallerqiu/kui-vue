import Vue from "vue";

/** show component props */
export interface showProps {
  disabled?: boolean;
  title?: string;
  icon?: any;
}

declare class show extends Vue {
  $props: showProps;
  $emit(event: string, ...args: any[]): this;
}

export default show;
