import { defineComponent, ref, computed, provide, inject, onMounted, onBeforeUnmount } from "vue";

function createComponent(suffixCls, name) {
  return (Component) => {
    return defineComponent({
      name,
      setup(props, { slots }) {
        const prop = {
          suffixCls: suffixCls,
        };
        return () => <Component {...prop}>{slots.default?.()}</Component>;
      },
    });
  };
}

const Base = defineComponent({
  props: { suffixCls: String },
  setup(props, { slots }) {
    const prop = {
      class: `k-${props.suffixCls}`,
    };
    return () => <div {...prop}>{slots.default?.()}</div>;
  },
});

const layoutBase = defineComponent({
  props: { suffixCls: String },
  setup(props, { slots }) {
    const siders = ref(0);

    const collectSider = (ismount) => {
      ismount ? siders.value++ : siders.value--;
    };

    provide("collectSider", collectSider);

    const classes = computed(() => [`k-${props.suffixCls}`, { "k-layout-has-sider": siders.value > 0 }]);

    return () => <div class={classes.value}>{slots.default?.()}</div>;
  },
});

const siderBase = defineComponent({
  props: { suffixCls: String },
  setup(props, { slots }) {
    const collectSider = inject("collectSider", () => {});

    onMounted(() => {
      collectSider(true);
    });

    onBeforeUnmount(() => {
      collectSider();
    });

    const prop = {
      class: `k-${props.suffixCls}`,
    };

    return () => <div {...prop}>{slots.default?.()}</div>;
  },
});

const Content = createComponent("layout-content", "Content")(Base);
const Header = createComponent("layout-header", "Header")(Base);
const Footer = createComponent("layout-footer", "Footer")(Base);
const Layout = createComponent("layout", "Layout")(layoutBase);
const Sider = createComponent("layout-sider", "Sider")(siderBase);

Layout.Sider = Sider;
Layout.Content = Content;
Layout.Header = Header;
Layout.Footer = Footer;

export default Layout;
