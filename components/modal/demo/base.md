<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <Button @click="visible=true" type="primary">打开弹窗</Button>
    <Button @click="custom=true" type="primary">自定义</Button>
    <Button @click="visible1=true" type="primary">点蒙层关闭</Button>

    <Modal :title="null" 
      :footer="null"
      :showClose="false"
      v-model="custom">
        <Space direction="vertical" style="width:100%">
          <h2>我是一个标题</h2>
          <div><Button @click="custom=false">Close</Button></div>
        </Space>
    </Modal>

    <Modal title="基本对话框" v-model="visible" @ok="okHandle">
      <p>This is the content of a basic modal.</p>
      <p>More content...</p>
    </Modal>

    <Modal title="基本对话框" v-model="visible1" @ok="visible1=false" :mask-closable="true">
      <p>This is the content of a basic modal.</p>
      <p>More content...</p>
    </Modal>
  </div>
</template>
<script>
export default{
  data() {
    return {
      visible:false,
      custom:false,
      visible1:false
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