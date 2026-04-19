import type { PropType } from "vue";
import type { colors } from "./var";

export type PlacementsType =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "left-bottom"
  | "left-top"
  | "right"
  | "right-top"
  | "right-bottom";

export type DropPlacementsType =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

export type SizeType = "small" | "middle" | "large" | "default";
export type ShapeType = "circle" | "square" | "round";
export type BooleanType = PropType<boolean | undefined>;

export type ButtonType = "primary" | "danger" | "warning" | "default" | "text" | "link";
export type ButtonTheme = "outline" | "solid" | "light" | "dashed" | "card";
export type ThemeType = "outline" | "light" | "default";

export type DirectionType = "horizontal" | "vertical" | "inline";
export type AlignType = "start" | "center" | "end";
export type ColorType = PropType<(typeof colors)[number]>;

export type UploadStatusType = "success" | "error" | "uploading" | "waiting";
