<template>
  <Space vertical>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      :data="prams"
      :autoTrigger="false"
      @selectFiles="onSelectFiles"
      multiple
      ref="uploadRef"
    >
      <Button :icon="UploadIcon">Click to choose file</Button>
    </Upload>
    <Button :disabled="disabled" @click="startUpload">Starting Upload</Button>
  </Space>
</template>
<script setup lang="ts">
import { Upload as UploadIcon } from "kui-icons";
import { type UploadContext, type UploadFile } from "kui-vue";
import { ref } from "vue";
const uploadRef = ref<UploadContext>();
const disabled = ref(true);
const prams = ref({
  type: "image",
  time: Date.now(),
});
const headers = ref({
  authorization: "here is token",
});
const onSelectFiles = (fileList: UploadFile[]) => {
  console.log(fileList);
  disabled.value = fileList.length == 0;
};
const startUpload = () => {
  console.log("startUpload", uploadRef);
  uploadRef.value?.upload();
};
</script>
