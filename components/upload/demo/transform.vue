<template>
  <Upload
    action="https://www.chuchur.com/api/upload/image"
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :transformFile="transformFile"
    :limit="1"
    accept="image/*"
    :uploadIcon="Camera"
    uploadText="Upload Image"
  >
  </Upload>
</template>
<script setup lang="ts">
import { Camera } from "kui-icons";
import type { UploadChangeEvent } from "kui-vue";
import { ref } from "vue";
const headers = ref({
  authorization: "here is token",
});
const transformFile = (file: File) => {
  return new Promise<File>((res, _) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const img = new Image();
    const filename = file.name;
    img.onload = function () {
      canvas.width = 200;
      canvas.height = 300;
      ctx?.drawImage(
        img,
        (img.width - canvas.width) / 2,
        (img.height - canvas.height) / 2,
        canvas.width,
        canvas.height
      );
      // canvas to file obj
      let data = canvas.toDataURL("image/png");
      var arr = data.split(","),
        mime = arr[0].match(/:(.*?);/) || [],
        b64str = atob(arr[1]),
        n = b64str.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = b64str.charCodeAt(n);
      }
      const [_, ftype] = mime;
      const newFile = new File([u8arr], filename, { type: ftype });
      res(newFile);
    };
    img.src = URL.createObjectURL(file);
  });
};
const handleChange = (info: UploadChangeEvent) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
};
</script>
