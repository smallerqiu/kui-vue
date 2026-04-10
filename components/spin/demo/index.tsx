import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Container from "./container.md";
import Mode from "./mode.md";

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
      <div class="demo-spin">
        <this.Info />
        <Basic />
        <Container />
        <Mode />
        <this.API />
      </div>
    );
  },
};
