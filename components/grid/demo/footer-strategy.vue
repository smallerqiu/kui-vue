<template>
  <Grid :cols="{ xs: 1, sm: 2, md: 5 }" :yGap="30">
    <GridItem :span="{ xs: 1, md: 2 }">
      <h3>公司品牌 Logo</h3>
      <p>致力于提供全球领先的 Grid 解决方案。</p>
    </GridItem>

    <!-- 下面三个在 md 以上各占 1 列，在 sm 占 1/2，在 xs 占满 -->
    <GridItem>
      <h4>产品</h4>
      <ul>
        <li>功能 1</li>
        <li>功能 2</li>
      </ul>
    </GridItem>
    <GridItem>
      <h4>支持</h4>
      <ul>
        <li>文档</li>
        <li>社区</li>
      </ul>
    </GridItem>
    <GridItem>
      <h4>联系我们</h4>
      <div class="social-icons">...</div>
    </GridItem>
  </Grid>
</template>