import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Vertical from "./vertical.md";
import Align from "./align.md";
import Size from "./size.md";
import CustomSize from "./customSize.md";
import Warp from "./wrap.md";
import Split from "./split.md";
import Compact from "./compact.md";
import CompactButton from "./compactButton.md";
import CompactButtonVertical from "./compactVertical.md";

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
        <Vertical />
        <Size />
        <Align />
        <CustomSize />
        <Warp />
        <Split />
        <Compact />
        <CompactButton />
        <CompactButtonVertical />
        <this.API />
      </div>
    );
  },
};
