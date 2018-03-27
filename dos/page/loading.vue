<template>
    <div>
        <h2>LoadingBar 加载进度</h2>
        <h3>用处</h3>
        <p>全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条</p>
        <h3>在路由中使用</h3>
        <Code>{{demo1}}</Code>
        <h3>在异步请求中使用</h3>
        <Code>{{demo2}}</Code>
        <h3>模拟请求</h3>
        <Button @click="start('line')">start</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="config">config</Button>
        <Button @click="upload(30)">upload 30</Button>
        <Button @click="upload(80)">upload 80</Button>
        <Code>{{demo3}}</Code>
        <h3>主题</h3>
        <Alert>用Loading来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到finish 才可以进行第二操作。</Alert>
        <Button @click="loading('flip')">flip</Button>
        <Button @click="loading('bounce')">bounce</Button>
        <Button @click="loading('zoom')">zoom</Button>
        <Button @click="loading('rotate')">rotate</Button>
        <Code>{{demo4}}</Code>
        <h3>API</h3>
        <p>通过直接调用以下方法来使用组件：</p>
        <p>this.$Loading.start()</p>
        <p>this.$Loading.finish()</p>
        <p>this.$Loading.error()</p>
        <p>this.$Loading.update(percent)</p>
        <p>另外提供了全局配置和全局销毁的方法：</p>
        <p>this.$Loading.config(options)</p>
        <p>this.$Loading.destroy()</p>
       
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
export default {
  data() {
    return {
      demo1: `import kui from 'kyui';
Vue.use(kui);

router.beforeEach((to, from, next) => {
    kui.Loading.start();
    next();
});

router.afterEach(route => {
    kui.Loading.finish();
});`,
      demo2: `<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$Loading.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$Loading.finish();
                }
                error: () => {
                    this.$Loading.error();
                }
            });
        }
    }
}
<\/script>`,
      demo3: `<Button @click="start()">start</Button>
<Button @click="finish">finish</Button>
<Button @click="error">error</Button>
<Button @click="config">config</Button>
<Button @click="upload(30)">upload 30</Button>
<Button @click="upload(80)">upload 80</Button>
<script>
  methods: {
    config() {
      this.$Loading.config({
        type: "line",
        color: "orange",
        height: 10
      });
    },
    upload(percent){
        this.$Loading.upload(percent);
    },
    start() {
      this.$Loading.start();
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    }
  }
<\/script>`,
      demo4: `<Button @click="loading('flip')">flip</Button>
<Button @click="loading('bounce')">bounce</Button>
<Button @click="loading('zoom')">zoom</Button>
<Button @click="loading('rotate')">rotate</Button>
<script>
...
methods: {
    loading(type) {
        this.$Loading.start(type);
        setTimeout(() => {
            this.finish();
        }, 3000);
    },
}
...
<\/script>`
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
