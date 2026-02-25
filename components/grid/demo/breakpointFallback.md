<cn>
### 复杂表单响应式 (Breakpoint Fallback)
断点的向上/向下寻找逻辑。例如：定义了 md 没定义 lg，系统是否能正确应用 md 的值。
</cn>
<en>
### Complex Form Responsiveness (Breakpoint Fallback)
The logic for finding breakpoints up or down. For example, if `md` is defined but `lg` is not, can the system correctly apply the `md` value?
</en>

```vue
<template>
  <Grid :cols="{ xs: 1, md: 4, xl: 6 }" :xGap="20" :yGap="20">
    <!-- 手机占满, 平板占2格, 电脑占1格  -->
    <GridItem :span="{ xs: 1, md: 2, xl: 1 }">
      <Input placeholder="Project name" />
    </GridItem>

    <!-- 测试：未定义 lg，应回退到 md 的 2 格 -->
    <GridItem :span="{ xs: 1, md: 2 }">
      <Input placeholder="Person in charge" />
    </GridItem>

    <!-- Offset 测试：在桌面端留空一格 -->
    <GridItem :span="{ md: 2 }" :offset="{ md: 1 }">
      <Input placeholder="Remark" />
    </GridItem>
  </Grid>
</template>
```
