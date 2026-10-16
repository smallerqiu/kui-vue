import type { DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import type { IconType } from "../icon";

export type CheckCardValue = string | number;

export interface CheckCardOption {
  value: CheckCardValue;
  title: string;
  description?: string;
  disabled?: boolean;
  readonly?: boolean;
  symbol?: IconType[];
  checkedSymbol?: IconType[];
}

export interface CheckCardChangeEvent {
  checked: boolean;
  value?: CheckCardValue;
}

export interface CheckCardAppearance {
  // The shared six-tier type, not a private pair: a check card paints a whole box, so it is a surface
  // component like Card and Collapse, and those name their supported set at the emit point rather than
  // narrowing the type to what one stylesheet happened to draw.
  theme?: ThemeType;
  size?: SizeType;
  shape?: ShapeType;
  direction?: DirectionType;
}
