<cn>
#### 可控
动态控制
</cn>

```vue
<template>
  <div class="demo-dot">
    <Badge :dot="show">
      <div class="box"></div>
    </Badge>
    <Badge :dot="show">
      <Icon type="notifications-outline" />
    </Badge>
    <Badge :dot="show">
      <a href="#">我是一个连接</a>
    </Badge>
    <Switch @change="show=!show" />
    <br/>
    <br/>
    <Badge :count="count" :max-count="20">
      <div class="box"></div>
    </Badge>
    <ButtonGroup circle>
      <Button @click="count--">-</Button>
      <Button @click="count++">+</Button>
    </ButtonGroup>
  </div>
</template>
<script>
export default{
  data(){
    return{
      show:true,
      count:15
    }
  }
} 
</script>
<style scoped>
.demo-dot .box{
  width:50px;
  height:50px;
  background:#ddd;
  border-radius:5px;
}
.demo-dot .k-badge{
  margin-right:20px;
}
</style>
```