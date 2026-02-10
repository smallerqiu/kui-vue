import Info from "./info.md";
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
export default {
  render() {
    return (
      <div>
        <Info />
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
        <CN />
      </div>
    );
  },
};
