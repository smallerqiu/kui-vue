<cn>
#### 多彩
使用 `color` 可以衍生出更多的变体按钮。
</cn>

```vue
<template>
  <Flex size="small" wrap>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="solid">
        Solid
      </Button>
    </Flex>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="outline">
        Outline
      </Button>
    </Flex>
    <Flex size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="dashed">
        Dashed
      </Button>
    </Flex>
  </Flex>
</template>
<script setup>
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
  "gray",
];
</script>
```
