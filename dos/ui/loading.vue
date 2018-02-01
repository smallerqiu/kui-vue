<template>
   <div>
      <h2>LoadingBar 加载进度</h2>
      <h3>用处</h3>
      <p>全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条</p>
      <h3>在路由中使用</h3>
      <!-- <Code>{{demo1}}</Code> -->
      <h3>基本</h3>
      <Button @click="start('line')">start</Button>
      <Button @click="finish">finish</Button>
      <Button @click="error">error</Button>
      <h3>主题</h3>
      <Button @click="start('flip')">flip</Button>
      <Button @click="start('bounce')">bounce</Button>
      <Button @click="start('zoom')">zoom</Button>
      <Button @click="start('rotate')">rotate</Button>
   </div>
</template>
<script>
export default {
  data(){
     return{
        demo1:`import kui from 'kyui';
Vue.use(kui);

router.beforeEach((to, from, next) => {
    kui.Loading.start();
    next();
});

router.afterEach(route => {
    kui.Loading.finish();
});`
     }
  },
  methods:{
     start(type){
        this.$Loading.start(type)
        setTimeout(() => {
            this.finish()
        }, 3000);
     },
     finish(){
         this.$Loading.finish()
     },
     error(){this.$Loading.error()}
  }
}
</script>
