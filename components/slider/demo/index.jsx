import Info from "./info.md";
import Basic from './basic.md';
import Size from "./size.md";
import WithNumber from "./withNumber.md";
import Formatter from "./formatter.md";
import Marks from "./marks.md";
import Vertical from "./vertical.md";
import Reverse from "./reverse.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-slider">
        <Info />
        <Basic />
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
