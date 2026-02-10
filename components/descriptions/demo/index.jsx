import Basic from "./basic.md";
import Info from "./info.md";
import Bordered from "./bordered.md";
import Size from "./size.md";
import Vertical from "./vertical.md";
import VerticalBordered from "./verticalBordered.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-descriptions">
        <Info />
        <Basic />
        <Bordered />
        <Size />
        <Vertical />
        <VerticalBordered />
        <CN />
      </div>
    );
  },
};
