import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import AutoFillMinWidth from "./autoFillMinWidth.md";
import BreakpointFallback from "./breakpointFallback.md";
import FixedRowsAreas from "./fixedRowsAreas.md";
import SuffixDisplayDone from "./suffixDisplayNone.md";
import Bento from "./bento.md";
import AlignWhiteSpace from "./alignWhiteSpace.md";
import HeroSection from "./heroSection.md";
import FooterStrategy from "./footerStrategy.md";
import Architecture from "./architecture.md";

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
        <AutoFillMinWidth />
        <BreakpointFallback />
        <FixedRowsAreas />
        <SuffixDisplayDone />
        <Bento />
        <AlignWhiteSpace />
        <HeroSection />
        <FooterStrategy />
        <Architecture />
        <this.API />
      </div>
    );
  },
};
