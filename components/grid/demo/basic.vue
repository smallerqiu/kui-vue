<template>
  <Grid :cols="{ xs: 2, md: 4 }" :x-gap="16" :y-gap="16">
    <GridItem :span="{ xs: 2, md: 2 }">
      <div class="box">Occupies 2 columns</div>
    </GridItem>
    <GridItem>
      <div class="box">Regular item</div>
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
