# Loading 加载进度
进度加载。

## 何时使用
- 异步请求时展示进度


## 示例

模拟路由加载
```js
// # router.js

import Vue from 'vue'
import Router from 'vue-router'
import kui from 'kui-vue'

Vue.use(Router)
let router = new Router({
  ....
})
router.beforeEach((to, from, next) => {
  kui.Loading.start();
  next();
});

router.afterEach(route => {
  kui.Loading.finish();
});
```

模拟ajax 请求
```js
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
        },
      });
    }
  }
}
```

## 代码演示