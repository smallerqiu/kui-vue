import Info from "./info.md";
import Basic from './basic.md';
import Container from "./container.md";
import Mode from "./mode.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-spin">
        <Info />
        <Basic />
        <Container />
        <Mode />
        <CN />
      </div>
    );
  },
}