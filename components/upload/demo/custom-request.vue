<template>
  <Upload
    multiple
    :max-concurrent="2"
    :custom-request="customRequest"
    :before-upload="beforeUpload"
    upload-text="Select files"
  >
    <Button>Custom upload</Button>
  </Upload>
</template>

<script setup lang="ts">
import { message, type UploadCustomRequest } from "kui-vue";

const beforeUpload = (_item: unknown, file: File) => {
  if (file.name.endsWith(".tmp")) {
    message.warning("Temporary files cannot be uploaded");
    return false;
  }
};

const customRequest: UploadCustomRequest = ({ file, onProgress, onSuccess }) => {
  let percent = 0;
  const timer = window.setInterval(() => {
    percent += 10;
    onProgress(percent);
    if (percent >= 100) {
      window.clearInterval(timer);
      onSuccess({ name: file instanceof File ? file.name : "file" });
    }
  }, 200);

  return { abort: () => window.clearInterval(timer) };
};
</script>
