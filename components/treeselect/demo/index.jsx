import Info from "./info.md";
import Basic from "./basic.md";
import Multiple from "./multiple.md";
import Checkable from "./checkable.md";
import Disabled from "./disabled.md";
import Async from "./sync.md";
import Size from "./size.md";
import Theme from "./theme.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <Multiple />
        <Checkable />
        <Disabled />
        <Async />
        <Size />
        <Theme />
        <CN />
      </div>
    );
  },
};
