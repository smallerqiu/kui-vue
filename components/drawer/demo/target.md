
<cn>
#### 植入目标元素
可以在目标元素内展开
</cn>

```vue
<template>
  <div ref="drawer-box" style="height:300px;position:relative">
    <Button @click="show=!show">普通抽屉</Button>
    <Drawer v-model="show" width="200" :closable="false" :footer="null" :target="()=>$refs['drawer-box']">
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