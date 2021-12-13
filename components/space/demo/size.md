<cn>
#### 间距大小
间距预设大、中、小三种大小。
通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。
</cn>

```vue
<template>
  <div>
    <RadioGroup v-model="size">
      <Radio value="small">Small</Radio>
      <Radio value="middle">Middle</Radio>
      <Radio value="large">Large</Radio>
    </RadioGroup>
    <br/>
    <br/>
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
      size: 'small',
    };
  },
};
</script>
```