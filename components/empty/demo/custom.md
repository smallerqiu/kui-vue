<cn>
### 自定义
自定义图片、描述、附属内容。
</cn>
<en>
### Custom
Customize the image, description, and extra content.
</en>

```vue
<template>
  <Space vertical block>
    <Empty
      image="https://cdn.chuchur.com/img/thumb.png"
      description="No image"
      :imageStyle="{ height: '60px' }"
    >
      <Button type="primary" circle :icon="Add" size="small">Upload a image</Button>
    </Empty>
    <br />z
    Use slot
    <br />
    <Empty>
      <template #description>Currently no <a>images</a></template>
      <template #image>
        <img src="https://cdn.chuchur.com/img/thumb.png" style="height:60px" />
      </template>
      <Button type="primary" circle :icon="Add" size="small">Upload a image</Button>
    </Empty>
  </Space>
</template>
<script setup lang="ts">
import { Add } from "kui-icons";
</script>
```
