<cn>
#### 拖拽上传
draggable='true'，可以使用拖拽功能
</cn>

```vue
<template>
  <div style="width:556px">
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      draggable
      :uploadIcon="CloudUploadOutline"
      uploadText="点击上传文件或拖拽文件到这里"
      uploadSubText="支持任意类型文件"
      @change="handleChange"
    >
    </Upload>
  </div>
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
