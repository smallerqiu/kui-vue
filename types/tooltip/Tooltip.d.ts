import Vue, { VueConstructor } from "vue";

/** Tooltip component props */
export interface TooltipProps {
  show?: boolean;
  dark?: boolean;
  title?: string | number | Record<string, any> | any[];
  color?: string;
  disabled?: boolean;
  size?: string;
  width?: number | string;
  /** default: top */
  placement?: any;
  show?: boolean;
}

/** Tooltip component instance */
export interface Tooltip extends Vue {
  $props: TooltipProps;
  $emit(event: string, ...args: any[]): void;
}

/** Tooltip Vue component type */
declare const Tooltip: VueConstructor<Tooltip>;

export default Tooltip;
