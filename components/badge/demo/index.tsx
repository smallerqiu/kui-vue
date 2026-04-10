import Basic from "./basic.md";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Dot from "./dot.md";
import Max from "./max.md";
import Dynamic from "./dynamic.md";
import Mark from "./mark.md";
import Status from "./status.md";
import Color from "./color.md";
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
        <Dot />
        <Max />
        <Mark />
        <Dynamic />
        <Status />
        <Color />
        <this.API />
      </div>
    );
  },
};
