<cn>
### 基本用法
简单的展示。
</cn>

```vue
<template>
  <Space wrap vertical>
    <code>Image</code>
    <KImage
      :width="120"
      :height="120"
      src="https://cdn.chuchur.com/upload/demo/test_300.jpg"
    />
    <code>Media</code>
    <KImage
      :width="120"
      :height="120"
      type="media"
      src="https://cdn.chuchur.com/upload/demo/test_300.jpg"
      origin="https://cdn.chuchur.com/upload/demo/test.mp4"
    />
    <code>加载大图</code>
    <KImage
      :width="120"
      :height="120"
      src="https://cdn.chuchur.com/upload/demo/test_300.jpg"
      origin="https://cdn.chuchur.com/upload/demo/test.jpg"
    />
  </Space>
</template>
```
