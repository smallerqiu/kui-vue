<template>
  <div>
    <h3>图标快速检索</h3>
    <br />
    <Affix :offsetTop="65">
      <Flex size="large" style="background-color: var(--kui-color-back);">
        <RadioGroup size="large" v-model="type" @change="switchIcon" theme="card" type="button">
          <RadioButton value="outline">线框风格</RadioButton>
          <RadioButton value="filled">实底风格</RadioButton>
        </RadioGroup>
        <Space size="large" compact block>
          <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" :icon="LogoKui" v-model="key" @input="search" clearable
            style="background:var(--kui-color-back);">
          </Input>
          <Button :icon="icons['Search']"></Button>
        </Space>
      </Flex>
    </Affix>
    <div class="show-icons">
      <template v-if="showIcons.length">
        <div class="icon-head">
          <h3><span>App icons</span></h3>
        </div>
        <br />
        <Flex class="icon-list" size="small" wrap>
          <span @click.stop="copy(x)" v-for="(x, y) in showIcons" :key="y" class="icon-item">
            <Icon :type="icons[x]" />
            <!-- <svg width="1em" height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
            <span class="item-text">{{ x }}</span>
          </span>
        </Flex>
      </template>
      <template v-if="logo.length">
        <h3>Logos</h3>
        <Flex class="icon-list" size="small" wrap>
          <span @click.stop="copy(x)" v-for="(x, y) in logo" :key="y" class="icon-item">
            <Icon :type="icons[x]" />
            <!-- <svg width="1em"
              height="1em">
              <use :xlink:href="`${sprite}#${x}`"></use>
            </svg> -->
            <span class="item-text">{{ x }}</span>
          </span>
        </Flex>
      </template>
      <h3 v-if="!showIcons.length && !logo.length" style="text-align:center;padding-bottom:50px;color:#888;">
        No results for "{{ key }}"
      </h3>
    </div>
  </div>
</template>
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
<script>
// import { LogoKui } from 'kui-icons'
import * as icons from 'kui-icons'
// console.log(icons)
// import sprite from 'kui-icons/lib/sprite.svg'
// import icons from '../lib/kui-icons'
// import sprite from '../lib/sprite.svg'

const iconKeys = Object.keys(icons);
let logos = iconKeys.filter(x => /Logo/.test(x)),
  outlines = iconKeys.filter(x => {
    let flag = false;
    if (/Outline/.test(x)) {
      flag = true
    } else {
      flag = iconKeys.filter(y => y == x + 'Outline').length <= 0 && !/Logo/.test(x)
    }
    if (flag) return x;
  }),
  filleds = iconKeys.filter(x => !/Logo/.test(x) && !/Outline/.test(x));
// let logos = [], filleds = [];
export default {
  data() {
    return {
      icons,
      LogoKui: icons.LogoKui,
      // sprite,
      key: '',
      type: 'filled',
      logo: logos || [],
      showIcons: filleds || []
    }
  },
  methods: {
    switchIcon() {
      this.filter(this.key)
    },
    search(e) {
      let key = this.key//e.target.value
      key = key.replace(/ /g, '')
      this.filter(key)
    },
    filter(key) {
      let { showIcons, logo, type } = this
      let origin = type == 'outline' ? outlines : filleds;
      if (key) {
        key = key.toLowerCase()
        showIcons = origin.filter(x => {
          return x.replace('Outline', '').toLowerCase().indexOf(key) >= 0
        })
        logo = logos.filter(x => {
          return x.toLowerCase().indexOf(key) >= 0
        })
      } else {
        showIcons = origin
        logo = logos
      }
      this.showIcons = showIcons
      this.logo = logo
    },
    copy(x) {
      let text = `<Icon type="${x}" />`
      this.$copyText(text).then(e => {
        this.$Message.success('代码复制成功！')
      }, e => {
        this.$Message.error('复制代码失败，请手动复制')
      })
    }
  },
}
</script>