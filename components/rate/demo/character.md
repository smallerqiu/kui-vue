<cn>
### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
</cn>

```vue
<template>
  <Space vertical>
    <Rate :icon="Heart" allowHalf :value="1.5" />
    <Rate character="A" allowHalf style="fontSize: 36px" :value="2.5" />
    <Rate character="龍" allowHalf :value="3.5" :size="24" />
  </Space>
</template>
<script setup>
import { Heart } from "kui-icons";
</script>
```
