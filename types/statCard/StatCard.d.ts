import Vue, { VueConstructor } from "vue";

/** StatCard component props */
export interface StatCardProps {
  title?: string;
  /** default: undefined */
  items?: any[];
  statNumberType?: string;
}

/** StatCard component instance */
export interface StatCard extends Vue {
  $props: StatCardProps;
  $emit(event: string, ...args: any[]): void;
}

/** StatCard Vue component type */
declare const StatCard: VueConstructor<StatCard>;

export default StatCard;
