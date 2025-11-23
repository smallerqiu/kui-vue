<cn>
### 点
设置 `dot` 来展示一个点
</cn>

```vue
<template>
  <Space>
    <Badge dot>
      <div class="box"></div>
    </Badge>
    <Badge dot>
      <Icon :type="NotificationsOutline" />
    </Badge>
    <Badge dot>
      <a href="#">我是一个连接</a>
    </Badge>
  </Space>
</template>
<script setup>
import { NotificationsOutline } from "kui-icons";
</script>
```
