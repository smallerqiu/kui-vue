<cn>
### 手动上传/自定义属性
通过设置 data、headers 可添加自定义上传属性
autoTrigger='false'，选中文件后将不会自动触发上传。需要手动调用 ref 上的 upload 方法触发
name 为上传文件名
</cn>

```vue
<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    :data="prams"
    :autoTrigger="false"
    @before-upload="beforeUpload"
    @remove="beforeUpload"
    multiple
    ref="uploadRef"
  >
    <Button :icon="CloudUploadOutline">点击选择上传文件</Button>
  </Upload>
  <br />
  <Button :disabled="disabled" @click="startUpload">开始上传</Button>
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
const beforeUpload = (info) => {
  console.log(info.file, info.fileList);
  disabled.value = info.fileList.length == 0;
};
const startUpload = () => {
  console.log("startUpload",uploadRef);
  uploadRef.value.upload();
}
</script>
```
