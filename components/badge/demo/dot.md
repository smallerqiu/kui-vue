<cn>
### 点
设置 `dot` 来展示一个点
</cn>
<en>
### Dot
Set `dot` to display a dot.
</en>

```vue
<template>
  <Space vertical>
    <Badge dot>
      <div class="badge-box"></div>
    </Badge>
    <Badge dot>
      <Icon :type="NotificationsOutline" />
    </Badge>
    <Badge dot>
      <a href="#">Link</a>
    </Badge>
  </Space>
</template>
<script setup>
import { NotificationsOutline } from "kui-icons";
</script>
```
