<cn>
### 扩展
可以扩展自定工具和面板。
</cn>

```vue
<template>
  <Space vertical>
    <KImage
      :width="120"
      :height="120"
      src="https://cdn.chuchur.com/upload/demo/test_300.jpg"
      @close="close"
      ref="imgRef"
    >
      <template #tool>
        <Icon :type="Heart" color="#3a95ff" @click="togglePanel" />
        <Icon :type="Star" color="#3a95ff" @click="togglePanel" />
      </template>
      <template #panel>
        <div>Some thing here.</div>
      </template>
    </KImage>
  </Space>
</template>
<script setup>
import { Heart, Star } from "kui-icons";
import { ref } from "vue";
const imgRef = ref();
import { message } from "kui-vue";

const close = () => {
  message.info("close");
};
const togglePanel = () => {
  imgRef.value.togglePanel();
};
</script>
```
