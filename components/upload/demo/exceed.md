<cn>
### 上传限制
limit 限制上传数量, minSize 和 maxSize 属性可以自定义上传文件大小的限制。
 </cn>
<en>
### Upload Restrictions
`limit` restricts the number of uploads. The `minSize` and `maxSize` attributes allow you to customize file size limits for uploads.
 </en>

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
        message.warning(`You can upload a maximum of ${limit} files.`);
      }
    "
    @sizeError="
      ({ file }) => {
        message.warning(`The size of ${file.filename} exceeds the limit`);
      }
    "
    @change="handleChange"
    @remove="handleChange"
    multiple
  >
    <Button :icon="CloudUploadOutline" :disabled="disabled">
      Click to upload (Minimum 200KB, Maximum 1MB, up to {{ limit }} items)
    </Button>
  </Upload>
</template>
<script setup lang="ts">
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
