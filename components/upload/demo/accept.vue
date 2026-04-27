<template>
  <Space vertical>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      @change="handleChange"
      multiple
      accept="image/*"
    >
      <Button :icon="Image">Upload Image</Button>
    </Upload>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      @change="handleChange"
      multiple
      accept="video/*"
    >
      <Button :icon="Video">Upload Video</Button>
    </Upload>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      :headers="headers"
      @change="handleChange"
      multiple
      accept=".pdf,.png,.jpeg"
    >
      <Button :icon="UploadIcon">Upload PDF,PNG,JPEG</Button>
    </Upload>
  </Space>
</template>
<script setup lang="ts">
import { Image, Upload as UploadIcon, Video } from "kui-icons";
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
