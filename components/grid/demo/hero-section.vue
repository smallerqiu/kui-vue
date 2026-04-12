<template>
  <Grid :cols="12" :rows="8" :style="{ height: '400px', background: 'var(--kui-color-bg-5)' }">
    <!-- 背景图片：占据全部格子  -->
    <GridItem :span="12" :rowSpan="8" :style="{ gridColumnStart: 1, gridRowStart: 1 }">
      <img
        src="https://cdn.chuchur.com/upload/2017/kui-for-vue.jpg"
        :style="{ width: '100%', height: '100%', objectFit: 'cover' }"
      />
    </GridItem>

    <!-- 文字内容：浮动在图片正中心，占据中间 6 列和中间 4 行  -->
    <GridItem
      :span="{ xs: 10, md: 6 }"
      :rowSpan="4"
      :style="{
        gridColumnStart: 'calc(50% - 3)',
        gridRowStart: 3,
        background: 'var(--kui-color-bg-3)',
        zIndex: 1,
        padding: '20px',
      }"
    >
      <h1>商用级广告语</h1>
      <p>Grid 布局让叠加效果变得简单，无需大量 absolute 定位。</p>
    </GridItem>
  </Grid>
</template>