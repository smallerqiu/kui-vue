<template>
  <div>
    <h3>图标快速检索</h3>
    <br />
    <Affix :offsetTop="65">
      <Flex size="large" style="background-color: var(--kui-color-back);">
        <RadioGroup v-model:value="type" @change="switchIcon" theme="card" type="button">
          <RadioButton value="outline">线框风格</RadioButton>
          <RadioButton value="filled">实底风格</RadioButton>
        </RadioGroup>
        <Space compact size="large" block>
          <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" :icon="LogoKui" v-model:value="searchKey" clearable
            style="background:var(--kui-color-back);">
          </Input>
          <Button :icon="icons['Search']" theme="outline"></Button>
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
        <div class="icon-list">
          <span @click.stop="copyHandle(x)" v-for="(x, y) in showIcons" :key="y" class="icon-item">
            <Icon :type="icons[x]" />
            <!-- <svg width="1em" height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
            <span class="item-text">{{ x }}</span>
          </span>
        </div>
      </template>
      <template v-if="logo.length">
        <h3>Logos</h3>
        <div class="icon-list">
          <span @click.stop="copyHandle(x)" v-for="(x, y) in logo" :key="y" class="icon-item">
            <Icon :type="icons[x]" />
            <!-- <svg width="1em"
              height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
            <span class="item-text">{{ x }}</span>
          </span>
        </div>
      </template>
      <h3 v-if="!showIcons.length && !logo.length" style="text-align:center;padding-bottom:50px;color:#888;">
        No results for "{{ searchKey }}"
      </h3>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { message } from "kui-vue";
import { useClipboard } from "@vueuse/core";
import * as icons from 'kui-icons'
// import sprite from 'kui-icons/lib/sprite.svg'
// import icons from '../lib/kui-icons'
// import sprite from '../lib/sprite.svg'
const { copy, isSupported } = useClipboard();

const LogoKui = icons.LogoKui;

const iconKeys = Object.keys(icons);
let logos = iconKeys.filter(x => /Logo/.test(x));
let outlines = iconKeys.filter(x => {
  let flag = false;
  if (/Outline/.test(x)) {
    flag = true
  } else {
    flag = iconKeys.filter(y => y == x + 'Outline').length <= 0 && !/Logo/.test(x)
  }
  if (flag) return x;
});

let filleds = iconKeys.filter(x => !/Logo/.test(x) && !/Outline/.test(x));

const searchKey = ref("")
const type = ref('filled')
const logo = ref(logos || [])
const showIcons = ref(filleds || [])

const switchIcon = () => {
  filter(searchKey.value)
}
watch(searchKey, (newValue, oldValue) => {
  filter(newValue)
})

const filter = (key) => {
  key = key.replace(/ /g, '')
  let origin = type.value == 'outline' ? outlines : filleds;
  if (key) {
    key = key.toLowerCase()
    showIcons.value = origin.filter(x => {
      return x.replace('Outline', '').toLowerCase().indexOf(key) >= 0
    })
    logo.value = logos.filter(x => {
      return x.toLowerCase().indexOf(key) >= 0
    })
  } else {
    showIcons.value = origin
    logo.value = logos
  }
}
const copyHandle = (x) => {
  let text = `<Icon type="${x}" />`
  copy(text);
  message.success('代码复制成功！')
}
</script>
<style lang="less">
.icon-list {
  // overflow: hidden;
  display: inline-block;

  .icon-item {
    text-align: center;
    width: 200px;
    height: 80px;
    line-height: 80px;
    color: var(--kui-color-font);
    // float: left;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    border-radius: 12px;

    &:hover {
      color: #3a95ff;
      // background: #f5f5f5;
      box-shadow: 0 0 15px #ddd;
    }
  }

  .item-text {
    font-size: 12px;
    line-height: 1;
    padding: 10px 0;
  }
}
</style>
