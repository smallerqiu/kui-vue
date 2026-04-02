import { defineComponent, inject, onBeforeUnmount, onMounted, type ExtractPropTypes } from "vue";
import type { AnchorContext } from "./anchor";

export const anchorLinkProps = {
  href: { type: String, required: true },
  title: String,
};

export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>;

const AnchorLink = defineComponent({
  name: "AnchorLink",
  props: anchorLinkProps,
  setup(props, { slots, attrs }) {
    const kAnchor = inject<AnchorContext | null>("kAnchor", null);

    onMounted(() => {
      kAnchor?.registerLink(props.href);
    });

    onBeforeUnmount(() => {
      kAnchor?.unregisterLink(props.href);
    });

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      kAnchor?.handleScrollTo(props.href);
    };

    return () => {
      const active = kAnchor?.activeLink.value === props.href;

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
});

export default AnchorLink;
