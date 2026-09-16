<template>
  <Grid :cols="{ xs: 1, md: 4, xl: 6 }" :x-gap="20" :y-gap="20">
    <!-- 手机占满, 平板占2格, 电脑占1格  -->
    <GridItem :span="{ xs: 1, md: 2, xl: 1 }">
      <Input placeholder="Project name" />
    </GridItem>

    <!-- 测试：未定义 lg，应回退到 md 的 2 格 -->
    <GridItem :span="{ xs: 1, md: 2 }">
      <Input placeholder="Person in charge" />
    </GridItem>

    <!-- 在 md 及更大容器中明确从第 2 列开始 -->
    <GridItem :span="{ md: 2 }" :column-start="{ md: 2 }">
      <Input placeholder="Remark" />
    </GridItem>
  </Grid>
</template>
