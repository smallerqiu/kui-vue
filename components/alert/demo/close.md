<cn>
#### 可关闭
`closable` 来控制是否显示可关闭按钮,平滑、自然隐藏关闭
</cn>

```vue
<template>
  <div>
    <Alert type="success" showIcon closable>Success Text</Alert>
    <Alert type="info" showIcon closable>Info Text</Alert>
    <Alert type="warning" showIcon closable>Warning Text</Alert>
    <Alert type="error" showIcon closable>Error Text</Alert>
    <Alert type="success" 
        showIcon
        closable
        message="Success Tip" 
        description="Congratulations, the operation is successful." 
      />
  </div>
</template>
```