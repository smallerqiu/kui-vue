<template>
  <Space vertical>
    <Button @click="test">change</Button>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      type="picture"
      :headers="headers"
      @change="handleChange"
      :fileList="fileList"
      accept="image/*"
      uploadText="Upload Avatar"
    >
    </Upload>
  </Space>
</template>
<script setup lang="ts">
import type { UploadChangeEvent, UploadFile } from "kui-vue";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
const fileList = ref<UploadFile[]>([
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "uploading",
    filename: "test.jpg",
    size: "222kb",
    percent: 50,
  },
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "error",
    filename: "test.jpg",
    size: "222kb",
  },
]);
const handleChange = (e: UploadChangeEvent) => {
  if (e.file.status !== "uploading") {
    console.log(e.file, e.fileList);
  }
};
const test = () => {
  fileList.value = [
    {
      url: "https://cdn.chuchur.com/upload/cat/cat1.jpg",
      status: "uploading",
      filename: "test.jpg",
      size: "222kb",
      percent: 50,
    },
  ];
};
</script>
