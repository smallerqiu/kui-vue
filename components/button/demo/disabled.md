<cn>
### 禁用
通过添加 `disabled` 属性可将按钮设置为不可用状态。
</cn>

```vue
<template>
  <Flex vertical size="small">
    <Space>
      <Button type="primary">Primary</Button>
      <Button disabled type="primary">Primary(disabled)</Button>
    </Space>
    <Space>
      <Button type="danger">Danger</Button>
      <Button type="danger" disabled>Danger(disabled)</Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button disabled type="text">Text(disabled)</Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button disabled type="link">Link(disabled)</Button>
    </Space>
  </Flex>
</template>
```
