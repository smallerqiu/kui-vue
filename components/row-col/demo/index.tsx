import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Gutter from "./gutter.md";
import Offset from "./offset.md";
import Align from "./align.md";
import Flex from "./flex.md";
import Fill from "./fill.md";
import CN from "../index.md";
import EN from "../index.en_US.md";
import { computed, inject } from "vue";
export default {
  setup() {
    const locale = inject("locale");
    const API = computed(() => {
      return locale.value.name === "zh-cn" ? CN : EN;
    });
    const Info = computed(() => {
      return locale.value.name === "zh-cn" ? InfoCn : InfoEn;
    });
    return { API, Info };
  },
  render() {
    return (
      <div class="demo-grid">
        <this.Info />
        <Basic />
        <Gutter />
        <Offset />
        <Align />
        <Flex />
        <Fill />
        <this.API />
      </div>
    );
  },
};
