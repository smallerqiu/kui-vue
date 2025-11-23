<cn>
### 点击上传
经典款式，用户点击按钮弹出文件选择框。
</cn>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
  >
    <Button :icon="CloudUpload">Click to upload</Button>
  </Upload>
</template>
<script setup>
import { CloudUpload } from "kui-icons";
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
