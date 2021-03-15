<cn>
#### 点
设置 `dot` 来展示一个点
</cn>

```vue
<template>
  <div class="demo-dot">
   <Badge dot>
      <div class="box"></div>
    </Badge>
    <Badge dot>
      <Icon type="notifications-outline" />
    </Badge>
    <Badge dot>
      <a href="#">我是一个连接</a>
    </Badge>
  </div>
</template>
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