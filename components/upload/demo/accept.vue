<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept="image/*"
  >
    <Button :icon="IconImage">Upload Image</Button>
  </Upload>
  <br />
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept="video/*"
  >
    <Button :icon="Videocam">Upload Video</Button>
  </Upload>
  <br />
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept=".pdf,.png,.jpeg"
  >
    <Button :icon="CloudUpload">Upload PDF,PNG,JPEG</Button>
  </Upload>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
import { IconImage, Videocam, CloudUpload } from "kui-icons";
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