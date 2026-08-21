import { ArrowRight, Code, Layers, LogoGithub, Palette, Zap } from "kui-icons";
import {
  Badge,
  Button,
  FeatureCard,
  Icon,
  Layout,
  Progress,
  Ripple,
  StatCard,
  Switch,
  Tag,
} from "kui-vue";
import { defineComponent, inject } from "vue";
import "../assets/css/home.less";
import AppFooter from "../components/app-footer.vue";
import AppHeader from "../components/app-header.vue";

export default defineComponent({
  setup() {
    const $t = inject<(key: string) => string>("$t", (key: string) => key);
    const features: Array<[typeof Zap, string, string]> = [
      [Zap, "feature_fast", "feature_fast_desc"],
      [Code, "feature_types", "feature_types_desc"],
      [Palette, "feature_theme", "feature_theme_desc"],
    ];
    return () => {
      return (
        <Ripple>
          <Layout class="index">
            <AppHeader />
            <main class="index-main">
              <section class="index-hero">
                <div class="hero-copy">
                  <Badge pill status="success" text={$t("index.badge")} />
                  <h1>
                    Kui Vue
                    <span>{$t("index.title_suffix")}</span>
                  </h1>
                  <p class="desc">{$t("index.desc")}</p>
                  <div class="btn-content">
                    <Button class="start" type="link" size="large" href="/guide/quick-started">
                      {$t("index.btn_quick_start")}
                      <Icon type={ArrowRight} />
                    </Button>
                    <Button
                      size="large"
                      class="btn-github"
                      type="link"
                      href="https://github.com/smallerqiu/kui-vue"
                      target="_blank"
                    >
                      <Icon type={LogoGithub} />
                      GitHub
                    </Button>
                  </div>
                  <div class="hero-meta">
                    <span>Vue 3</span>
                    <i />
                    <span>TypeScript</span>
                    <i />
                    <span>70+ Components</span>
                  </div>
                </div>

                <div class="hero-preview" aria-hidden="true">
                  <div class="preview-window">
                    <div class="preview-bar">
                      <div class="preview-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>Dashboard</span>
                      <Tag color="green">Online</Tag>
                    </div>
                    <div class="preview-body">
                      <div class="preview-sidebar">
                        <strong>K</strong>
                        {[0, 1, 2, 3].map((item) => (
                          <i class={{ active: item === 0 }} />
                        ))}
                      </div>
                      <div class="preview-content">
                        <div class="preview-heading">
                          <div>
                            <strong>{$t("index.preview_title")}</strong>
                            <span>{$t("index.preview_desc")}</span>
                          </div>
                          <Button type="primary" size="small">
                            + New
                          </Button>
                        </div>
                        <div class="preview-stats">
                          <StatCard
                            bordered
                            reverse
                            items={[
                              {
                                value: 12840,
                                separator: ",",
                                desc: "Requests",
                                trend: "+18.2%",
                                trendStatus: "success",
                                autoAnimate: false,
                              },
                            ]}
                          />
                          <StatCard
                            bordered
                            reverse
                            items={[
                              {
                                value: 98.6,
                                precision: 1,
                                suffix: "%",
                                desc: "Success rate",
                                trend: "Stable",
                                trendStatus: "success",
                                autoAnimate: false,
                              },
                            ]}
                          />
                        </div>
                        <div class="preview-panel">
                          <div class="preview-panel-head">
                            <strong>Usage</strong>
                            <Switch size="small" modelValue />
                          </div>
                          <Progress percent={72} showInfo={false} />
                          <Progress percent={48} showInfo={false} />
                          <Progress percent={86} showInfo={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="index-features">
                {features.map(([icon, title, desc]) => (
                  <FeatureCard
                    bordered={true}
                    icon={icon}
                    title={$t(`index.${title}`)}
                    desc={$t(`index.${desc}`)}
                  />
                ))}
              </section>

              <section class="index-explore">
                <div class="explore-title">
                  <div>
                    <span>{$t("index.explore_eyebrow")}</span>
                    <h2>{$t("index.explore_title")}</h2>
                  </div>
                  <a href="/components/button">
                    {$t("index.explore_all")} <Icon type={ArrowRight} />
                  </a>
                </div>
                <div class="component-links">
                  {["Button", "Form", "Table", "Select", "Modal", "DatePicker"].map((name) => (
                    <a
                      href={`/components/${name === "DatePicker" ? "date-picker" : name.toLowerCase()}`}
                    >
                      <Icon type={Layers} />
                      <span>{name}</span>
                      <Icon type={ArrowRight} />
                    </a>
                  ))}
                </div>
              </section>
            </main>
            <AppFooter />
          </Layout>
        </Ripple>
      );
    };
  },
});
