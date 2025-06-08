<cn>
#### 基本用法
可以通过 `type`、`size`  、`color` 属性分别设置图标的类型、大小、颜色,也可以通过设置 `spin` 属性来实现动画旋转效果。
</cn>

```vue
<template>
  <Space>
    <Icon :type="Home" />
    <Icon :type="Heart" />
    <Icon :type="LogoKui"  />
    <Icon :type="LogoKui"  color="#00be83" />
    <Icon :type="Loading" spin />
  </Space>
</template>
<script setup>
import { Heart, LogoKui ,Home , Loading } from 'kui-icons'
</script>
```