<cn>
### 手动上传/自定义属性
通过设置 data、headers 可添加自定义上传属性
autoTrigger='false'，选中文件后将不会自动触发上传。需要手动调用 ref 上的 upload 方法触发
name 为上传文件名
</cn>
<en>
### Manual Upload / Custom Properties
By setting `data` and `headers`, you can add custom upload properties.
When `autoTrigger='false'`, selecting a file will not automatically trigger the upload. You need to manually call the `upload` method on the ref to trigger it.
`name` is the uploaded filename.
</en>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    :data="prams"
    :autoTrigger="false"
    @onSelectFiles="onSelectFiles"
    multiple
    ref="uploadRef"
  >
    <Button :icon="CloudUploadOutline">Click to choose file</Button>
  </Upload>
  <br />
  <Button :disabled="disabled" @click="startUpload">Starting Upload</Button>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
import { CloudUploadOutline } from "kui-icons";
const uploadRef = ref(null);
const disabled = ref(true);
const prams = ref({
  type: "image",
  time: Date.now(),
});
const headers = ref({
  authorization: "here is token",
});
const onSelectFiles = (fileList) => {
  console.log(fileList);
  disabled.value = fileList.length == 0;
};
const startUpload = () => {
  console.log("startUpload", uploadRef);
  uploadRef.value.upload();
};
</script>
```
