import { defineComponent, provide } from "vue";
export default defineComponent({
  name: "Breadcrumb",
  props: {
    separator: { type: [String, Object], default: "/" },
  },
  setup(ps, { slots }) {
    provide("separator", slots.separator?.() || ps.separator);
    return () => {
      return (
        <nav class="k-breadcrumb">
          <ol>{slots.default?.()}</ol>
        </nav>
      );
    };
  },
});
