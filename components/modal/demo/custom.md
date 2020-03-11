<cn>
#### 自定义
自定义 `Modal`
</cn>

```tpl
<template>
  <div>
    <Button @click="show1=true" type="primary">Width 300px</Button>
    <Button @click="show2=true" type="primary">Custom footer</Button>
    <Button @click="show3=true" type="primary">国际化</Button>
    <Button @click="show4=true" type="primary">异步关闭</Button>
    <Modal title="Width 300px" v-model="show1" :width="300">
      <p>content</p>
    </Modal>

    <Modal title="Custom footer" v-model="show2">
      <p>content</p>
      <template slot="footer">
        <Button icon="ios-save" @click="show2=false" type="primary">Save</Button>
      </template> 
    </Modal>

    <Modal title="Are you ok ?" v-model="show3" ok-text="Ok" cancel-text="cancel">
      <p>Yes , I'm fine !</p>
    </Modal>

    <Modal title="提交表单" v-model="show4" :loading="loading" @ok="submit" @close="close">
      <p>Name：<Input placeholder="Please input your name" width="200"/></p>
    </Modal>
  </div>
</template>
<script>
export default{
  data(){
    return{
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      loading:false,
    }
  },
  methods:{
    submit(){
      this.loading = true
      this.timer = setTimeout(e=>{
        this.loading = false
        this.show4 = false
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