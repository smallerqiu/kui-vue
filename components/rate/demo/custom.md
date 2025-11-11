<cn>
#### 自定义字符
可以自定义每一个字符。
</cn>

```vue
<template>
  <Space vertical>
    <Rate :character="(i) => i" :value="2" :count="9" />
    <Rate :icon="(i) => icons[i - 1]" :value="3" />
  </Space>
</template>
<script setup>
import {
  VolumeOff,
  VolumeLow,
  VolumeMedium,
  VolumeHigh,
  VolumeMute,
} from "kui-icons";
const icons = [VolumeOff, VolumeLow, VolumeMedium, VolumeHigh, VolumeMute];
</script>
```
