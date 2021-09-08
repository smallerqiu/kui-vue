<cn>
#### 清除
支持允许或者禁用清除。
</cn>

```vue
<template>
  <div>
    <Rate :allowClear="true" :value="3" />  allowClear = true
    <br />
    <Rate :allowClear="false" :value="3" /> allowClear = false
  </div>
</template>
```