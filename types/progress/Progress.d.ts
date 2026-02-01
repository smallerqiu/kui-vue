import Vue, { VueConstructor } from "vue";

/** Progress component props */
export interface ProgressProps {
  /** default: 0 */
  percent?: number;
  /** default: 6 */
  strokeWidth?: number;
  color?: string;
  format?: (...args: any[]) => any;
  width?: number;
  strokeHeight?: number;
  /** default: 75 */
  gapDegree?: number;
  strokeColor?: Record<string, any>;
  /** default: round */
  strokeLinecap?: string;
  /** default: default */
  size?: string;
  /** default: normal */
  status?: string;
  /** default: line */
  type?: string;
  /** default: true */
  showInfo?: boolean;
}

/** Progress component instance */
export interface Progress extends Vue {
  $props: ProgressProps;
  $emit(event: string, ...args: any[]): this;
}

/** Progress Vue component type */
declare const Progress: VueConstructor<Progress>;

export default Progress;
