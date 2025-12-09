<cn>
### 全局加载
使用 全局模式。
</cn>

```vue
<template>
  <Space>
    <Button @click="open">Open Image</Button>
    <Button @click="openMedia">Open Media</Button>
    <Button @click="openGroup">Open Image group</Button>
  </Space>
</template>
<script setup>
import { KImage } from "kui-vue";
const openMedia = () => {
  KImage.show({
    src: "https://pro-video.xiaoheiban.cn/202004/132504dd-51b6-4722-9929-27000912a4c8.mp4",
    type: "media",
  });
};
const open = () => {
  KImage.show({
    src: "https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg",
  });
};
const openGroup = () => {
  KImage.show({
    data: [
      "https://cdn.chuchur.com/upload/demo/kui-react.jpg",
      "https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg",
      "https://cdn.chuchur.com/upload/demo/test.jpg",
    ],
    index: 1,
  });
};
</script>
```
