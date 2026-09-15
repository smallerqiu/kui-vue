<template>
  <Space vertical>
    <Button @click="test">change</Button>
    <Upload
      action="https://www.chuchur.com/api/upload/image"
      name="file"
      type="picture"
      sortable
      :headers="headers"
      v-model:fileList="fileList"
      accept="image/*"
      uploadText="Upload Avatar"
    ></Upload>
  </Space>
</template>
<script setup lang="ts">
import type { UploadFile } from "kui-vue";
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
    url: "https://cdn.chuchur.com/upload/cat/cat1.jpg",
    status: "success",
    filename: "cat.jpg",
    size: "180kb",
  },
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "error",
    filename: "test.jpg",
    size: "222kb",
  },
]);
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
