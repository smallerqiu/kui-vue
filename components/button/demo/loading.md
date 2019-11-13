<cn>
#### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态
</cn>

```tpl
<template>
  <div>
    <Button type="primary" icon="ios-search" loading>loading</Button>
    <Button type="primary" :loading="loading" @click="loading=true">clike me</Button>
    <Button type="warning" icon="ios-search" loading circle/>
    <Button icon="ios-search" loading circle mini/>
    <Button icon="ios-search" loading circle/>
    <Button icon="ios-search" loading circle large/>
    <br/>
    <Button type="primary" icon="ios-search" :loading="delayLoading" @click="handleDelay">延迟1s加载</Button>
  </div>
</template>
<script>
export default{
  data(){
    return{
      loading:false,
      delayLoading:false
    }
  },
  methods:{
    handleDelay(){
      setTimeout(e=>this.delayLoading=true,1000)
    }
  }
}
</script>
```