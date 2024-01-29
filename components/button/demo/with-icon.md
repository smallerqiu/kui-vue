<cn>
#### 带图标
通过添加 `icon` 属性 设置按钮按钮图标。
</cn>

```vue
<template>
  <Space>
    <Button type="primary" :icon="Search" shape="circle"></Button>
    <Button type="primary" :icon="Search">搜索</Button>
    <Button :icon="Search" shape="circle"></Button>
    <Button :icon="Search">搜索</Button>
    <Button type="dashed" :icon="Search" shape="circle"></Button>
    <Button type="dashed" :icon="Search">搜索</Button>
    <Button type="primary">展开选项<Icon :type="ChevronDown" /></Button>
  </Space>
</template>
<script>
import { ChevronDown, Search } from 'kui-icons'
export default{
  data() {
    return {
      ChevronDown ,Search
    }
  }
}
</script>
```