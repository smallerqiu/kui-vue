<cn>
### 圣杯布局/管理后台 (Fixed Rows & Areas)
`rows` 和 `rowSpan` 的垂直控制力。</cn>
<en>
### Holy Grail Layout / Admin Panel (Fixed Rows & Areas)
The vertical control power of `rows` and `rowSpan`.
</en>

```vue
<template>
  <Grid :cols="4" rows="auto 1fr auto" class="demo-fixed-rows-areas">
    <!-- Header -->
    <GridItem :span="4" class="demo-grid-header"> Header (100% Width) </GridItem>

    <!-- Sidebar: 跨 1 行 -->
    <GridItem :span="1" row:span="1" class="demo-grid-sidebar"> Menu </GridItem>

    <!-- Main: 占 3 列 -->
    <GridItem :span="3" class="demo-grid-main"> Main Content (Auto Height) </GridItem>

    <!-- Footer: 强制置底 -->
    <GridItem :span="4" class="demo-grid-footer"> Footer </GridItem>
  </Grid>
</template>
<style lang="less" scoped>
.demo-fixed-rows-areas {
  height: 500px;
  border: 1px solid var(--kui-color-border);
  border-radius: 12px;
  overflow: hidden;
  .k-grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .demo-grid-header {
    height: 50px;
    background: var(--kui-color-bg-3);
    padding: 8px;
  }
  .demo-grid-sidebar {
    padding: 8px;
    background: var(--kui-color-bg-4);
  }
  .demo-grid-main {
    padding: 8px;
    background: var(--kui-color-bg-2);
  }
  .demo-grid-footer {
    background: var(--kui-color-bg-3);
    padding: 8px;
    height: 50px;
  }
}
</style>
```
