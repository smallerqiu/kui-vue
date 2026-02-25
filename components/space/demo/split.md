<cn>
### 分隔符
相邻组件分隔符。
</cn>
<en>
### Divider
Divider between adjacent components.
</en>

```vue
<template>
  <Space>
    <template #split>
      <Divider type="vertical"></Divider>
    </template>
    <a href="#" type="link">Edit</a>
    <a href="#" type="link">Save</a>
    <a href="#" type="link">Delete</a>
  </Space>
</template>
```
