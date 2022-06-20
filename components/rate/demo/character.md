<cn>
#### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
</cn>

```vue
<template>
  <div>
    <Rate :icon="Heart" allowHalf />
    <br />
    <Rate character="A" allowHalf style="fontSize: 36px"  />
    <br />
    <Rate character="龍" allowHalf />
  </div>
</template>
<script>
import { Heart } from 'kui-icons'
export default{
  data() {
    return {
      Heart
    }
  }
}
</script>
```