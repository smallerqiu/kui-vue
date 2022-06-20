<cn>
#### 基本用法 
最简单的用法。
</cn>

```vue
<template>
  <div>
    <Rate :size="30" :value="2"/>
    <br/>
    <Rate :value="3"/>
    <br />
    <Rate :icon="Heart" allowHalf color="red" :value="2.5" :size="30"/>
    <br />
    <Rate :icon="Heart" allowHalf color="red" :value="3.5" :size="40"/>
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