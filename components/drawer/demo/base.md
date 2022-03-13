
<cn>
#### 基本用法
通过 `v-model` 双向绑定 `Drawer` 是否展示 , title 为null或false时不显示标题
</cn>

```vue
<template>
  <div>
    <Button @click="show=!show">普通抽屉</Button>
    <Button @click="show2=!show2">Width 30%</Button>
    <Drawer v-model="show" :closable="false" :footer="null" :title="null">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show2" width="30%" title="Width 30%">
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
      show:false,
      show2:false
    }
  }
}
</script>
```