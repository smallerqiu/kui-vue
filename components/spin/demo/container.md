<cn>
#### 卡片加载中
可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</cn>

```vue
<template>
<div>
  <Spin v-model="spinning">
    <div class="deme-spin-container demo-back">
        床前明月光，疑是地上霜。<br>
        举头望明月，低头思故乡。
    </div>
  </Spin>
  <br/>
  Loading state：<Switch v-model="spinning" @change="change"/>
</div>
</template>
<style scoped>
.deme-spin-container{
  padding:100px 50px;
}
</style>
<script>
export default{
  data() {
    return {
      spinning:false
    }
  },
  methods:{
    change(checked){
      this.spinning = checked
    }
  }
}
</script>

```
