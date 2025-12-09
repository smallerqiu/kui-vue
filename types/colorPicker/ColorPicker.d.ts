import Vue, { VueConstructor } from "vue";

/** ColorPicker component props */
export interface ColorPickerProps {
  value?: string;
  /** default: true */
  transfer?: boolean;
  disabled?: boolean;
  disabledAlpha?: boolean;
  showText?: boolean;
  arrow?: boolean;
  /** default: bottom-left */
  placement?: any;
  /** default: click */
  trigger?: string;
  /** default: default */
  size?: any;
  /** default: hex */
  mode?: string;
  show?: boolean;
  presets?: any[];
}

/** ColorPicker component instance */
export interface ColorPicker extends Vue {
  $props: ColorPickerProps;
  $emit(event: string, ...args: any[]): void;
}

/** ColorPicker Vue component type */
declare const ColorPicker: VueConstructor<ColorPicker>;

export default ColorPicker;
