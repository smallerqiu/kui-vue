<cn>
### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
</cn>

```vue
<template>
  <Space vertical>
    <Rate :icon="Heart" allowHalf :value="1.5" />
    <code>character = A</code>
    <Rate character="A" allowHalf :value="2.5" />
    <code>character = 龍</code>
    <Rate character="龍" allowHalf :value="3.5" :size="24" />
    <br />
    <code>count = 9</code>
    <Rate :character="(i) => i" :value="2" :count="9" />
    <Rate :icon="(i) => icons[i - 1]" :value="3" />
  </Space>
</template>
<script setup>
import { Heart, VolumeOff, VolumeLow, VolumeMedium, VolumeHigh, VolumeMute } from "kui-icons";
const icons = [VolumeOff, VolumeLow, VolumeMedium, VolumeHigh, VolumeMute];
</script>
```
