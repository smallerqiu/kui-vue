<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <Button @click="visible=true" type="primary">Open Modal</Button>
    <Modal title="Title" v-model="visible" @ok="okHandle">Content</Modal>
  </div>
</template>
<script>
export default{
  data(){
    return{
      visible:false
    }
  },
  methods:{
    okHandle(){
      this.visible = false
    }
  }
} 
</script>
```