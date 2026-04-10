<cn>
### 布局层级设计 (Architecture)
- 第一层：Layout 系列 —— 页面大骨架（Header + Sider + Content）。

- 第二层：Grid 系列 —— 内容区的主要 2D 布局（统计卡片、Bento 图表矩阵）。

- 第三层：Row/Col —— 简单的 1D 比例划分（如底部的两个并排表格）。

- 第四层：Flex —— 极细微的内容对齐（卡片标题 + 图标）。
  </cn>

<en>
### Layout Hierarchy Design (Architecture)
- Layer 1: Layout series — the main page skeleton (Header + Sider + Content).

- Layer 2: Grid series — the primary 2D layout for the content area (stat cards, Bento chart matrix).

- Layer 3: Row/Col — simple 1D proportional division (e.g., two side-by-side tables at the bottom).

- Layer 4: Flex — extremely fine-grained content alignment (card title + icon).
  </en>

```vue
<template>
  <Layout>
    <Sider class="k-sider">Sider Menu</Sider>

    <Content class="k-layout-content">
      <Layout>
        <Header class="k-header">
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }"
          >
            <span>控制台 / 实时监控</span>
            <div :style="{ display: 'flex', gap: '12px' }">
              <Button>刷新数据</Button>
              <Button class="primary">导出报告</Button>
            </div>
          </div>
        </Header>

        <Content class="k-main-body">
          <h2 class="section-title">核心指标 (Grid 布局)</h2>
          <Grid
            :cols="{ xs: 2, md: 4, xl: 6 }"
            :x-gap="16"
            :y-gap="16"
            auto-rows="140px"
            :style="{ gridAutoFlow: 'dense', marginBottom: '32px' }"
          >
            <GridItem :span="{ xs: 2, md: 4, xl: 4 }" :row-span="3">
              <div class="chart-card main-chart">实时流量趋势 (大块)</div>
            </GridItem>

            <GridItem v-for="i in 4" :key="i" :span="{ xs: 1, md: 2, xl: 2 }" :row-span="1">
              <StatCard :title="`📈 指标 ${i}`" :items="[{ value: 1234 + i }]"> </StatCard>
            </GridItem>

            <GridItem :span="{ xs: 2, md: 2, xl: 2 }" :row-span="2">
              <Card title="动态更新" />
              <div class="chart-card secondary">动态更新</div>
            </GridItem>
          </Grid>

          <h2 class="section-title">详细列表 (Row/Col 布局)</h2>
          <Row :gutter="16">
            <Col :span="16">
              <div class="table-placeholder">主要数据表格 (占 2/3)</div>
            </Col>
            <Col :span="8">
              <div class="table-placeholder">辅助操作面板 (占 1/3)</div>
            </Col>
          </Row>
        </Content>

        <Footer class="k-footer">©2026 Grid Layout Pro</Footer>
      </Layout>
    </Content>
  </Layout>
</template>
<style scoped>
.k-layout {
  height: 100vh;
  background: var(--kui-color-bg-container);
}
.k-sider {
  width: 200px;
  background: var(--kui-color-bg-layout);
  padding: 20px;
}
.k-layout-content {
  overflow-y: auto;
}
.k-header {
  height: 64px;
  background: var(--kui-color-bg-1);
  display: flex;
  align-items: center;
  padding: 10px 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.k-main-body {
  padding: 24px;
  flex: 1;
}
.k-footer {
  text-align: center;
  padding: 24px;
  color: var(--kui-color-text-description);
}

.section-title {
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: 600;
}

/* 卡片样式 */
.k-stat-card,
.k-card {
  height: 100%;
}
.chart-card,
.table-placeholder {
  background: var(--kui-color-bg-component);
  height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}
.main-chart {
  border-radius: 8px;
  padding: 20px;
  background: var(--kui-color-bg-component);
  border: 1px dashed var(--kui-color-primary);
}

.card-value {
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
}
.table-placeholder {
  border-radius: 8px;
  padding: 20px;
  min-height: 300px;
  border: 1px solid var(--kui-color-border);
}
</style>
```
