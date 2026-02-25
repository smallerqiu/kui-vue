<cn>
### 基本用法

> Grid 的 `offset` 逻辑是基于 `grid-column-start` 的偏移。在 `dense` 填充模式下，`offset` 可能会导致意想不到的“插空”行为。

</cn>
<en>
### Basic Usage

> The `offset` logic of Grid is based on `grid-column-start`. In `dense` fill mode, `offset` might cause unexpected "gap-filling" behavior.

</en>

```vue
<template>
  <Grid :cols="{ xs: 1, md: 2, lg: 4 }" :xGap="16" :yGap="16">
    <GridItem :span="2">
      <div class="box">Occupies 2 columns</div>
    </GridItem>
    <GridItem :offset="1">
      <div class="box">Offset by 1 column</div>
    </GridItem>
    <GridItem suffix>
      <div class="box">Always at the end</div>
    </GridItem>
  </Grid>
</template>
<style lang="less">
.box {
  padding: 8px;
  font-size: 12px;
  background: var(--kui-color-bg-3);
}
</style>
```
