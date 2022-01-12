<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <Button @click="visible=true" type="primary">打开弹窗</Button>
    <Button @click="custom=true" type="primary">自定义</Button>

    <Modal :title="null" 
      :footer="null"
      :showClose="false"
      v-model="custom">
        <Space direction="vertical" style="width:100%">
        <h2>我是一个标题</h2>
        <div></div>
        </Space>
    </Modal>

    <Modal title="Title" v-model="visible" @ok="okHandle">Content</Modal>
  </div>
</template>
<script>
export default{
  data(){
    return{
      visible:false,
      custom:false
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