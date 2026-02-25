import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Size from "./size.md";
import Icons from "./icon.md";
import Color from "./color.md";
import Dynamic from "./dynamic.md";
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
        <Size />
        <Icons />
        <Color />
        <Dynamic />
        <this.API />
      </div>
    );
  },
};
