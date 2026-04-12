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