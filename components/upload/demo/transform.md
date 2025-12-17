<cn>
### 上传前处理图片
利用 transformFile 可以在文件上传前处理文件, 上传之前压缩等
</cn>

```vue
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
    :uploadIcon="CameraOutline"
    uploadText="上传头像"
  >
  </Upload>
</template>
<script setup>
import { ref } from "vue";
import { CameraOutline } from "kui-icons";
const headers = ref({
  authorization: "here is token",
});
const transformFile = (file) => {
  return new Promise((res, rej) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const img = new Image();
    const filename = file.name;
    img.onload = function () {
      canvas.width = 200;
      canvas.height = 300;
      ctx.drawImage(
        img,
        (img.width - canvas.width) / 2,
        (img.height - canvas.height) / 2,
        canvas.width,
        canvas.height
      );
      // canvas to file obj
      let data = canvas.toDataURL("image/png");
      var arr = data.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        b64str = atob(arr[1]),
        n = b64str.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = b64str.charCodeAt(n);
      }
      const newFile = new File([u8arr], filename, { type: mime });
      res(newFile);
    };
    img.src = URL.createObjectURL(file);
  });
};
const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
};
</script>
```
