<cn>
#### 上传限制
limit 限制上传数量, minSize 和 maxSize 属性可以自定义上传文件大小的限制。
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    :limit="limit"
    :minSize="200"
    :maxSize="1024"
    @exceed="()=>{ this.$Message.warning(`最多只能上传${limit}个文件`) }"
    @size-error="({file})=>{ this.$Message.warning(`${file.filename}大小超过限制`) }"
    @change="handleChange"
    @remove="handleChange"
    multiple
    >
    <Button icon="cloud-upload-outline" :disabled="disabled">点击上传 (最小200KB, 最大1MB,最多上传 {{limit}} 项)</Button>
  </Upload>
</template>
<script>
export default{
  data(){
    return {
      headers:{
        authorization: 'here is token'
      },
      disabled:false,
      limit:2,
    }
  },
  methods:{
    handleChange(info){
      this.disabled = info.fileList.length >= this.limit
    }
  }
}
</script>
```