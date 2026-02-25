import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Layout1 from "./layout1.md";
import Layout2 from "./layout2.md";
import Layout3 from "./layout3.md";
import Layout4 from "./layout4.md";
import Layout5 from "./layout5.md";
import { computed, inject } from "vue";
export default {
  setup() {
    const locale = inject("locale");
    const Info = computed(() => {
      return locale.value.name === "zh-cn" ? InfoCn : InfoEn;
    });
    return { Info };
  },
  render() {
    return (
      <div class="demo-layout">
        <this.Info />
        <Basic />
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 />
        <Layout5 />
      </div>
    );
  },
};
