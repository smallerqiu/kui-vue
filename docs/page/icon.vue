<template>
  <div>
    <h2>Icon 图标</h2>
    <p>kui 的图标使用开源项目
      <a href="http://ionicons.com/" target="_blank">ionicons</a>，当前版本4.3.0
    </p>
    <h3>代码示例</h3>
    <Demo title="基础" layout="vertical">
      <div slot="content">
        <Icon type="ios-home" />
        <Icon type="ios-home" size="25" />
        <Icon type="ios-home" size="25" color="red" />
      </div>
      <div slot="desc">可以通过
        <code>type</code>,
        <code>size</code>
        <code>color</code>属性分别设置图标的类型、大小、颜色</div>
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
      </table>
    </div>
    <h3>图标列表</h3>
    <Input placeholder="搜索图标，点击图标即可复制" v-model="key" class="icon-search-box" @keyup="search" />
    <br/>
    <br/>
    <div class="search-icons" v-if="searchList.length">
      <h3>Search icons </h3>
      <div class="icon-item">
        <span @click.stop="copy(x)" v-for="(x,y) in searchList" :key="y">
          <Icon :type="x" />
          <!-- <p>{{x}}</p> -->
        </span>
      </div>
    </div>
    <div class="show-icons" v-if="!searchList.length">
      <div class="icon-head">
        <h3>App icons </h3>
        <div class="icon-title">
          <RadioGroup value="ios" @change="switchIcon">
            <RadioButton label="ios">IOS</RadioButton>
            <RadioButton label="Material">Material</RadioButton>
          </RadioGroup>
        </div>
      </div>
      <div class="icon-item">
        <span @click.stop="copy(x)" v-for="(x,y) in applist" :key="y">
          <Icon :type="x" />
          <!-- <p>{{x}}</p> -->
        </span>
      </div>
      <h3>Logos</h3>
      <div class="icon-item">
        <span @click.stop="copy(x)" v-for="(x,y) in code.icons.logo" :key="y">
          <Icon :type="x" />
          <!-- <p>{{x}}</p> -->
        </span>
      </div>
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
      all: [],
      applist: [],
      searchList: [],
      copyhtml: ''
    };
  },
  mounted() {
    this.all = [...code.icons.ios, ...code.icons.md, ...code.icons.logo]
    this.applist = code.icons.ios
  },
  methods: {
    switchIcon(name) {
      this.applist = name == 'ios' ? code.icons.ios : code.icons.md;
    },
    search(e) {
      this.searchList = this.all.filter(x => { return x.indexOf(this.key) >= 0 })
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
