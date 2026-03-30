import type { IconType } from "../icon";

export type TabKey = string | number | null | undefined;

export interface TabsPaneLike {
  key: TabKey;
  props?: {
    icon?: IconType[];
    title?: string;
    closable?: boolean;
    disabled?: boolean;
    [key: string]: any;
  };
}

export interface TabClickPayload {
  disabled?: boolean;
  key: TabKey;
}
