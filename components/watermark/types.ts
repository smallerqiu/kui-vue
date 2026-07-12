export interface WatermarkTextItem {
  text: string;
  color?: string; // 独立控制当前行颜色
  fontSize?: number; // 独立控制当前行字号
  fontWeight?: string | number;
  fontStyle?: "normal" | "italic" | "oblique";
}
export interface WatermarkProps {
  // 水印文本内容，支持数组实现多行文本
  content?: string | string[] | WatermarkTextItem[];
  // 图片水印源（若传图片则文本失效，常用于企业 LOGO）
  image?: string;
  // 水印每个格子的宽度 & 高度
  width?: number;
  height?: number;
  // 旋转角度（角度制，如 -22）
  rotate?: number;
  // 水印层级
  zIndex?: number;
  // 是否开启全屏幕遮罩模式（通过 Teleport 直接平铺在 body 上）
  fullscreen?: boolean;
  // 是否开启严格防篡改模式（控制台删不掉、改不了）
  antiTamper?: boolean;
  // 文本高级样式
  font?: {
    color?: string;
    fontSize?: number;
    fontWeight?: string | number;
    fontFamily?: string;
    fontStyle?: "normal" | "italic" | "oblique";
  };
  // 网格间距 [水平间距, 垂直间距]
  gap?: [number, number];
  // 错位偏移 [x, y]，让行列之间交错显得更自然
  offset?: [number, number];
  layout?: "grid" | "stagger";
}
