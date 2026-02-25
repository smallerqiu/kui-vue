import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Size from "./size.md";
import WithNumber from "./withNumber.md";
import Formatter from "./formatter.md";
import Marks from "./marks.md";
import Vertical from "./vertical.md";
import Reverse from "./reverse.md";

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
      <div class="demo-slider">
        <this.Info />
        <Basic />
        <Size />
        <WithNumber />
        <Formatter />
        <Marks />
        <Vertical />
        <Reverse />
        <this.API />
      </div>
    );
  },
};
