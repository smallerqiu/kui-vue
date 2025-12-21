import Basic from "./basic.md";
import Info from "./info.md";
import Disabled from "./disabled.md";
import Group from "./group.md";
import GroupLayout from "./group-layout.md";
import RadioButton from './radioButton.md'
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-radio">
        <Info />
        <Basic />
        <Group />
        <GroupLayout />
        <Disabled />
        <RadioButton />
        <CN />
      </div>
    );
  },
};
