import { defineComponent, inject, onBeforeUnmount, onMounted, type DefineComponent, type ExtractPropTypes } from "vue";
import type { AnchorContext } from "./anchor";

const anchorLinkProps = {
  href: { type: String, required: true },
  title: String,
};

export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>;

const AnchorLink = defineComponent({
  name: "AnchorLink",
  props: anchorLinkProps,
  setup(props, { slots, attrs }) {
    const anchorContext = inject<AnchorContext | null>("kAnchor", null);

    onMounted(() => {
      props.href && anchorContext?.registerLink(props.href);
    });

    onBeforeUnmount(() => {
      props.href && anchorContext?.unregisterLink(props.href);
    });

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      props.href && anchorContext?.handleScrollTo(props.href);
    };

    return () => {
      const active = anchorContext?.activeLink.value === props.href;

      const linkWrapperProps = {
        class: ["k-anchor-link", { "k-anchor-link-active": active }],
      };

      const linkProps = {
        ...attrs, // 透传 attrs
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
}) as DefineComponent<AnchorLinkProps>;

export default AnchorLink;
