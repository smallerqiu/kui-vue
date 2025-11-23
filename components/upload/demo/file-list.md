<cn>
### 上传多个文件
通过设置 multiple 属性可以支持同时选中多个文件上传。
>不设置为默认, 只能上传一个文件
</cn>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
  >
    <Button :icon="CloudUploadOutline">Click to upload</Button>
  </Upload>
</template>
<script setup>
import { CloudUploadOutline } from "kui-icons";
import { ref } from "vue";
import { message } from "kui-vue";
const headers = ref({
  authorization: "here is token",
});
const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "success") {
    message.success(`${info.file.filename} uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.filename} upload failed.`);
  }
};
</script>
```
