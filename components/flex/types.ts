import type { SizeType } from "../const/types";

export type FlexSizeType = SizeType | number | (string | number)[];
export type FlexAlignType = "start" | "flex-start" | "end" | "flex-end" | "center" | "baseline";
export type FlexJustifyType =
  "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
