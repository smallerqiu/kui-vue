<cn>
#### 带图标
通过添加 `icon` 属性 设置按钮按钮图标。
</cn>

```tpl
<template>
  <div>
    <Button type="primary" icon="ios-search">搜索</Button>
    <Button type="success"><Icon type="ios-arrow-back"/> Backward</Button>
    <Button type="danger" hollow>Forward <Icon type="ios-arrow-forward"/></Button>
    <Button type="primary" icon="ios-play" circle />
    <Button type="primary" icon="ios-pause" />
    <Button type="primary" icon="ios-square" />
  </div>
</template>
```