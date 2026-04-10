<cn>
### 多彩
使用 `color` 可以衍生出更多的变体按钮。
</cn>
<en>
### Color Variants
Use `color` to create more button variants.
</en>

```vue
<template>
  <Flex size="small" wrap>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="solid"> Solid </Button>
    </Flex>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="outline"> Outline </Button>
    </Flex>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="dashed"> Dashed </Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
const colors = [
  "default",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "volcano",
  "violet",
  "cyan",
  "gold",
  "lime",
  "magenta",
  "purple",
  "pink",
  "brown",
];
</script>
```
