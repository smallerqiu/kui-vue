<cn>
#### 禁用
通过添加 `disabled` 属性可将按钮设置为不可用状态。
</cn>

```vue
<template>
  <Space>
    <Button type="primary">Primary</Button>
    <Button disabled type="primary">Primary(disabled)</Button>
  </Space>
  <br/>
  <br/>
  <Space>
    <Button type="danger">Danger</Button>
    <Button type="danger" disabled>Danger(disabled)</Button>
  </Space>
  <br/>
  <br/>
  <Space>
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
  </Space>
  <br/>
  <br/>
  <Space>
    <Button type="dashed">Dashed</Button>
    <Button disabled type="dashed">Dashed(disabled)</Button>
  </Space>
  <br/>
  <br/>
  <Space>
    <Button type="link">Link</Button>
    <Button disabled type="link">Link(disabled)</Button>
  </Space>
</template>
```