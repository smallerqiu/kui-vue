import { useClipboard } from "@vueuse/core";
import * as icons from "kui-icons";
import { Affix, Button, Flex, Grid, GridItem, Icon, Input, message, Space } from "kui-vue";

import { defineComponent, ref, watch } from "vue";
import "./search.less";

// 提取图标键名
const iconKeys = Object.keys(icons);
const logos = iconKeys.filter((x) => /Logo/.test(x));
const outlines = iconKeys
  .filter((x) => (/Outline/.test(x) || !iconKeys.includes(x + "Outline")) && !/Logo/.test(x))
  .sort();
const filledIcons = iconKeys.filter((x) => !/Logo|Outline/.test(x)).sort();

export default defineComponent({
  name: "IconSearchDemo",
  setup() {
    const { copy } = useClipboard();
    const LogoKui = icons.LogoKui;

    const searchKey = ref("");
    const type = ref<"outline" | "filled">("filled");
    const logo = ref(logos);
    const showIcons = ref(filledIcons);

    const filter = (key: string) => {
      key = key.replace(/ /g, "").toLowerCase();
      const origin = type.value === "outline" ? outlines : filledIcons;
      if (key) {
        showIcons.value = origin.filter((x) =>
          x.replace("Outline", "").toLowerCase().includes(key)
        );
        logo.value = logos.filter((x) => x.toLowerCase().includes(key));
      } else {
        showIcons.value = origin;
        logo.value = logos;
      }
    };

    const switchIcon = () => {
      filter(searchKey.value);
    };

    const copyHandle = (name: string) => {
      copy(name).then(() => {
        message.success("代码复制成功！");
      });
    };

    // 监听 searchKey 变化以触发过滤
    watch(searchKey, (newVal) => {
      filter(newVal);
    });

    return () => (
      <div>
        <h3>Icons Filter</h3>
        <Affix offsetTop={65}>
          <Flex size="large" style={{ backgroundColor: "var(--kui-color-bg)" }}>
            <Space compact size="large" block>
              <Input
                modelValue={searchKey.value}
                onUpdate:modelValue={(val: string) => (searchKey.value = val)}
                placeholder="Enter keyword to search for icons, then click on the icon to copy it."
                icon={LogoKui}
                clearable
              />
              <Button icon={icons.Search} />
            </Space>
          </Flex>
        </Affix>

        <div class="show-icons">
          {showIcons.value.length > 0 && (
            <>
              <div class="icon-head">
                <h3>
                  <span>App icons</span>
                </h3>
              </div>
              <Grid class="icon-list" itemMinWidth={56} xGap={8} yGap={8}>
                {showIcons.value.map((x, y) => (
                  <GridItem key={y} class="icon-item" onClick={() => copyHandle(x)}>
                    <Icon type={icons[x]} />
                  </GridItem>
                ))}
              </Grid>
            </>
          )}

          {logo.value.length > 0 && (
            <>
              <h3>Logos</h3>
              <Grid class="icon-list" itemMinWidth={56} xGap={8} yGap={8}>
                {logo.value.map((x, y) => (
                  <GridItem key={y} class="icon-item" onClick={() => copyHandle(x)}>
                    <Icon type={icons[x]} />
                  </GridItem>
                ))}
              </Grid>
            </>
          )}

          {!showIcons.value.length && !logo.value.length && (
            <h3
              style={{
                textAlign: "center",
                paddingBottom: "50px",
                color: "#888",
              }}
            >
              No results for "{searchKey.value}"
            </h3>
          )}
        </div>
      </div>
    );
  },
});
