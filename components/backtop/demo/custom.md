<cn>
### 基本用法
可以自定义回到顶部按钮的样式 `bottom` 为 `100px`
</cn>
<en>
### Basic Usage
You can customize the back-to-top button style, for example setting `bottom` to `100px`.
</en>

```vue
<template>
  <div>
    <BackTop :bottom="100">
      <div class="custom-back-top">UP</div>
    </BackTop>
    The custom button is the blue button
  </div>
</template>
<style scoped>
.custom-back-top {
  background: #2d94ff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>
```
