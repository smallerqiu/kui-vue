<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    directory
    :headers="headers"
  >
    <Button :icon="UploadIcon">Click to upload</Button>
  </Upload>
</template>
<script setup lang="ts">
import { Upload as UploadIcon } from "kui-icons";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
</script>
