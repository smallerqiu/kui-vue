<cn>
#### 上传限制
limit 限制上传数量, minSize 和 maxSize 属性可以自定义上传文件大小的限制。
</cn>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    :limit="limit"
    :minSize="200"
    :maxSize="1024"
    @exceed="
      () => {
        message.warning(`最多只能上传${limit}个文件`);
      }
    "
    @size-error="
      ({ file }) => {
        message.warning(`${file.filename}大小超过限制`);
      }
    "
    @change="handleChange"
    @remove="handleChange"
    multiple
  >
    <Button :icon="CloudUploadOutline" :disabled="disabled">
      点击上传 (最小200KB, 最大1MB,最多上传 {{ limit }} 项)
    </Button>
  </Upload>
</template>
<script setup>
import { CloudUploadOutline } from "kui-icons";
import { ref } from "vue";
import { message } from "kui-vue";
const headers = ref({
  authorization: "here is token",
});
const limit = ref(2);
const disabled = ref(false);
const handleChange = (info) => {
  disabled.value = info.fileList.length >= limit.value;
};
</script>
```
