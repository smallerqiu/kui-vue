<cn>
### 文本域
通过设置 `rows` 来控制行数
</cn>
<en>
### Textarea
Control the number of rows via `rows`.
</en>

```vue
<template>
  <Space vertical block>
    <TextArea :rows="4" placeholder="Please input" />
    <TextArea :rows="2" placeholder="Please input" />
    <TextArea :rows="2" placeholder="Disabled" disabled />
    <TextArea :rows="2" placeholder="Readonly" readonly />
  </Space>
</template>
```
