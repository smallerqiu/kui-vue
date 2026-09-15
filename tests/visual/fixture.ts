import { createApp } from "vue";
import kui from "../../components";
import "../../components/styles/index.less";
import Fixture from "./fixture.vue";

createApp(Fixture).use(kui).mount("#app");
