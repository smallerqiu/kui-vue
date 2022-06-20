<cn>
#### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态
</cn>

```vue
<template>
  <div>
    <Button type="primary" :icon="Search" loading>Loading</Button>
    <Button type="primary" :icon="Search" loading size="small">Loading</Button>
    <Button :icon="Search" loading shape="circle"/>
    <Button type="primary" :loading="loading" @click="loading=true">Clike me</Button>
    <br/>
    <Button type="primary" :icon="Search" :loading="delayLoading" @click="handleDelay">延迟1s加载</Button>
  </div>
</template>
<script>
import { Search } from "kui-icons";
export default{
  data() {
    return {
      Search,
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