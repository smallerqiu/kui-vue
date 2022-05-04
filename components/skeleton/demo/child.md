<cn>
#### 子组件
加载占位图包含子组件。
</cn>

```vue
<template>
    <Skeleton :loading="loading" :rows="2" animated>
      <div class="skeleton-demo">
        <h4>KUI是一套基于Vue.js的桌面UI组件库</h4>
        <p>
          拥有数十个有用且美观的组件，非常友好的API，适合任何技能水平的同学，丰富的文档，支持Electron,SSR，Nuxt.js....
        </p>
      </div>
    </Skeleton>
    <br />
    <br />
    <Button :disabled="loading" @click="showSkeleton">重新加载</Button>
</template>
<style lang="less">
.skeleton-demo h4{
  font-weight:bold;
  margin-bottom:15px;
}
</style>
<script>
export default{
  data(){
    return{
      loading:false
    }
  },
  methods: {
    showSkeleton(){
      this.loading = true,
      setTimeout(() => {
        this.loading = false
      }, 3000);
    }
  },
}
</script>
```