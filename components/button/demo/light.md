<cn>
#### 浅色主题
浅色主题
</cn>

```vue
<template>
  <Space>
    <Button type="primary" theme="light">Primary</Button>
    <Button type="danger" theme="light">Danger</Button>
    <Button type="warning" theme="light">Warning</Button>
    <Button theme="light">Default</Button>
  </Space>
  <br />
  <br />
  <Space>
    <Button type="primary" theme="light" :icon="Camera"></Button>
    <Button type="danger" theme="light" :icon="Camera"></Button>
    <Button type="warning" theme="light" :icon="Camera"></Button>
    <Button theme="light" :icon="Camera"></Button>
  </Space>
  <br />
  <br />
  <Space>
    <Button type="primary" theme="light" :icon="Camera" shape="circle"></Button>
    <Button type="danger" theme="light" :icon="Camera" shape="circle"></Button>
    <Button type="warning" theme="light" :icon="Camera" shape="circle"></Button>
    <Button theme="light" :icon="Camera" shape="circle"></Button>
  </Space>
</template>
<script setup>
import { Camera } from "kui-icons";
</script>
```
