export interface WatermarkFont {
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  fontFamily?: string;
  fontStyle?: "normal" | "italic" | "oblique";
}

export interface WatermarkTextItem extends WatermarkFont {
  text: string;
}

export type WatermarkLayoutType = "stagger" | "grid";
