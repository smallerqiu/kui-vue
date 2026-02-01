import Info from "./info.md";
import Basic from "./basic.md";
import Errors from "./errors.md";
import Group from "./group.md";
import Extra from "./extra.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-image">
        <Info />
        <Basic />
        <Errors />
        <Group />
        <Extra />
        <CN />
      </div>
    );
  },
};
