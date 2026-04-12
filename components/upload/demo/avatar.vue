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