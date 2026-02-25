<cn>
### 图片画廊 / 瀑布流（Bento Grid 风格）
非对称布局
</cn>
<en>
### Image Gallery / Masonry (Bento Grid Style)
Asymmetric layout.
</en>

```vue
Code snippet
<template>
  <div class="demo-container">
    <h1 class="demo-title">技术规格矩阵</h1>

    <Grid
      :cols="{ xs: 2, md: 6, xl: 8 }"
      :x-gap="20"
      :y-gap="20"
      auto-rows="120px"
      :style="{ gridAutoFlow: 'dense' }"
    >
      <GridItem v-for="item in features" :key="item.id" :span="item.span" :row-span="item.rowSpan">
        <div
          class="bento-card"
          :style="{
            backgroundColor: item.color,
            color: item.textColor || '#333',
            border: item.border || 'none',
          }"
        >
          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.desc }}</p>
          </div>
        </div>
      </GridItem>

      <GridItem suffix :span="{ xs: 2, md: 3, xl: 2 }">
        <div class="bento-cta">
          <span>了解更多参数 →</span>
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: "自研芯片 M3 Max",
    desc: "极致算力，从容应对专业级工作流。",
    span: { xs: 2, md: 3, xl: 4 }, // 桌面占一半宽
    rowSpan: 3, // 高度占 3 个单位
    color: "var(--kui-color-bg-4)",
    textColor: "#fff",
  },
  {
    id: 2,
    title: "超长续航",
    desc: "长达 22 小时视频播放。",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 2,
    color: "#f5f5f7",
  },
  {
    id: 3,
    title: "5G 超高速",
    desc: "随时随地，畅享疾速。",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 1,
    color: "#e8e8ed",
  },
  {
    id: 4,
    title: "Retina 显示屏",
    desc: "绚丽色彩，纤毫毕现。",
    span: { xs: 2, md: 3, xl: 4 },
    rowSpan: 2,
    color: "#fff",
    border: "1px solid var(--kui-color-border)",
  },
  {
    id: 5,
    title: "隐私保护",
    desc: "你的数据，由你掌控。",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 2,
    color: "#f2f2f2",
  },
  {
    id: 6,
    title: "多设备协作",
    desc: "无缝衔接，效率翻倍。",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 1,
    color: "#fafafa",
  },
];
</script>

<style scoped>
.demo-container {
  padding: 40px 20px;
  max-width: 100%;
  margin: 0 auto;
}

.demo-title {
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 2rem;
  color: var(--kui-color-text);
}

.bento-card {
  height: 100%;
  border-radius: 24px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.bento-card:hover {
  transform: scale(0.99);
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.card-desc {
  font-size: 1rem;
  opacity: 0.7;
  margin: 0;
  line-height: 1.4;
}

.bento-cta {
  background: var(--kui-color-primary);
  color: #fff;
  border-radius: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 32px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
```
