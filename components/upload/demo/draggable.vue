<template>
  <div style="width: 100%">
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      draggable
      :uploadIcon="UploadIcon"
      uploadText="Click to upload files or drag files here"
      uploadSubText="Supports any type of file"
      @change="handleChange"
    >
    </Upload>
  </div>
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
