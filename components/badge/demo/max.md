<cn>
#### 最大值 / 自定义
设置 `max-count` 配合 `count` ，数字模式超出隐藏，`count` 不为数字时将不进行计算
</cn>

```vue
<template>
  <div class="demo-dot">
   <Badge :count="99">
      <div class="box"></div>
    </Badge>
    <Badge :count="100">
      <div class="box"></div>
    </Badge>
    <Badge :count="20" :max-count="10">
      <div class="box"></div>
    </Badge>
    <Badge :count="1000" :max-count="999">
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
```