import type { PropType } from "vue";

export const colors = [
  "default",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "volcano",
  "violet",
  "cyan",
  "gold",
  "lime",
  "magenta",
  "purple",
  "pink",
  "brown",
  "gray",
];

export type TypePlacements =
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

export type TypeDropPlacements =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

export type TypeSize = "small" | "middle" | "large" | "default";
export type TypeBoolean = PropType<boolean | undefined>;
// export const TypeBoolean = (value?: boolean) => {
//   return {
//     type: Boolean as PropType<boolean | undefined>,
//     default: value as boolean,
//   };
// };

export function functionType<T = () => {}>(defaultVal?: T) {
  return { type: Function as PropType<T>, default: defaultVal as T };
}
