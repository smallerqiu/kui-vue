import { useClipboard } from "@vueuse/core";
import * as kuiIcons from "kui-icons";
import { Affix, Flex, Grid, GridItem, Icon, Input, message, Tag, type IconType } from "kui-vue";

import { defineComponent, ref } from "vue";
import "./search.less";
import { tags } from "./tags";

// 提取图标键名
const iconKeys = Object.keys(kuiIcons);
const logos = iconKeys.filter((x) => /Logo/.test(x));
const apps = iconKeys.filter((x) => !/Logo/.test(x));

export default defineComponent({
  name: "IconSearchDemo",
  setup() {
    const { copy } = useClipboard();
    const allIcons = ref<Record<string, IconType[]>>(kuiIcons);
    const appIcons = ref(apps);
    const logoIcons = ref(logos);
    const searchKey = ref("");

    const toPascalCase = (str: string = ""): string => {
      return str
        .split("-")
        .filter((word) => word.length > 0)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    };

    const searchIcons = (query: string) => {
      // const query = (e.target as HTMLInputElement).value;
      searchKey.value = query;
      const term = query.toLowerCase().trim();
      if (!term) {
        appIcons.value = apps;
        logoIcons.value = logos;
        return;
      }
      const resultTags: string[] = tags
        .filter((icon) => icon.name.includes(term) || icon.tags.some((tag) => tag.includes(term)))
        .map((x) => toPascalCase(x.name));
      appIcons.value = apps.filter((x) => resultTags.includes(x));
      logoIcons.value = logos.filter((x) => x.toLowerCase().includes(term));
    };

    const copyHandle = (name: string) => {
      copy(name).then(() => {
        message.success("代码复制成功！");
      });
    };

    return () => (
      <div>
        <h3>Icons Filter</h3>
        <Affix offsetTop={65}>
          <Flex size="large" style={{ backgroundColor: "var(--kui-color-bg)" }}>
            <Input
              modelValue={searchKey.value}
              placeholder="Enter keyword to search for icons, then click on the icon to copy it."
              clearable
              onUpdate:modelValue={searchIcons}
              prefix={(<Icon type={kuiIcons.Search} />) as any}
              suffix={(<Tag>⌘K</Tag>) as any}
            ></Input>
          </Flex>
        </Affix>

        <div class="show-icons">
          {appIcons.value.length > 0 && (
            <>
              <div class="icon-head">
                <h3>
                  <span>App icons</span>
                </h3>
              </div>
              <Grid class="icon-list" itemMinWidth={56} xGap={8} yGap={8}>
                {appIcons.value.map((x, y) => (
                  <GridItem key={y} class="icon-item" onClick={() => copyHandle(x)}>
                    <Icon type={allIcons.value[x]} strokeWidth={1} />
                    <span class="item-tip">{x}</span>
                  </GridItem>
                ))}
              </Grid>
            </>
          )}

          {logoIcons.value.length > 0 && (
            <>
              <h3>Logos</h3>
              <Grid class="icon-list" itemMinWidth={56} xGap={8} yGap={8}>
                {logoIcons.value.map((x, y) => (
                  <GridItem key={y} class="icon-item" onClick={() => copyHandle(x)}>
                    <Icon type={allIcons.value[x]} />
                    <span class="item-tip">{x}</span>
                  </GridItem>
                ))}
              </Grid>
            </>
          )}

          {!appIcons.value.length && !logoIcons.value.length && (
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
