import Vue, { VueConstructor } from "vue";

/** TimeLine component props */
export interface TimeLineProps {
  /** default: left */
  mode?: string;
}

/** TimeLine component instance */
export interface TimeLine extends Vue {
  $props: TimeLineProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** TimeLine Vue component type */
declare const TimeLine: VueConstructor<TimeLine>;

export default TimeLine;
