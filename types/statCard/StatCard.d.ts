import Vue, { VueConstructor } from "vue";

/** StatCard component props */
export interface StatCardProps {
  title?: string;
  /** default: 0 */
  precision?: number;
  /** default: undefined */
  items?: any[];
  separator?: string;
  statNumberType?: string;
  /** default: false */
  bordered?: boolean;
}

/** StatCard component instance */
export interface StatCard extends Vue {
  $props: StatCardProps;
  $emit(event: string, ...args: any[]): this;
}

/** StatCard Vue component type */
declare const StatCard: VueConstructor<StatCard>;

export default StatCard;
