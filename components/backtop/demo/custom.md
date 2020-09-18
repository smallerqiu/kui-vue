<cn>
#### 基础用法
可以自定义回到顶部按钮的样式 `bottom` 为 `100px` 
</cn>

```tpl
<template>
  <div>
    <BackTop bottom="100">
      <div class="custom-backtop">UP</div>
    </BackTop>
    自定义按钮为蓝色的按钮
  </div>
</template>
<style scoped>
.custom-backtop {
  background: #2d94ff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style> 
```