import type { App } from "vue";
import Demo from "./demo";
import "./demo.less";
import "./github-markdown.css";
import "./highlight-atom-one-light.css";
// import Text from "./text";

const DemoComponents = {
  install: (app: App) => {
    app.component("Demo", Demo);
    // app.component("Text", Text);
  },
};

export default DemoComponents;
