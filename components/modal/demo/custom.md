<cn>
#### 自定义
自定义 `Modal`
</cn>

```vue
<template>
  <div>
    <Button @click="visible1=true" type="primary">Width 300px</Button>
    <Button @click="visible2=true" type="primary">Custom footer</Button>
    <Button @click="visible3=true" type="primary">国际化</Button>
    <Button @click="visible4=true" type="primary">异步关闭</Button>
    <Modal title="Width 300px" v-model="visible1" :width="300" @ok="visible1=false">
      <p>content</p>
    </Modal>

    <Modal title="Custom footer" v-model="visible2">
      <p>content</p>
      <template slot="footer">
        <Button icon="save" @click="visible2=false" type="primary">Save</Button>
      </template> 
    </Modal>

    <Modal title="Are you ok ?" v-model="visible3" ok-text="Ok" cancel-text="cancel" @ok="okHandle">
      <p>Yes , I'm fine !</p>
    </Modal>

    <Modal title="提交表单" v-model="visible4" :loading="loading" @ok="submit" @close="close">
      <p>Name：<Input placeholder="Please input your name" style="width:200px"/></p>
    </Modal>
  </div>
</template>
<script>
export default{
  data(){
    return{
      visible1:false,
      visible2:false,
      visible3:false,
      visible4:false,
      loading:false,
    }
  },
  methods:{
    okHandle(){
      this.visible3 = false
    },  
    submit(){
      this.loading = true
      this.timer = setTimeout(e=>{
        this.loading = false
        this.visible4 = false
      },2000)
    },
    close(){
      this.loading = false
      clearTimeout(this.timer)
    }
  }
} 
</script>
```