import { Card, Grid, GridItem, Icon } from "kui-vue";
import { defineComponent, inject, type Ref } from "vue";
import { navData, type NavItem } from "../../menu";
export default defineComponent({
  setup() {
    const $t = inject<(key: string) => string>("$t", (key: string) => key);
    const locale = inject<Ref<{ name?: string }>>("locale");
    const renderChildren = (children: Omit<NavItem, "key">[], groupKey: string) => {
      return (
        <Grid itemMinWidth={200} xGap={16} yGap={16}>
          {children.map((item) => {
            return (
              <GridItem>
                <router-link to={`/${groupKey == "guide" ? "guide" : "components"}/${item.name}`}>
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
      const nav = navData.filter((x) => x.key != "guide");
      return (
        <div class="all-components">
          {nav.map((item) => {
            return [<h2>{$t(item.title)}</h2>, renderChildren(item.children, item.key)];
          })}
        </div>
      );
    };
  },
});
