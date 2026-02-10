import Info from "./info.md";
import Basic from "./basic.md";
import AutoFillMinWidth from "./autoFillMinWidth.md";
import BreakpointFallback from "./breakpointFallback.md";
import FixedRowsAreas from "./fixedRowsAreas.md";
import SuffixDisplayDone from "./suffixDisplayNone.md";
import Bento from "./bento.md";
import AlignWhiteSpace from "./alignWhiteSpace.md";
import HeroSection from "./heroSection.md";
import FooterStrategy from "./footerStrategy.md";
import Architecture from './architecture.md'

import CN from "../index.md";
export default {
  render() {
    return (
      <>
        <Info />
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
        <CN />
      </>
    );
  },
};
