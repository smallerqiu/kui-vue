<cn>
#### 可控
动态控制
</cn>

```tpl
<template>
  <div class="demo-dot">
    <Badge :dot="dot">
      <div class="box"></div>
    </Badge>
    <Badge :dot="dot">
      <Icon type="ios-notifications-outline" />
    </Badge>
    <Badge :dot="dot">
      <a href="#">我是一个连接</a>
    </Badge>
    <Button mini @click="dot=!dot">click me</Button>
    <br/>
    <br/>
    <Badge :count="count" max-count="20">
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
      dot:true,
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