
<cn>
#### 植入目标元素
可以在目标元素内展开
</cn>

```vue
<template>
  <div ref="drawer-box" style="height:300px;position:relative;overflow:hidden">
    <Button @click="show=!show">普通抽屉</Button>
    <RadioGroup v-model="placement">
      <Radio label="left" value="left"/>
      <Radio label="top" value="top"/>
      <Radio label="right" value="right"/>
      <Radio label="bottom" value="bottom"/>
    </RadioGroup>
    <Drawer v-model="show" width="200" 
      :footer="null" 
      :placement="placement"
      :target="()=>$refs['drawer-box']">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script>
export default{
  data() {
    return {
      show:false,
      placement:'left'
    }
  }
}
</script>
```