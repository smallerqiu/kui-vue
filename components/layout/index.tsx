import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  type ExtractPropTypes,
  type InjectionKey
} from "vue";
import type { TypeBoolean } from "../const/var";

const SiderHookKey: InjectionKey<(mounted: boolean) => void> = Symbol('SiderHookKey');

export const layoutProps = {
  suffixCls: { type: String, default: 'layout' },
  hasSider: { type: Boolean as TypeBoolean, default: undefined } // 允许手动指定是否有 Sider
};

export const siderProps = {
  suffixCls: { type: String, default: 'layout-sider' },
  width: { type: [Number, String], default: 200 },
  collapsedWidth: { type: [Number, String], default: 80 },
  collapsible: Boolean as TypeBoolean,
  collapsed: Boolean as TypeBoolean,
};

export type LayoutProps = ExtractPropTypes<typeof layoutProps>;
export type SiderProps = ExtractPropTypes<typeof siderProps>;

function createBasicComponent(suffixCls: string, name: string) {
  return defineComponent({
    name,
    props: { suffixCls: { type: String, default: suffixCls } },
    setup(props, { slots }) {
      return () => (
        <section class={`k-${props.suffixCls}`}>
          {slots.default?.()}
        </section>
      );
    },
  });
}


const LayoutMain = defineComponent({
  name: "Layout",
  props: layoutProps,
  setup(props, { slots }) {
    const siders = ref<string[]>([]); // 存储 Sider 的内部唯一标识

    // 提供给子组件 Sider 调用的注册函数
    const collectSider = (mounted: boolean) => {
      mounted ? siders.value.push('sider') : siders.value.pop();
    };

    provide(SiderHookKey, collectSider);

    const classes = computed(() => [
      `k-${props.suffixCls}`,
      { 
        [`k-${props.suffixCls}-has-sider`]: props.hasSider ?? siders.value.length > 0 
      },
    ]);

    return () => (
      <section class={classes.value}>
        {slots.default?.()}
      </section>
    );
  },
});

const Sider = defineComponent({
  name: "LayoutSider",
  props: siderProps,
  setup(props, { slots }) {
    const collectSider = inject(SiderHookKey, null);

    onMounted(() => {
      collectSider?.(true);
    });

    onBeforeUnmount(() => {
      collectSider?.(false);
    });

    const divStyle = computed(() => ({
      flex: `0 0 ${props.width}px`,
      maxWidth: `${props.width}px`,
      minWidth: `${props.width}px`,
      width: `${props.width}px`,
    }));

    return () => (
      <aside class={`k-${props.suffixCls}`} style={divStyle.value}>
          {slots.default?.()}
      </aside>
    );
  },
});


const Content = createBasicComponent("layout-content", "LayoutContent");
const Header = createBasicComponent("layout-header", "LayoutHeader");
const Footer = createBasicComponent("layout-footer", "LayoutFooter");

type InternalLayoutType = typeof LayoutMain;
type LayoutType = InternalLayoutType & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
};

const Layout = LayoutMain as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

export { Content, Footer, Header, Layout, Sider };

