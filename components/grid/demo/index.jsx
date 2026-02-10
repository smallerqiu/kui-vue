import Info from "./info.md";
import Basic from "./basic.md";
import AutoFillMinWidth from "./auto-fill-min-width.md";
import BreakpointFallback from "./breakpoint-fallback.md";
import FixedRowsAreas from "./fixed-rows-areas.md";
import SuffixDisplayDone from "./suffix-display-none.md";
import Bento from "./bento.md";
import AlignWhiteSpace from "./align-white-space.md";
import HeroSection from "./hero-section.md";
import FooterStrategy from "./footer-strategy.md";
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
