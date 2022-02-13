<template>
  <div>
    <Button @click="visible=true" type="primary">打开弹窗</Button>
    <Button @click="custom=true" type="primary">自定义</Button>

    <Modal :title="null" 
      :footer="null"
      :showClose="false"
      v-model="custom">
        <DateCalendar />
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
