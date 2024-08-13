<cn>
#### 设置换行 
当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。
</cn>

```vue
<template>
  <Space :size="[8,20]" wrap>
    <Button size="small" v-for="x in 25" :key="x">Wrap</Button>
  </Space>
</template>
```