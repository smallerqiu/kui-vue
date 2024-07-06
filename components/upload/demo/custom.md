<cn>
#### 手动上传/自定义属性
通过设置 data、headers 可添加自定义上传属性
autoTrigger='false'，选中文件后将不会自动触发上传。需要手动调用 ref 上的 upload 方法触发
name 为上传文件名
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    :data="pramas"
    :autoTrigger="false"
    @before-upload="beforeUpload"
    @remove="beforeUpload"
    multiple
    ref="upload"
    >
    <Button :icon="CloudUploadOutline" >点击选择上传文件</Button>
  </Upload>
  <br/>
  <Button :disabled="disabled" @click="$refs.upload.upload()">开始上传</Button>
</template>
<script>
import { CloudUploadOutline } from "kui-icons";
export default{
  data() {
    return {
      CloudUploadOutline,
      pramas:{
        type:'image',
        time: Date.now()
      },
      headers:{
        authorization: 'here is token'
      },
      disabled:true,
    }
  },
  methods:{
    beforeUpload(info){
      this.disabled = info.fileList.length == 0
    },
  }
}
</script>
```