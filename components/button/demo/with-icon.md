<cn>
#### 带图标
通过添加 `icon` 属性 设置按钮按钮图标。
</cn>

```vue
<template>
  <div>
    <Button type="primary" icon="search" circle></Button>
    <Button type="primary" icon="search">搜索</Button>
    <Button icon="search" circle></Button>
    <Button icon="search">搜索</Button>
    <Button type="dashed" icon="search" circle></Button>
    <Button type="dashed" icon="search">搜索</Button>
  </div>
</template>
```