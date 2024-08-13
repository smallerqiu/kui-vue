<cn>
#### 自定义尺寸
自定义间距大小。
</cn>

```vue
<template>
  <div>
    <Slider v-model="size" :max="50"/>
    <Space :size="size">
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Space>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 12,
    };
  },
};
</script>
```