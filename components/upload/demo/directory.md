<cn>
#### 上传文件夹
通过传入 directory 为 true，可以支持上传文件夹下的所有文件
</cn>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    directory
    :headers="headers"
    @change="handleChange"
  >
    <Button :icon="CloudUploadOutline">Click to upload</Button>
  </Upload>
</template>
<script setup>
import { CloudUploadOutline } from "kui-icons";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});

const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
};
</script>
```
