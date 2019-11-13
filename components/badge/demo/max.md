<cn>
#### 最大值 / 自定义
设置 `max-count` 配合 `count` ，数字模式超出隐藏，`count` 不为数字时将不进行计算
</cn>

```tpl
<template>
  <div class="demo-dot">
   <Badge count="99">
      <div class="box"></div>
    </Badge>
    <Badge count="100" max-count="99" color="orange">
      <div class="box"></div>
    </Badge>
    <Badge count="20" max-count="10" color="orange">
      <div class="box"></div>
    </Badge>
    <Badge count="1000" max-count="999" color="orange">
      <div class="box"></div>
    </Badge>
    <Badge count="hot">
      <div class="box"></div>
    </Badge>
    <Badge count="new">
      <div class="box"></div>
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
  margin-right:30px;
  margin-bottom:30px;
}
</style>
```