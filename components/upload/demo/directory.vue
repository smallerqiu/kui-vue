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
