<cn>
#### 只读
只读，无法进行鼠标交互。支持小数分值.
</cn>

```vue
<template>
  <Space vertical>
    <Rate disabled :value="2.5" allowHalf /> 
    <Rate disabled :value="3.3" show-score :icon="Heart"/> 
    <Rate disabled :value="8.7" show-score :count="10"/>
  </Space>
</template>
<script setup>
import { Heart } from 'kui-icons'
</script>
```