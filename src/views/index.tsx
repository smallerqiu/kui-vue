import { ArrowForward } from "kui-icons";
import { defineComponent, inject } from "vue";
import "../assets/css/home.less";
import AppFooter from "../components/app-footer.vue";
import AppHeader from "../components/app-header.vue";

export default defineComponent({
  setup() {
    const $t = inject<(key: string) => string>("$t", (key: string) => key);
    return () => {
      return (
        <Layout class="index">
          <AppHeader />
          <section class="index-content">
            <h1>Kui Vue</h1>
            <p class="desc">{$t("index.desc")}</p>
            <div class="btn-content">
              <Button class="start" type="link" size="large" href="/guide/quick-started">
                {$t("index.btn_quick_start")}
                <Icon type={ArrowForward} />
              </Button>
              <Button size="large" class="btn-install" type="link" href="/guide/quick-started">
                Install Kui Vue
              </Button>
            </div>
          </section>
          <AppFooter />
        </Layout>
      );
    };
  },
});
