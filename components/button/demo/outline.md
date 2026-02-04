<cn>
### 边框主题
只呈现边框
</cn>

```vue
<template>
  <Space vertical>
    <Space vertical>
      <Button type="primary" theme="outline">Primary</Button>
      <Button type="danger" theme="outline">Danger</Button>
      <Button type="warning" theme="outline">Warning</Button>
      <Button theme="outline">Default</Button>
    </Space>
    <br />
    <Space vertical>
      <Button type="primary" theme="dashed">Primary</Button>
      <Button type="danger" theme="dashed">Danger</Button>
      <Button type="warning" theme="dashed">Warning</Button>
      <Button theme="dashed">Default</Button>
    </Space>
  </Space>
</template>
```
