<cn>
### 最大值 / 自定义
设置 `max-count` 配合 `count` ，数字模式超出隐藏，`count` 不为数字时将不进行计算
</cn>
<en>
### Max Value / Custom
Use `max-count` with `count`. In numeric mode, values exceeding the max will be hidden. If `count` is not a number, it will not be calculated.
</en>

```vue
<template>
  <Space size="large" wrap>
    <Badge :count="99">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="100">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="20" :max-count="10">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="1000" :max-count="999">
      <div class="badge-box"></div>
    </Badge>
    <Badge count="hot">
      <div class="badge-box"></div>
    </Badge>
    <Badge count="new">
      <div class="badge-box"></div>
    </Badge>
  </Space>
</template>
```
