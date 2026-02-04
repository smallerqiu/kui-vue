import Basic from "./basic.md";
import Info from "./info.md";
import Disabled from "./disabled.md";
import Group from "./group.md";
import GroupLayout from "./group-layout.md";
import CheckAll from "./check-all.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-checkbox">
        <Info />
        <Basic />
        <Group />
        <GroupLayout />
        <Disabled />
        <CheckAll />
        <CN />
      </div>
    );
  },
};
