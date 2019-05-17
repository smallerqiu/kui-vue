<template>
  <div>
    <h2>ImagePreview 图片预览</h2>
    <p>使用场景：后台有一个商品，使用Table组件以列表形式显示，商品有缩略图，点击缩略图看大图，达到预览目的</p>
    <h3>代码示例</h3>
    <Demo title="基础" layout="vertical">
      <div slot="content">
        <img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg" />
        <img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg" />
      </div>
      <div slot="desc">通过
        <code>v-model</code>双向绑定
        <code>Modal</code>是否展示。通过指定url值来显示要展示的图片</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="动画展示" layout="vertical">
      <div slot="content">
        <img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg1" />
        <img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg1" />
      </div>
      <div slot="desc">结合Animate库通过
        <code>animateIn</code>来控制进场动画
        <code>animateOut</code>控制出场动画，前提是先的引入<a href="https://daneden.github.io/animate.css/" target="_blank">Animate库</a></div>
      <div slot="code">{{code.ani}}</div>
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
          <td>value</td>
          <td>绑定的值，可使用 v-model 双向绑定,控制是否显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>url</td>
          <td>图片展示的绝对地址，支持base64，和Blob，不支持相对路径</td>
          <td>String</td>
          <td></td>
        </tr>
        <tr>
          <td>animateIn</td>
          <td>图片进场动画</td>
          <td>String </td>
          <td>zoomIn</td>
        </tr>
        <tr>
          <td>animateOut</td>
          <td>图片出场动画</td>
          <td>String </td>
          <td>zoomOut</td>
        </tr>
      </table>
    </div>
    <ImagePreview v-model="showView" :url="url" />
    <ImagePreview v-model="showView1" :url="url1" animateIn="flipInX" animateOut="flipOutY" />
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
      showView: false, url: '',
      showView1: false, url1: '',
    };
  },
  methods: {
    showImg(e) {
      this.url = e.target.src
      this.showView = true
    },
    showImg1(e) {
      this.url1 = e.target.src
      this.showView1 = true
    },
  }
};
</script>
