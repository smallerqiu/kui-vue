import Info from "./info.md";
import Base from './basic.md';
import Align from "./align.md";
import Size from "./size.md";
import Wrap from "./wrap.md";

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-space">
        <Info />
        <Base />
        <Align />
        <Size />
        <Wrap />
        <CN />
      </div>
    );
  },
};