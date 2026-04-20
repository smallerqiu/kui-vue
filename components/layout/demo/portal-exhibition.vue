<template>
  <Layout class="portal-layout">
    <Header class="portal-header">
      <div class="container">
        <Space class="logo"><Icon :type="LogoKui" :size="20" />KUI PRO</Space>
        <Menu mode="horizontal" class="portal-menu">
          <MenuItem key="home">Home</MenuItem>
          <MenuItem key="comp">Components</MenuItem>
          <MenuItem key="resource">Resources</MenuItem>
          <MenuItem key="community">Community</MenuItem>
        </Menu>
        <Space class="actions">
          <Button size="small">Sign in</Button>
          <Button type="primary" size="small">Get started</Button>
        </Space>
      </div>
    </Header>

    <Content>
      <Carousel :loop="true">
        <CarouselItem v-for="_ in 3" style="height: 300px">
          <div class="hero">
            <h1>Connecting beauty with technology</h1>
            <p>A minimalist enterprise-grade UI component library for Vue 3</p>
          </div>
        </CarouselItem>
      </Carousel>
      <div class="container content-main">
        <Row :gutter="24">
          <Col :span="8" v-for="i in 3" :key="i">
            <Card title="Feature Showcase">
              <p>Powered by native CSS Variables, it supports instant theme switching.</p>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>

    <Footer class="portal-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h4>About KUI</h4>
          <p>Committed to delivering the ultimate developer experience</p>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <a>Design draft</a><br /><a>Change logs</a>
        </div>
        <div class="footer-col">
          <h4>Help</h4>
          <a>Report Bug</a><br /><a>Q & A</a>
        </div>
      </div>
      <Divider />
      <div class="copyright">Copyright © 2026 KUI Team. All Rights Reserved.</div>
    </Footer>
  </Layout>
</template>
<script setup lang="ts">
import { LogoKui } from "kui-icons";
</script>
<style scoped>
.portal-layout {
  padding: 20px;
  border: 1px solid var(--kui-color-border);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 100%;
}
.portal-header {
  background: var(--kui-color-bg);
  border-bottom: 1px solid var(--kui-color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}
.portal-menu {
  flex: 1;
  border-bottom: none;
  justify-content: center;
}
.hero {
  background: linear-gradient(135deg, #188fff7f 0%, #096dd927 100%);
  padding: 80px 0;
  text-align: center;
}
.hero h1 {
  font-size: 48px;
  margin-bottom: 16px;
}
.content-main {
  padding: 64px 0;
}
.portal-footer {
  /* background: var(--kui-color-bg-3); */
  padding: 48px 0 24px;
}
.footer-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.footer-col h4 {
  margin-bottom: 16px;
}
.copyright {
  text-align: center;
  font-size: 12px;
}
</style>
