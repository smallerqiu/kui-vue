<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
  >
    <Button :icon="UploadIcon">Click to upload</Button>
  </Upload>
</template>
<script setup lang="ts">
import { Upload as UploadIcon } from "kui-icons";
import { message, type UploadChangeEvent } from "kui-vue";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
const handleChange = (e: UploadChangeEvent) => {
  if (e.file.status !== "uploading") {
    console.log(e.file, e.fileList);
  }
  if (e.file.status === "success") {
    message.success(`${e.file.filename} uploaded successfully`);
  } else if (e.file.status === "error") {
    message.error(`${e.file.filename} upload failed.`);
  }
};
</script>
