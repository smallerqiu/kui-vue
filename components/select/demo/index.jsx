import Info from "./info.md";
import Basic from "./basic.md";
import Multiple from "./multiple.md";
import Disabled from "./disabled.md";
import Theme from "./theme.md";
import Size from "./size.md";
import Filterable from "./filterable.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-select">
        <Info />
        <Basic />
        <Multiple />
        <Disabled />
        <Filterable />
        <Size />
        <Theme />
        <CN />
      </div>
    );
  },
};
