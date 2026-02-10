<cn>
### 复杂数据详情页（对齐与留白）
描述列表（Descriptions）的效果，但在不同屏幕下自动调整展示密度。
</cn>
<en>
### Align and White Space
</en>

```vue
<template>
  <Grid :cols="{ xs: 1, sm: 2, lg: 3, xxl: 4 }" :xGap="32" :yGap="16">
    <GridItem>
      <label>订单编号：</label><span>20240501001</span>
    </GridItem>
    <GridItem>
      <label>状态：</label><span class="status-tag">已发货</span>
    </GridItem>
    
     <!-- 在大屏幕上，“地址”占据较长空间，保持视觉平衡 -->
    <GridItem :span="{ xs: 1, lg: 2 }">
      <label>收货地址：</label>
      <span>上海市浦东新区某某路 999 号某某大厦 B 座 12 楼</span>
    </GridItem>

    <GridItem>
      <label>更新时间：</label><span>2024-05-01 12:00</span>
    </GridItem>
  </Grid>
</template>
```
