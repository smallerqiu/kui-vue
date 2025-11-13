import Info from "./info.md";
import Base from './basic.md';
import Container from "./container.md";
import Mode from "./mode.md";

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-spin">
        <Info />
        <Base />
        <Container />
        <Mode />
        <CN />
      </div>
    );
  },
};