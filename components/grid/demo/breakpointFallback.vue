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