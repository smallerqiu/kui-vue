<cn>
### 上传头像
limit等于上传文件数量时, 则不显示选择文件组件,
</cn>
<en>
### Upload Avatar
When `limit` equals the number of uploaded files, the file selection component will not be displayed.
</en>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :limit="1"
    accept="image/*"
    :uploadIcon="CameraOutline"
    uploadText="Upload Avatar"
  >
  </Upload>
</template>
<script setup lang="ts">
import { CameraOutline } from "kui-icons";
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
