import Vue, { VueConstructor } from "vue";

/** ColorPicker component props */
export interface ColorPickerProps {
  value?: string;
  showMode?: boolean;
  disabled?: boolean;
  disabledAlpha?: boolean;
  showText?: boolean;
  /** default: click */
  trigger?: string;
  /** default: default */
  size?: any;
  /** default: hex */
  mode?: string;
  presets?: any[];
  /** default: bottom-left */
  placement?: any;
}

/** ColorPicker component instance */
export interface ColorPicker extends Vue {
  $props: ColorPickerProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** ColorPicker Vue component type */
declare const ColorPicker: VueConstructor<ColorPicker>;

export default ColorPicker;
