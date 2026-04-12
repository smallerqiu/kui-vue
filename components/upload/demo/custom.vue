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
<script setup lang="ts">
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