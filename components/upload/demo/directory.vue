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
<script setup lang="ts">
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