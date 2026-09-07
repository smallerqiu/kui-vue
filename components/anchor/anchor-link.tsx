import {
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  watch,
  type ExtractPropTypes,
} from "vue";
import { anchorContextKey } from "./context";

const anchorLinkProps = {
  href: { type: String, required: true },
  title: String,
};

export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>;

const AnchorLink = defineComponent({
  name: "AnchorLink",
  props: anchorLinkProps,
  setup(props, { slots, attrs }) {
    const anchorContext = inject(anchorContextKey, null);

    onMounted(() => {
      if (props.href) anchorContext?.registerLink(props.href);
    });

    onBeforeUnmount(() => {
      if (props.href) anchorContext?.unregisterLink(props.href);
    });

    watch(
      () => props.href,
      (href, previousHref) => {
        if (previousHref) anchorContext?.unregisterLink(previousHref);
        if (href) anchorContext?.registerLink(href);
      },
    );

    const handleClick = (e: MouseEvent) => {
      const listeners = Array.isArray(attrs.onClick) ? attrs.onClick : [attrs.onClick];
      listeners.forEach((listener) => {
        if (typeof listener === "function") listener(e);
      });
      if (e.defaultPrevented) return;
      e.preventDefault();
      if (props.href) anchorContext?.handleScrollTo(props.href);
    };

    return () => {
      const active = anchorContext?.activeLink.value === props.href;

      const linkWrapperProps = {
        class: ["k-anchor-link", { "k-anchor-link-active": active }],
      };

      const linkProps = {
        ...attrs,
        href: props.href,
        class: "k-anchor-link-title",
        title: props.title,
        onClick: handleClick,
      };

      return (
        <div {...linkWrapperProps}>
          <a {...linkProps}>{slots.title ? slots.title() : props.title}</a>
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default AnchorLink;
