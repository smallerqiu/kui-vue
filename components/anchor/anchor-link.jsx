import { defineComponent, inject, onBeforeUnmount, onMounted } from "vue";


const AnchorLink = defineComponent({
  name: "AnchorLink",
  props: {
    href: { type: String, required: true },
    title: String,
  },
  setup(props, { slots }) {
    const kAnchor = inject("kAnchor");

    onMounted(() => {
      kAnchor?.registerLink(props.href);
    });

    onBeforeUnmount(() => {
      kAnchor?.unregisterLink(props.href);
    });

    const handleClick = (e) => {
      e.preventDefault();
      kAnchor?.handleScrollTo(props.href);
    };

    return () => {
      const active = kAnchor?.activeLink.value === props.href;
      return (
        <div class={["k-anchor-link", { "k-anchor-link-active": active }]}>
          <a 
            href={props.href} 
            class="k-anchor-link-title" 
            title={props.title} 
            onClick={handleClick}
          >
            {slots.title ? slots.title() : props.title}
          </a>
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default AnchorLink;