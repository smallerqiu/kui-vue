<cn>
#### 自定义
自定义效果。
</cn>

```vue
<template>
  <Button :disabled="loading" @click="showSkeleton">重新加载</Button>
  <br/>
  <br/>
  <Card v-for="x in 3" class="demo-skeleton-card" title="诗一首" :key="x">
    <SkeletonImage animated :loading="loading" :radius="8" style="width:166px;height:100px;">
      <div class="cover" />
    </SkeletonImage>
    <SkeletonText animated :loading="loading" size="small" style="min-width:80px;margin:8px 0;">
      <h2>静夜思.李白</h2>
    </SkeletonText>
    <SkeletonText animated :loading="loading" size="small" style="min-width:130px;">
      <span>床前明月光, 疑是地上霜, 举头望明月, 低头思故乡.</span>
    </SkeletonText>
  </Card>
</template>
<style>
.demo-skeleton-card{
  width:200px;
  margin-bottom:10px;
  display:inline-block;
  margin-right:20px;
}
.demo-skeleton-card .cover{
  height:100px;
  width:166px;
  border-radius:8px;
  background:url("https://www.chuchur.com/upload/demo/test_300.jpg") no-repeat center;
  background-size:cover;
}
.demo-skeleton-card h2{
  font-size:15px;
}
.demo-skeleton-card span{
  font-size:13px;
  color:#999;
}
</style>
<script>
export default{
  data(){
    return {
      loading:false,
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