<cn>
#### 列表
在列表组件中使用加载占位符。
</cn>

```vue
<template>
    <Button :disabled="loading" @click="showSkeleton">重新加载</Button>
    <br/>
    <br/>
    <div class="demo-skeleton-list">
      <div class="demo-skeleton-item" v-for="x in 3">
        <Skeleton avatar :loading="loading" :rows="2" animated>
          <Space>
            <Avatar size="large">{{item.name}}</Avatar>
            <Space vertical align="start">
              <h4>{{item.name}}</h4>
              <p class="sub-desc">{{item.intro}}</p>
            </Space>
          </Space>
          <p class="desc">{{item.desc}}</p>
        </Skeleton>
      </div>
    </div>
</template>
<style>
.demo-skeleton-list{
  font-size:13px;
}
.demo-skeleton-item{
  padding:15px 20px;
  border-bottom:1px solid var(--kui-color-border);
}
.demo-skeleton-list h4{
  font-size:14px;
  font-weight:bold;
  margin:0;
}
.demo-skeleton-list .sub-desc{
  color:#999;
}
.demo-skeleton-list .desc{
  margin-top:15px;
  line-height:25px;
  margin:0;
}
</style>
<script>
export default{
  data() {
    return {
      loading:false,
      item:{
        name:'李白',
        intro:'李白（701年—762年12月），字太白，号青莲居士，又号“谪仙人”，唐代伟大的浪漫主义诗人',
        desc:'李白有《李太白集》传世，诗作中多以醉时写的，代表作有《望庐山瀑布》《行路难》《蜀道难》《将进酒》《早发白帝城》等多首。 [3]  李白所作词赋，宋人已有传记（如文莹《湘山野录》卷上），就其开创意义及艺术成就而言，“李白词”享有极为崇高的地位。'
      }
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