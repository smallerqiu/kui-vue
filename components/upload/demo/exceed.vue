<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    :headers="headers"
    :limit="limit"
    :minSize="200"
    :maxSize="1024"
    @exceed="
      () => {
        message.warning(`You can upload a maximum of ${limit} files.`);
      }
    "
    @sizeError="
      ({ file }: UploadChangeEvent) => {
        message.warning(`The size of ${file.filename} exceeds the limit`);
      }
    "
    @change="handleChange"
    @remove="handleChange"
    multiple
  >
    <Button :icon="UploadIcon" :disabled="disabled">
      Click to upload (Minimum 200KB, Maximum 1MB, up to {{ limit }} items)
    </Button>
  </Upload>
</template>
<script setup lang="ts">
import { Upload as UploadIcon } from "kui-icons";
import { message, type UploadChangeEvent } from "kui-vue";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
const limit = ref(2);
const disabled = ref(false);
const handleChange = (e: UploadChangeEvent) => {
  disabled.value = e.fileList.length >= limit.value;
};
</script>
