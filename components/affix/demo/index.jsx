import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Callbacks from "./callbacks.md";
import Container from "./container.md";
import Bottom from "./bottom.md";
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
      <div>
        <this.Info />
        <Basic />
        <Callbacks />
        <Container />
        <this.API />
        <div style="height:500px;text-align:center;color:#ddd;line-height:500px;">
          ...
        </div>
        <Bottom />
      </div>
    );
  },
};
