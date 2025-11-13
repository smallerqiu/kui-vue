import Info from "./info.md";
import Base from './basic.md';
import Theme from "./theme.md";
import Icon from "./icon.md";
import Suffix from "./suffix.md";
import Group from "./group.md";
import Clearable from "./clearable.md";
import Size from "./size.md";
import Event from "./event.md";
import TextArea from "./textarea.md";
import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-input">
        <Info />
        <Base />
        <Theme />
        <Icon />
        <Suffix />
        <Group />
        <Clearable />
        <Size />
        <Event />
        <TextArea />
        <CN />
      </div>
    );
  }
};