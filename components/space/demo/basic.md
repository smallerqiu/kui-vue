<cn>
### 基本用法 
相邻组件水平间距。
</cn>
<en>
### Basic Usage
Horizontal spacing between adjacent components.
</en>

```vue
<template>
  <Space>
    <Button>Button</Button>
    <Button :icon="Search">Button</Button>
    <Tooltip placement="top">
      <Button>Space</Button>
      <template #title>
        <p style="margin:0">I am space</p>
      </template>
    </Tooltip>
  </Space>
</template>
<script setup>
import { Search } from "kui-icons";
</script>
```
