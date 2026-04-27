import { Card, Grid, GridItem, Icon } from "kui-vue";
import { defineComponent, inject } from "vue";
import { navData } from "../../menu";
export default defineComponent({
  setup() {
    const $t = inject<(key: string) => string>("$t", (key: string) => key);
    const locale = inject<Record<string, any>>("locale");
    const renderChildren = (children: any[]) => {
      return (
        <Grid itemMinWidth={200} xGap={16} yGap={16}>
          {children.map((item) => {
            return (
              <GridItem>
                <router-link to={`/${item.key == "guide" ? "guide" : "components"}/${item.name}`}>
                  <Card
                    bordered
                    title={`${item.sub} ${locale?.value.name != "en" ? item.title : ""}`}
                  >
                    <Icon type={item.icon} size={50} strokeWidth={1} class="icon-view" />
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
          {nav.map((item) => {
            return [<h2>{$t(item.title)}</h2>, renderChildren(item.children)];
          })}
        </div>
      );
    };
  },
});
