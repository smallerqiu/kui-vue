<cn>
### 带图标
通过添加 `icon` 属性 设置按钮按钮图标。
</cn>
<en>
### With Icon
Set the button icon by adding the `icon` property.
</en>

```vue
<template>
  <Space wrap>
    <Button type="primary" :icon="Search" shape="circle"></Button>
    <Button type="primary" :icon="Search">搜索</Button>
    <Button :icon="Search" shape="circle"></Button>
    <Button :icon="Search">搜索</Button>
    <Button type="primary" :icon="Power"></Button>
    <Button :icon="Power"></Button>
    <Button type="primary">展开选项<Icon :type="ChevronDown" /></Button>
  </Space>
</template>
<script setup>
import { ChevronDown, Search, Power } from "kui-icons";
</script>
```
