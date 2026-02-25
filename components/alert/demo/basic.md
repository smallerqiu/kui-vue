<cn>
### 基本用法
通过 `type` 来控制展示类型
</cn>
<en>
### Basic Usage
Control the display type via `type`.
</en>

```vue
<template>
  <Space vertical block>
    <Alert :showIcon="false" type="success">Success Text</Alert>
    <Alert :showIcon="false" type="info">Info Text</Alert>
    <Alert :showIcon="false" type="warning">Warning Text</Alert>
    <Alert :showIcon="false" type="error">Error Text</Alert>
  </Space>
</template>
```
