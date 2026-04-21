<template>
  <div>
    <h3>Icons Filter</h3>
    <br />
    <Affix :offset-top="65">
      <Flex size="large" style="background-color: var(--kui-color-bg)">
        <RadioGroup v-model="type" theme="card" type="button" size="large" @change="switchIcon">
          <RadioButton value="outline">Outline</RadioButton>
          <RadioButton value="filled">Solid</RadioButton>
        </RadioGroup>
        <Space compact size="large" block>
          <Input
            v-model="searchKey"
            placeholder="Enter keyword to search for icons, then click on the icon to copy it."
            :icon="LogoKui"
            clearable
            @update:modelValue="filter"
          />
          <Button :icon="icons['Search']" />
        </Space>
      </Flex>
    </Affix>

    <br />
    <br />
    <div class="show-icons">
      <template v-if="showIcons.length">
        <div class="icon-head">
          <h3><span>App icons</span></h3>
        </div>
        <br />
        <Grid class="icon-list" :itemMinWidth="130">
          <GridItem
            v-for="(x, y) in showIcons"
            :key="y"
            class="icon-item"
            @click.stop="copyHandle(x)"
          >
            <Icon :type="icons[x]" />
            <!-- <svg width="1em" height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
          </GridItem>
        </Grid>
      </template>
      <template v-if="logo.length">
        <h3>Logos</h3>
        <Grid class="icon-list" :itemMinWidth="130">
          <GridItem v-for="(x, y) in logo" :key="y" class="icon-item" @click.stop="copyHandle(x)">
            <Icon :type="icons[x]" />
            <!-- <svg width="1em"
              height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
          </GridItem>
        </Grid>
      </template>
      <h3
        v-if="!showIcons.length && !logo.length"
        style="text-align: center; padding-bottom: 50px; color: #888"
      >
        No results for "{{ searchKey }}"
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import * as icons from "kui-icons";
import { message } from "kui-vue";
import { ref } from "vue";
// import sprite from 'kui-icons/dist/sprite.svg'
const { copy } = useClipboard();

const LogoKui = icons.LogoKui;

const iconKeys = Object.keys(icons);

let logos = iconKeys.filter((x) => /Logo/.test(x));
let outlines = iconKeys
  .filter((x) => (/Outline/.test(x) || !iconKeys.includes(x + "Outline")) && !/Logo/.test(x))
  .sort();

let filledIcons = iconKeys.filter((x) => !/Logo|Outline/.test(x)).sort();

const searchKey = ref("");
const type = ref("filled");
const logo = ref(logos || []);
const showIcons = ref(filledIcons || []);

const switchIcon = () => {
  filter(searchKey.value);
};

const filter = (key: string) => {
  key = key.replace(/ /g, "");
  let origin = type.value == "outline" ? outlines : filledIcons;
  if (key) {
    key = key.toLowerCase();
    showIcons.value = origin.filter((x) => {
      return x.replace("Outline", "").toLowerCase().indexOf(key) >= 0;
    });
    logo.value = logos.filter((x) => {
      return x.toLowerCase().indexOf(key) >= 0;
    });
  } else {
    showIcons.value = origin;
    logo.value = logos;
  }
};
const copyHandle = (name: string) => {
  // let text = `<Icon type="${name}" />`
  copy(name).then(() => {
    message.success("代码复制成功！");
  });
};
</script>
<style lang="less">
.icon-list {
  // overflow: hidden;
  // display: inline-block;

  .icon-item {
    text-align: center;
    height: 80px;
    color: var(--kui-color-font);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid var(--kui-color-border);
    margin: 0 -1px -1px 0;

    &:hover {
      color: #3a95ff;
      animation: flashing 2s ease-in-out infinite; /* 添加漂浮动画 */
      .k-icon {
        animation: float 2s ease-in-out infinite; /* 添加漂浮动画 */
      }
    }
  }

  .item-text {
    font-size: 12px;
    line-height: 1;
    padding: 10px 0;
  }
}

@keyframes flashing {
  0% {
    box-shadow: inset 0 0 15px 0px rgba(58, 149, 255, 0.1);
  }
  50% {
    box-shadow: inset 0 0 15px 5px rgba(58, 149, 255, 0.1);
  }
  100% {
    box-shadow: inset 0 0 15px 0px rgba(58, 149, 255, 0.1);
  }
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
