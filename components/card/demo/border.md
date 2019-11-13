<cn>
#### 基本用法
通过 `title` 和 `icon` 可设置标题和图标
</cn>

```tpl
<template>
  <div>
    <Card title="卡片标题" icon="ios-heart" bordered>
      <div slot="extra">
        <Tooltip content="我是一个苹果"><Icon type="logo-apple" size="20"/></Tooltip>
      </div>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>
```