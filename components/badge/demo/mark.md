<cn>
### 独立使用
不包裹任何元素即是独立使用，可自定样式展现。
在右上角的 badge 则限定为红色。
</cn>
<en>
### Standalone Usage
Using without wrapping any element makes it standalone and allows custom styling.
The badge in the top-right corner is limited to red.
</en>

```vue
<template>
  <Space>
    <Badge :count="3" />
    <Badge :count="15" color="orange" />
    <Badge :count="25" color="green" />
  </Space>
</template>
```
