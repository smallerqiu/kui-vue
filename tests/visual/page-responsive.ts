import { createApp, h, ref } from "vue";
import Page from "../../components/page";
import "../../components/styles/index.less";
createApp({
  setup() {
    const changes = ref(0);
    const responsive = ref(true);
    return () =>
      h("div", [
        h(
          "button",
          { id: "responsive", onClick: () => (responsive.value = !responsive.value) },
          "Responsive",
        ),
        h("output", { id: "changes" }, String(changes.value)),
        h("div", { id: "container", style: "width:1000px;display:flex" }, [
          h(Page, {
            total: 10000,
            page: 50,
            responsive: responsive.value,
            showSizer: true,
            showElevator: true,
            onChange: () => changes.value++,
          }),
        ]),
      ]);
  },
}).mount("#app");
