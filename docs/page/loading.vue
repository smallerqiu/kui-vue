<template>
  <div>
    <h2>LoadingBar 加载进度</h2>
    <h3>用处</h3>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条</p>
    <h3>在路由中使用</h3>
    <Code lang="javascript">{{code.useInRouter}}</Code>
    <h3>在异步请求中使用</h3>
    <Code lang="javascript">{{code.useInAjax}}</Code>

    <Demo title="模拟请求">
      <div slot="content">
        <Button @click="start('line')">start</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="config">config</Button>
        <Button @click="upload(30)">upload 30</Button>
        <Button @click="upload(80)">upload 80</Button>
      </div>
      <div slot="desc">
        <code>start</code>触发开始，
        <code>finish</code>结束，
        <code>upload</code>可以手动更新进度
      </div>
      <div slot="code">{{code.test}}</div>
    </Demo>
    <Demo title="主题">
      <div slot="content">
        <Button @click="loading('flip')">flip</Button>
        <Button @click="loading('bounce')">bounce</Button>
        <Button @click="loading('zoom')">zoom</Button>
        <Button @click="loading('rotate')">rotate</Button>
      </div>
      <div slot="desc">用
        <code>Loading</code>来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到
        <code>finish</code> 才可以进行第二操作。</div>
      <div slot="code">{{code.theme}}</div>
    </Demo>

    <h3>API</h3>
    <p>通过直接调用以下方法来使用组件：</p>
    <Code lang="js">
      this.$Loading.start() 
this.$Loading.finish() 
this.$Loading.error() 
this.$Loading.update(percent)
    </Code>
    <p>另外提供了全局配置和全局销毁的方法：</p>
    <Code lang="js">
      this.$Loading.config(options)
this.$Loading.destroy()
    </Code>
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
          <td>进度的主题，可取值为 line，zoom，flip，bounce，rotate</td>
          <td>String</td>
          <td>line</td>
        </tr>
        <tr>
          <td>loading-text</td>
          <td>加载中的文字提示，type为line无效</td>
          <td>String</td>
          <td>空</td>
        </tr>
        <tr>
          <td>color</td>
          <td>进度条的颜色，type为line 有效</td>
          <td>String</td>
          <td>默认为主题颜色</td>
        </tr>
        <tr>
          <td>height</td>
          <td>进度条的高度，type为line 有效 </td>
          <td>String，Number</td>
          <td>2</td>
        </tr>
        <tr>
          <td>start</td>
          <td>开始从 0 显示进度条，并自动加载进度，type为line有效，可传参[type,loading-text] </td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>finish</td>
          <td>结束进度条，自动补全剩余进度，type为line有效</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>error</td>
          <td>以错误的类型结束进度条，自动补全剩余进度 ，type为line有效</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>update</td>
          <td>精确加载到指定的进度，type为line有效</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/loading'
import Demo from '../components/demo'
import Code from '../components/code'
export default {
  components: { Demo, Code },
  data() {
    return {
      code: code
    };
  },
  methods: {
    config() {
      this.$Loading.config({
        type: "line",
        color: "orange",
        height: 10
      });
    },
    upload(percent) {
      this.$Loading.upload(percent);
    },
    start(type) {
      this.$Loading.start(type);
    },
    loading(type) {
      this.$Loading.start(type);
      setTimeout(() => {
        this.finish();
      }, 3000);
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    }
  }
};
</script>
