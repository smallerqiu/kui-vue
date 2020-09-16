<template>
  <div>
    <h3>图标快速检索</h3>
    <br />
    <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" icon="logo-apple" icon-align="left" v-model="key" style="width:80%;margin:0 auto;display:inherit" large @input="search" clearable />
    <br />
    <br />
    <div class="show-icons">
      <template v-if="applist.length">
        <div class="icon-head">
          <div class="icon-title" style="text-align: center;">
            <RadioGroup v-model="type" @change="switchIcon">
              <RadioButton value="ios">IOS</RadioButton>
              <RadioButton value="Material">Material</RadioButton>
            </RadioGroup>
          </div>
          <h3><span>App icons</span></h3>
        </div>
        <br />
        <div class="icon-item">
          <span @click.stop="copy(x)" v-for="(x,y) in applist" :key="y">
            <Icon :type="x" />
          </span>
        </div>
      </template>
      <template v-if="logos.length">
        <h3>Logos</h3>
        <div class="icon-item">
          <span @click.stop="copy(x)" v-for="(x,y) in logos" :key="y">
            <Icon :type="x" />
            <!-- <p>{{x}}</p> -->
          </span>
        </div>
      </template>
      <h3 v-if="!applist.length && !logos.length" style="text-align:center;">
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
    color: #555;
    float: left;
    font-size: 30px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #3a95ff;
      background: #f5f5f5;
      box-shadow: 0 0 15px #ddd;
    }
  }
}
</style>
<script>
import icons from 'kui-icons'
export default {
  data() {
    return {
      key: '',
      type: 'ios',
      logos: [],
      applist: [],
      md: [],
      ios: [],
      logo: []
    }
  },
  mounted() {
    let all = Object.keys(icons)
    this.logo = this.logos = all.filter(x => x.indexOf('logo') >= 0)
    this.applist = all.filter(x => x.indexOf('ios') >= 0)
    this.ios = all.filter(x => x.indexOf('ios') >= 0)
    this.md = all.filter(x => x.indexOf('md') >= 0)
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
      let { ios, md, logo } = this
      if (key) {
        let oriapp = this.type == 'ios' ? ios : md;
        this.applist = oriapp.filter(x => {
          return x.indexOf(key) >= 0
        })
        let orilogo = logo
        this.logos = orilogo.filter(x => {
          return x.indexOf(key) >= 0
        })
      } else {
        this.applist = this.type == 'ios' ? ios : md;
        this.logos = logo
      }
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