Code snippet
<template>
  <div class="demo-container">
    <h1 class="demo-title">Technical Specifications Matrix</h1>

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
          <span>Learn more parameters →</span>
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    id: 1,
    title: "Self-developed M3 Max Chip",
    desc: "Unparalleled computing power to effortlessly handle professional workflows.",
    span: { xs: 2, md: 3, xl: 4 }, // 桌面占一半宽
    rowSpan: 3, // 高度占 3 个单位
    color: "var(--kui-color-bg-4)",
    textColor: "#fff",
  },
  {
    id: 2,
    title: "Extended Battery Life",
    desc: "Up to 22 hours of video playback.",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 2,
    color: "#f5f5f7",
  },
  {
    id: 3,
    title: "5G Ultra High Speed",
    desc: "Enjoy lightning-fast speeds anytime, anywhere.",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 1,
    color: "#e8e8ed",
  },
  {
    id: 4,
    title: "Retina Display",
    desc: "Vibrant colors, every detail revealed.",
    span: { xs: 2, md: 3, xl: 4 },
    rowSpan: 2,
    color: "#fff",
    border: "1px solid var(--kui-color-border)",
  },
  {
    id: 5,
    title: "Privacy Protection",
    desc: "Your data, under your control.",
    span: { xs: 1, md: 3, xl: 2 },
    rowSpan: 2,
    color: "#f2f2f2",
  },
  {
    id: 6,
    title: "Multi-Device Collaboration",
    desc: "Seamless connection, double the efficiency.",
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
