import Info from "./info.md";
import Basic from "./basic.md";
import Tips from "./tips.md";
import Character from "./character.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-rate">
        <Info />
        <Basic />
        <Tips />
        <Character />
        <CN />
      </div>
    );
  },
};
