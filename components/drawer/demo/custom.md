<cn>
#### 自定义
通过 `title` 来设置标题， `width` 控制宽度， 还有 `placement` 控制方向
</cn>

```tpl
<template>
  <div>
    <Button @click="show1=true">自定义宽度</Button>
    <Button @click="show2=true">Open left</Button>
    <Drawer v-model="show1" width="300"></Drawer>
    <Drawer v-model="show2" width="300" placement="left" title="What's your name? " cancelText="cancel" okText="Ok">My name is chuchur.</Drawer>
  </div>
</template>
<script>
export default{
  data(){
    return{
      show1:false,
      show2:false,
    }
  }
}
</script>
```