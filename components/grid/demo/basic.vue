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