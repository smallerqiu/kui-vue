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
export type DrawerPlacementsType = "left" | "right" | "top" | "bottom";
export type DropPlacementsType =
  "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";

export type ValueType = "string" | "number" | "boolean";
export type SizeType = "small" | "medium" | "large";
export type ShapeType = "circle" | "square" | "round" | "default";
export type SurfaceShapeType = "square" | "round";
export type BooleanType = PropType<boolean | undefined>;

export type ButtonType = "primary" | "danger" | "warning" | "default" | "text" | "link";
export type ThemeType = "outline" | "fill" | "plain" | "solid" | "dashed" | "underlined";
/**
 * The five tiers a component that paints a *plate* actually draws: the surfaces (Card, Collapse,
 * Alert, Page, Kanban, Transfer, ListPanel, CheckCard, Image, QRCode, FeedbackPanel) plus Tag and
 * Button. `underlined` belongs to controls you type into, so a surface never accepts it and the
 * guard (`resolvePaintedTheme`) lands anything outside these five on the plate the component was
 * built to look like. `ThemeType` stays the wider vocabulary of `ConfigProvider` and `Form`.
 */
export type SurfaceThemeType = "fill" | "outline" | "plain" | "solid" | "dashed";
/** The two tiers a mark actually draws; anything else lands on `fill`. */
export type MarkThemeType = "fill" | "outline";

export type RadioType = "radio" | "button";
export type DirectionType = "horizontal" | "vertical" | "inline";
export type AlignType = "start" | "center" | "end";
export type ColorType = PropType<(typeof colors)[number] | string>;

export type UploadStatusType = "success" | "error" | "uploading" | "waiting";

export type SpinModeType = "bounce" | "flip" | "rotate" | "zoom";
export type TriggerType = "hover" | "click" | "contextmenu";

export type NoticeType = "info" | "success" | "warning" | "error" | "loading";
export type BadgeStatusType = "default" | "success" | "error" | "warning";
export type FeedbackPanelKind = "positive" | "negative" | "caution" | "neutral";
export type TimelineMode = "left" | "right" | "center" | "alternate";
export type ResultStatus = "success" | "error" | "info" | "warning" | "403" | "404" | "500";
export type ProgressStatus = "active" | "exception" | "success" | "normal";
export type ProgressStroke = "round" | "butt" | "square";
export type ProgressType = "line" | "circle" | "dashboard";
export type QRCodeStatus = "active" | "loading" | "expired" | "scanned";
export type QRCodeErrorLevel = "L" | "M" | "Q" | "H";
