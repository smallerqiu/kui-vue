<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

```vue
<template>
   <div>
    <div>
      <Avatar :size="64" icon="person-outline" />
      <Avatar size="large" icon="person-outline" />
      <Avatar icon="person-outline" />
      <Avatar size="small" icon="person-outline" />
    </div>
    <br />
    <div>
      <Avatar shape="square" :size="64" icon="person-outline" />
      <Avatar shape="square" size="large" icon="person-outline" />
      <Avatar shape="square" icon="person-outline" />
      <Avatar shape="square" size="small" icon="person-outline" />
    </div>
  </div>
</template>
```