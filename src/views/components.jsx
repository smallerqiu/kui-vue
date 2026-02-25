import { navData } from "../menu";
import { Col, Row, Card } from "kui-vue";
import WebIcon from "@/src/components/WebIcon";
import { defineComponent, inject } from "vue";
export default defineComponent({
  setup() {
    const $t = inject("$t");
    const locale = inject("locale");
    const renderChildren = (children) => {
      return (
        <Grid itemMinWidth={200} xGap={16} yGap={16}>
          {children.map((item, i) => {
            return (
              <GridItem>
                <router-link to={`/${item.key}/${item.name}`}>
                  <Card
                    bordered
                    title={`${item.sub} ${locale.value.name != "en" ? item.title : ""}`}
                  >
                    <WebIcon class="icon-view" name={item.icon} />
                  </Card>
                </router-link>
              </GridItem>
            );
          })}
        </Grid>
      );
    };
    return () => {
      let nav = navData.filter((x) => x.key != "guide");
      return (
        <div class="all-components">
          <h1>{$t("text.components")}</h1>
          <p>
            <code>KUI</code> {$t("text.components_desc")}
          </p>
          {nav.map((item, x) => {
            return [<h2>{$t(item.title)}</h2>, renderChildren(item.children)];
          })}
        </div>
      );
    };
  },
});
