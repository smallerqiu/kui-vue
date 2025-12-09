import Vue, { VueConstructor } from "vue";

/** DropdownButton component props */
export interface DropdownButtonProps {
  size?: string;
  shape?: string;
  disabled?: boolean;
  icon?: string | any[] | Record<string, any>;
  theme?: string;
  dark?: boolean;
  arrow?: boolean;
  /** default: bottom-right */
  placement?: string;
}

/** DropdownButton component instance */
export interface DropdownButton extends Vue {
  $props: DropdownButtonProps;
  $emit(event: string, ...args: any[]): void;
}

/** DropdownButton Vue component type */
declare const DropdownButton: VueConstructor<DropdownButton>;

export default DropdownButton;
