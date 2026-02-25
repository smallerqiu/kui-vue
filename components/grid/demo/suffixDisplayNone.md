<cn>
### 响应式隐藏与强制排序 (Suffix & Display None)
`span: 0` 彻底移除 DOM 占位，`suffix` 跨越所有动态项。
</cn>
<en>
### Responsive Hiding & Forced Sorting (Suffix & Display None)
`span: 0` completely removes the DOM placeholder, and `suffix` spans across all dynamic items.
</en>

```vue
<template>
  <Grid :cols="{ xs: 2, md: 6 }" :xGap="8">
    <GridItem :span="2">
      <Input placeholder="Search keywords..." />
    </GridItem>

    <!-- 手机端隐藏的高 -->
    <GridItem :span="{ xs: 0, md: 2 }">
      <Select><Option :value="1">Filter</Option></Select>
    </GridItem>

    <!-- 无论前面隐藏了多少，搜索按钮始终在当前行末尾 -->
    <GridItem suffix :style="{ justifySelf: 'end' }">
      <Button>Query</Button>
    </GridItem>
  </Grid>
</template>
```
