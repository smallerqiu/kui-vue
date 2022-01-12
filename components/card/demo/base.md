<cn>
#### 基本用法
通过 `title` 和 `icon` 可设置标题和图标
</cn>

```vue
<template>
  <div>
    <Card title="卡片标题" icon="heart" bordered>
      <a slot="extra" href="#">更多</a>
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