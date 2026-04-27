<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :limit="1"
    accept="image/*"
    :uploadIcon="Camera"
    uploadText="Upload Avatar"
  >
  </Upload>
</template>
<script setup lang="ts">
import { Camera } from "kui-icons";
import type { UploadChangeEvent } from "kui-vue";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
const handleChange = (e: UploadChangeEvent) => {
  if (e.file.status !== "uploading") {
    console.log(e.file, e.fileList);
  }
};
</script>
