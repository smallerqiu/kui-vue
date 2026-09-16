<template>
  <Grid :cols="12" :rows="8" :style="{ height: '400px', background: 'var(--kui-color-bg-5)' }">
    <!-- 背景：占据全部格子 -->
    <GridItem :span="12" :row-span="8" :column-start="1" :row-start="1">
      <div class="hero-backdrop" />
    </GridItem>

    <!-- 文字内容：浮动在图片正中心，占据中间 6 列和中间 4 行  -->
    <GridItem
      :span="{ xs: 10, md: 6 }"
      :row-span="4"
      :column-start="{ xs: 2, md: 4 }"
      :row-start="3"
      :style="{
        background: 'var(--kui-color-bg-3)',
        zIndex: 1,
        padding: '20px',
      }"
    >
      <h1>Commercial-grade advertising slogan</h1>
      <p>Grid 布局让叠加效果变得简单，无需大量 absolute 定位。</p>
    </GridItem>
  </Grid>
</template>

<style scoped>
.hero-backdrop {
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 75% 25%, var(--kui-color-primary), transparent 35%),
    linear-gradient(135deg, var(--kui-color-bg-3), var(--kui-color-bg-5));
}
</style>
