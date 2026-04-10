import Basic from "./basic.md";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Bordered from "./bordered.md";
import Size from "./size.md";
import Vertical from "./vertical.md";
import VerticalBordered from "./verticalBordered.md";
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
      <div class="demo-descriptions">
        <this.Info />
        <Basic />
        <Bordered />
        <Size />
        <Vertical />
        <VerticalBordered />
        <this.API />
      </div>
    );
  },
};
