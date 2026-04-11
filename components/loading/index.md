# Loading 加载进度

进度加载。

## 何时使用

- 异步请求时展示进度

## 示例

模拟路由加载

```js
// # router.js
import { createRouter, createWebHistory } from "vue-router";
import { loading } from 'kui-vue'

const router = createRouter({
  ....
})
router.beforeEach((to, from, next) => {
  Loading.start();
  next();
});

router.afterEach(route => {
  Loading.finish();
});

export default router;
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

## Loading API

| 属性    | 说明             | 类型              | 默认值 |
| ------- | ---------------- | ----------------- | ------ |
| start   | 开始加载         | Function          | -      |
| finish  | 完成加载         | Function          | -      |
| error   | 加载错误         | Function          | -      |
| update  | 手动更新进度     | Function(percent) | -      |
| destroy | vue的$.destroy() | Function          | -      |
