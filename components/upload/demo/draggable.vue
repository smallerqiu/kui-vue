<template>
  <div style="width:100%">
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      draggable
      :uploadIcon="CloudUploadOutline"
      uploadText="Click to upload files or drag files here"
      uploadSubText="Supports any type of file"
      @change="handleChange"
    >
    </Upload>
  </div>
</template>
<script setup lang="ts">
import { CloudUploadOutline } from "kui-icons";
import { ref } from "vue";
import { message } from "kui-vue";
const headers = ref({
  authorization: "here is token",
});
const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "success") {
    message.success(`${info.file.filename} uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.filename} upload failed.`);
  }
};
</script>