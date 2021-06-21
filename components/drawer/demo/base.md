
<cn>
#### 基本用法
通过 `v-model` 双向绑定 `Drawer` 是否展示
</cn>

```vue
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
      show:false
    }
  }
}
</script>
```