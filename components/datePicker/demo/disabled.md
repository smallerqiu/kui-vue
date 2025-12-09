<cn>
### 禁用和不可编辑
选择框的不可用 、 不可编辑, 不可清除 状态。
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>disabled = true</code>
    <DatePicker disabled />
    <br />
    <code>editable = false</code>
    <DatePicker :editable="false" />
    <br />
    <code>clearable = false</code>
    <DatePicker :clearable="false" />
  </Space>
</template>
```
