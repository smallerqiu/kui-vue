<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

```vue
<template>
  <Space>
    <Avatar :size="64">U</Avatar>
    <Avatar size="large">U</Avatar>
    <Avatar>U</Avatar>
    <Avatar size="small">U</Avatar>
  </Space>
  <br/>
  <Space>
    <Avatar shape="square" :size="64">U</Avatar>
    <Avatar shape="square" size="large">U</Avatar>
    <Avatar shape="square">U</Avatar>
    <Avatar shape="square" size="small">U</Avatar>
  </Space>
</template>
```