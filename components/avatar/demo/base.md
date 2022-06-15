<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

```vue
<template>
   <div>
    <div>
      <Avatar :size="64">U</Avatar>
      <Avatar size="large">U</Avatar>
      <Avatar>U</Avatar>
      <Avatar size="small">U</Avatar>
    </div>
    <br />
    <div>
      <Avatar shape="square" :size="64">U</Avatar>
      <Avatar shape="square" size="large">U</Avatar>
      <Avatar shape="square">U</Avatar>
      <Avatar shape="square" size="small">U</Avatar>
    </div>
  </div>
</template>
```