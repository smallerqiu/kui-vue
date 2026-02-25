<cn>
### 可关闭
`closable` 来控制是否显示可关闭按钮,平滑、自然隐藏关闭
</cn>
<en>
### Closable
Use `closable` to control whether the close button is displayed, with smooth and natural closing animation.
</en>

```vue
<template>
  <Space vertical block>
    <Alert type="success" showIcon closable>Success Text</Alert>
    <Alert type="info" showIcon closable>Info Text</Alert>
    <Alert type="warning" showIcon closable>Warning Text</Alert>
    <Alert type="error" showIcon closable>Error Text</Alert>
    <Alert
      type="success"
      showIcon
      closable
      message="Success Tip"
      description="Congratulations, the operation is successful."
    />
  </Space>
</template>
```
