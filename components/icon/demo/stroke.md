<cn>
### 线条粗细
可以通过 `strokeWidth` 属性设置图标的线条。
</cn>
<en>
### Stroke Width
You can set the icon's stroke width via the `strokeWidth` attribute.
</en>

```vue
<template>
  <div>
    <Icon :type="ChevronDoubleForward" :strokeWidth="20" />
    <Icon :type="ChevronDoubleForward" />
    <Icon :type="ChevronDoubleForward" :strokeWidth="80" />
    <br />
    <Icon :type="ChevronForward" :strokeWidth="20" />
    <Icon :type="ChevronForward" />
    <Icon :type="ChevronForward" :strokeWidth="80" />
  </div>
</template>
<script setup lang="ts">
import { ChevronForward, ChevronDoubleForward } from "kui-icons";
</script>
```
