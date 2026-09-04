import type { VNode, VNodeChild } from "vue";

export interface StatNumberItem {
  key?: string | number;
  value: number;
  duration?: number;
  precision?: number;
  separator?: string;
  prefix?: string | VNode;
  suffix?: string | VNode;
  desc?: VNodeChild;
  trend?: VNodeChild;
  trendStatus?: "default" | "success" | "danger" | "warning";
  autoAnimate?: boolean;
  autoAnimateOnce?: boolean;
}
