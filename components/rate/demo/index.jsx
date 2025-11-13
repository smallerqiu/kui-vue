import Info from "./info.md";
import Base from './basic.md';
import Half from "./half.md";
import Tips from "./tips.md";
import Disabled from "./disabled.md";
import Clear from "./clear.md";
import Character from "./character.md";
import Custom from "./custom.md";

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-rate">
        <Info />
        <Base />
        <Half />
        <Tips />
        <Disabled />
        <Clear />
        <Character />
        <Custom />
        <CN />
      </div>
    );
  },
};