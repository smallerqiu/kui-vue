import Info from "./info.md";
import Basic from "./basic.md";
import Circle from "./circle.md";
import Dynamic from "./dynamic.md";
import Dashboard from "./dashboard.md";
import Color from "./color.md";
import Size from "./size.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-progress">
        <Info />
        <Basic />
        <Circle />
        <Dashboard />
        <Dynamic />
        <Color />
        <Size />
        <CN />
      </div>
    );
  },
};
