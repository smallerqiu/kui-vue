<template>
  <div>
    <h2>ImagePreview 图片预览</h2>
    <p>使用场景：后台有一个商品，使用Table组件以列表形式显示，商品有缩略图，点击缩略图看大图，达到预览目的</p>
    <h3>代码示例</h3>
    <Demo title="基础" layout="vertical">
      <div slot="content">
        <Button @click="$ImagePreview.show('https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg')">预览</Button>
        <br/>
        <img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:50px;float:left;margin-right:20px;cursor:zoom-in" @click="show" />
        <img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:50px;cursor:zoom-in" @click="show" />
      </div>
      <div slot="desc">提供全局的展示方法<code>$ImagePreview.show()</code></div>
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
          <td>show</td>
          <td>显示预览图片</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/imagepreview'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
    };
  },
  methods: {
    show(e){
      this.$ImagePreview.show(e.target.src)
    }
  },
};
</script>
