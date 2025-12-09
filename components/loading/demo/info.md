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
import { Loading } from 'kui-vue'

Vue.use(Router)
let router = new Router({
  ....
})
router.beforeEach((to, from, next) => {
  Loading.start();
  next();
});

router.afterEach(route => {
  Loading.finish();
});
```

如果你使用的是 `axios`.

```js
import axios from "axios";
import { loading } from "kui-vue";

const axiosInstance = axios.create({
  baseURL: "/api", // 你的 API 地址
  timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    loading.start();
    return config;
  },
  (error) => {
    loading.finish();
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    loading.finish();
    return response;
  },
  (error) => {
    loading.finish();
    return Promise.reject(error);
  }
);

export default axiosInstance;
```

## 代码演示
