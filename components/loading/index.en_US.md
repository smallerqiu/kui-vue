# Loading

Progress loading.

## When to Use

- Display progress during asynchronous requests.

## Examples

Simulate route loading

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

If you are using `axios`.

```js
import axios from "axios";
import { loading } from "kui-vue";

const axiosInstance = axios.create({
  baseURL: "/api", // Your API address
  timeout: 10000,
});

// Request interceptor
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

// Response interceptor
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

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage.

## Loading API

| Property | Description              | Type              | Default |
| -------- | ------------------------ | ----------------- | ------- |
| start    | Start loading            | Function          | -       |
| finish   | Finish loading           | Function          | -       |
| error    | Loading error            | Function          | -       |
| update   | Manually update progress | Function(percent) | -       |
| destroy  | vue's $.destroy()        | Function          | -       |
