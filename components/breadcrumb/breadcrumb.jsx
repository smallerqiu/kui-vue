import { defineComponent } from "vue";
export default defineComponent({
  name: "Breadcrumb",
  setup(ps, { slots }) {
    return <div class="k-breadcrumb">{slots.default?.()}</div>;
  },
});
