<cn>
#### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态
</cn>

```vue
<template>
  <Space>
    <Button type="primary" :icon="Search" loading>Loading</Button>
    <Button type="primary" :icon="Search" loading size="small">Loading</Button>
    <Button type="primary" loading shape="circle"></Button>
    <Button type="primary" :loading="loading" @click="handleLoading">Click me</Button>
    <br />
    <Button type="primary" :icon="Power" :loading="delayLoading" @click="handleDelay">延迟1s加载</Button>
  </Space>
</template>
<script>
import { Search, Power } from "kui-icons";
export default{
  data() {
    return {
      Search, Power,
      loading:false,
      delayLoading:false
    }
  },
  methods:{
    handleLoading() {
      this.loading = true;
    },
    handleDelay(){
      setTimeout(()=>this.delayLoading=true,1000)
    }
  }
}
</script>
```