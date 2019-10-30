<template>
  <div>
    <h2>Icon 图标</h2>
    <p>kui 的图标使用开源项目
      <a href="http://ionicons.com/" target="_blank">ionicons</a>，当前版本4.5.10
    </p>
    <h3>代码示例</h3>
    <Demo title="基本用法" layout="vertical">
      <div slot="content">
        <Icon type="logo-apple" />
        <Icon type="logo-apple" size="25" />
        <Icon type="logo-apple" size="30" color="green" />
        <Icon type="ios-sync" spin size="25" />
      </div>
      <div slot="desc">可以通过
        <code>type</code>,
        <code>size</code>
        <code>color</code>属性分别设置图标的类型、大小、颜色,也可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <h3>API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>type</td>
          <td>图标的名称</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>图标的大小，单位是 px</td>
          <td>String,Number </td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>图标的颜色</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>spin</td>
          <td>图标是否选择</td>
          <td>Boolen </td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>图标列表</h3>
    <Input placeholder="输入英文关键字，搜索图标，点击图标即可复制" icon="logo-apple" icon-align="left" v-model="key" style="width:80%;margin:0 auto;display:inherit" large @input="search" clearable />
    <br />
    <br />
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
            <!-- <p>{{x}}</p> -->
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

    <input type="text" v-model="copyhtml" ref="copyDom" style="position:absolute;left:-9999px;" />
  </div>
</template>
<script>
import code from '../code/icon'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      key: '',
      type: 'ios',
      logos: [],
      applist: [],
      copyhtml: ''
    };
  },
  mounted() {
    this.logos = code.icons.logo
    this.applist = code.icons.ios
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
        let oriapp = this.type == 'ios' ? code.icons.ios : code.icons.md;
        this.applist = oriapp.filter(x => {
          return x.indexOf(key) >= 0
        })
        let orilogo = code.icons.logo
        this.logos = orilogo.filter(x => {
          return x.indexOf(key) >= 0
        })
      } else {
        this.applist = this.type == 'ios' ? code.icons.ios : code.icons.md;
        this.logos = code.icons.logo
      }
    },
    copy(x) {
      this.copyhtml = `<Icon type="${x}" />`
      setTimeout(() => {
        this.$refs.copyDom.select()
        document.execCommand("copy");
        this.$Message.success('复制成功！')
      })
    }
  }
};
</script>
