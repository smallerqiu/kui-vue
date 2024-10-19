<cn>
#### 清除
支持允许或者禁用清除。
</cn>

```vue
<template>
  <Space vertical>
    <Rate :allowClear="true" :value="3" />  allowClear = true
    <Rate :allowClear="false" :value="3" /> allowClear = false
  </Space>
</template>
```