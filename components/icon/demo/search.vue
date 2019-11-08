<template>
  <div>
    <h3>图标快速检索</h3>
    <br />
    <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" icon="logo-apple" icon-align="left" v-model="key" style="width:80%;margin:0 auto;display:inherit" large @input="search" clearable />
    <div class="show-icons">
      <template v-if="applist.length">
        <div class="icon-head">
          <h3>App icons </h3>
          <div class="icon-title" style="text-align: center;">
            <RadioGroup v-model="type" @change="switchIcon">
              <RadioButton label="ios">IOS</RadioButton>
              <RadioButton label="Material">Material</RadioButton>
            </RadioGroup>
          </div>
        </div>
        <br />
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
<script>
import { ios, logo, md } from './icon.js'
export default {
  data() {
    return {
      key: '',
      type: 'ios',
      logos: [],
      applist: [],
    }
  },
  mounted() {
    this.logos = logo || []
    this.applist = ios || []
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