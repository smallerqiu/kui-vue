import type { VNode } from "vue";
import type { IconType } from "../icon";

export interface MenuSelectEvent {
  key: string;
  keyPath: string[];
}

export interface MenuOptionsProps {
  icon?: IconType[];
  title?: string | VNode;
  key: string;
  disabled?: boolean;
  children?: MenuOptionsProps[];
  [key: string]: unknown;
}
