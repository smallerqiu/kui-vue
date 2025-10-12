import Vue from "vue";

/** TimeLine component props */
export interface TimeLineProps {
  /** default: left */
  mode?: string;
}

declare class TimeLine extends Vue {
  $props: TimeLineProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default TimeLine;
