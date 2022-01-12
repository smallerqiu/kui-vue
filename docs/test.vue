<template>
  <div>
    <Button @click="show=!show">普通抽屉</Button>
    <Drawer v-model="show" :closable="false" :footer="null">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script>
export default{
  data(){
    return{
      show:true
    }
  },
  mounted(){
         this.$Notice.open({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
  }
}
</script>
