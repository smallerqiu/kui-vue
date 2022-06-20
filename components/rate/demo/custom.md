<cn>
#### 自定义字符
可以自定义每一个字符。
</cn>

```vue
<template>
  <div>
    <Rate :character="(i)=>i+1" :value="2" :count="9"/>
    <br />
    <br />
    <Rate :icon="(i)=> icons[i]" :value="3"/>
  </div>
</template>
<script>
import { VolumeOff, VolumeLow, VolumeMedium, VolumeHigh, VolumeMute } from "kui-icons";
export default{
  data() {
    return {
      icons:[
        VolumeOff,
        VolumeLow,
        VolumeMedium,
        VolumeHigh,
        VolumeMute
      ]
    }
  }
}
</script>
```
