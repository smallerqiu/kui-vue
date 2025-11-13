import Info from "./info.md";
import Base from './basic.md';

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-loading">
        <Info />
        <Base />
        <CN />
      </div>
    );
  },
};