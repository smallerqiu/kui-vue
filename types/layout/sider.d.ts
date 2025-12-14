import Vue, { VueConstructor } from "vue";

/** sider component props */
export interface siderProps {
  suffixCls?: string;
}

/** sider component instance */
export interface sider extends Vue {
  $props: siderProps;
  $emit(event: string, ...args: any[]): void;
}

/** sider Vue component type */
declare const sider: VueConstructor<sider>;

export default sider;
