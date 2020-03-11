<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```tpl
<template>
  <div>
    <Button @click="visible=true" type="primary">Open Modal</Button>
    <Modal title="Title" v-model="visible">Content</Modal>
  </div>
</template>
<script>
export default{
  data(){
    return{
      visible:false
    }
  }
} 
</script>
```