<cn>
### 禁用
通过添加 `disabled` 属性可将按钮设置为不可用状态。
</cn>
<en>
### Disabled
Add the `disabled` property to make the button unavailable.
</en>

```vue
<template>
  <Flex size="small">
    <Space vertical>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button>Default</Button>
      <Button theme="solid" color="green">Solid</Button>
      <Button theme="outline">Outline</Button>
      <Button theme="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Space>
    <Space vertical>
      <Button disabled type="primary">Primary(disabled)</Button>
      <Button type="danger" disabled>Danger(disabled)</Button>
      <Button disabled>Default(disabled)</Button>
      <Button disabled theme="solid" color="green">Solid(disabled)</Button>
      <Button disabled theme="outline">Outline(disabled)</Button>
      <Button disabled theme="dashed">Dashed(disabled)</Button>
      <Button disabled type="text">Text(disabled)</Button>
      <Button disabled type="link">Link(disabled)</Button>
    </Space>
  </Flex>
</template>
```
