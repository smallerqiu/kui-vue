import Info from "./info.md";
import Basic from "./basic.md";
import Placement from "./placement.md";
import Color from "./color.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-tooltip">
        <Info />
        <Basic />
        <Placement />
        <Color />
        <CN />
      </div>
    );
  },
};
