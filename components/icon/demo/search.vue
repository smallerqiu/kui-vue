<template>
  <div>
    <h3>图标快速检索</h3>
    <br />
    <Affix :offsetTop="55">
      <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" icon="logo-kui" v-model="key" size="large" @input="search" clearable style="width:80%;margin:0 10%;background:var(--kui-color-back);">
      <RadioGroup v-model="type" @change="switchIcon" slot="suffix">
        <RadioButton value="outline">Outline</RadioButton>
        <RadioButton value="filled">Filled</RadioButton>
      </RadioGroup>
      </Input>
    </Affix>

    <br />
    <br />
    <div class="show-icons">
      <template v-if="showIcons.length">
        <div class="icon-head">
          <h3><span>App icons</span></h3>
        </div>
        <br />
        <div class="icon-item">
          <span @click.stop="copy(x)" v-for="(x,y) in showIcons" :key="y">
            <Icon :type="x" />
          </span>
        </div>
      </template>
      <template v-if="logo.length">
        <h3>Logos</h3>
        <div class="icon-item">
          <span @click.stop="copy(x)" v-for="(x,y) in logo" :key="y">
            <Icon :type="x" />
          </span>
        </div>
      </template>
      <h3 v-if="!showIcons.length && !logo.length" style="text-align:center;padding-bottom:50px;color:#888;">
        No results for "{{key}}"
      </h3>
    </div>
  </div>

</template>
<style lang="less">
.icon-item {
  // overflow: hidden;
  display: inline-block;
  span {
    text-align: center;
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: var(--kui-color-font);
    float: left;
    font-size: 32px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #3a95ff;
      // background: #f5f5f5;
      box-shadow: 0 0 15px #ddd;
    }
  }
}
</style>
<script>
import icons from 'kui-icons'
const iconKeys = Object.keys(icons);
let logos = [], outlines = [], filleds = [];
iconKeys.forEach(i => {
  if (i.indexOf('logo') > -1) {
    logos.push(i)
  } else if (i.indexOf('outline') > -1) {
    outlines.push(i)
  } else {
    filleds.push(i)
  }
})
export default {
  data() {
    return {
      key: '',
      type: 'outline',
      logo: logos,
      showIcons: outlines
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
        showIcons = origin.filter(x => {
          return x.indexOf(key) >= 0
        })
        logo = logos.filter(x => {
          return x.indexOf(key) >= 0
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