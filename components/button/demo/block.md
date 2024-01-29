<cn>
#### Block 按钮
block 属性将使按钮适合其父宽度。
</cn>

```vue
<template>
  <Space vertical style="width:100%">
    <Button type="primary" block>Primary</Button>
    <Button type="danger" block>Danger</Button>
    <Button block>Default</Button>
    <Button type="dashed" block>Dashed</Button>
    <Button type="link" block>Link</Button>
  </Space>
</template>
```