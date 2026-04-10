<cn>
### 图标
可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。
 </cn>
<en>
### Icon
You can set the `icon` attribute or directly use the Icon component inside the Tag.
 </en>

```vue
<template>
  <Space wrap>
    <Tag :icon="LogoX" color="#55acee">Twitter</Tag>
    <Tag :icon="LogoYoutube" color="#cd201f">Youtube</Tag>
    <Tag :icon="LogoQq" color="red">QQ</Tag>
    <Tag :icon="LogoWechat" closeable color="green">Wechat</Tag>
  </Space>
</template>
<script setup lang="ts">
import { LogoX, LogoYoutube, LogoQq, LogoWechat } from "kui-icons";
</script>
```
