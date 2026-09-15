<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    type="picture"
    :headers="headers"
    :limit="1"
    accept="image/*"
    :uploadIcon="Camera"
    uploadText="Upload Avatar"
  ></Upload>
</template>
<script setup lang="ts">
import { Camera } from "kui-icons";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
</script>
