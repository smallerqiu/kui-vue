import type { DirectionType, ShapeType, SizeType } from "../const/types";
import type { IconType } from "../icon";

export type CheckCardValue = string | number;
export type CheckCardTheme = "outline" | "fill";

export interface CheckCardOption {
  value: CheckCardValue;
  title: string;
  description?: string;
  disabled?: boolean;
  symbol?: IconType[];
  checkedSymbol?: IconType[];
}

export interface CheckCardChangeEvent {
  checked: boolean;
  value?: CheckCardValue;
}

export interface CheckCardAppearance {
  theme?: CheckCardTheme;
  size?: SizeType;
  shape?: ShapeType;
  direction?: DirectionType;
}
