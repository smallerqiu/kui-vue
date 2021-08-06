<cn>
#### 从浮层内关闭
使用 `v-model` 属性控制浮层显示。
</cn>

```vue
<template>
  <Poptip title="标题" trigger="click" v-model="show">
    <template slot="content">
      <a @click="show=false">Close</a>
    </template>
    <Button type="primary">Click me</Button>
  </Poptip>
</template>
<script>
export default{
  data(){
    return{
      show:false,
    }
  }
}
</script>
```