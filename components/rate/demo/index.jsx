import Info from "./info.md";
import Basic from './basic.md';
import Half from "./half.md";
import Tips from "./tips.md";
import Disabled from "./disabled.md";
import Clear from "./clear.md";
import Character from "./character.md";
import Custom from "./custom.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-rate">
        <Info />
        <Basic />
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
