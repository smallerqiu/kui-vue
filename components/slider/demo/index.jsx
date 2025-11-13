import Info from "./info.md";
import Base from './basic.md';
import Size from "./size.md";
import WithNumber from "./withNumber.md";
import Formatter from "./formatter.md";
import Marks from "./marks.md";
import Vertical from "./vertical.md";
import Reverse from "./reverse.md";

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-slider">
        <Info />
        <Base />
        <Size />
        <WithNumber />
        <Formatter />
        <Marks />
        <Vertical />
        <Reverse />
        <CN />
      </div>
    );
  },
};