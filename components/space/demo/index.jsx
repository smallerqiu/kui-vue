import Info from "./info.md";
import Basic from "./basic.md";
import Vertical from "./vertical.md";
import Align from "./align.md";
import Size from "./size.md";
import CustomSize from "./custom-size.md";
import Warp from "./wrap.md";
import Split from "./split.md";
import Compact from "./compact.md";
import CompactButton from "./compact-button.md";
import CompactButtonVertical from "./compact-button-vertical.md";

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
