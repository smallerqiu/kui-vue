<template>
  <div>
    <h2>Icon 图标</h2>
    <p>kui 的图标使用开源项目
      <a href="http://ionicons.com/" target="_blank">ionicons</a>
    </p>
    <h3>代码示例</h3>
    <Demo title="基础">
      <div slot="content">
        <Icon type="home" />
        <Icon type="home" size="25" />
        <Icon type="home" size="25" color="red" />
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
    <Input placeholder="搜索图标，点击图标即可复制" v-model="key" style="width: 80%;margin: 0 auto;display: inherit;" @keyup="search" />
    <br/>
    <br/>
    <div class="icon-item">

      <span @click.stop="copy(x)" v-for="(x,y) in list" :key="y">
        <Tooltip :content="x">
          <Icon :type="x" />
          <!-- <p>{{x}}</p> -->
        </Tooltip>
      </span>

      <input type="text" v-model="copyhtml" ref="copyDom" style="position:absolute;left:-9999px;" />
    </div>
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
      list: [],
      copyhtml: ''
    };
  },
  mounted() {
    this.list = code.iconList
  },
  methods: {
    search(e) {
      this.list = code.iconList.filter(x => { return x.indexOf(this.key) >= 0 })
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
