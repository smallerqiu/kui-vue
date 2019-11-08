 
<template>
  <div style="padding:0px;">
    <!-- <Row>
      <Col>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" hollow>hollow</Button>
      <Button type="primary" circle>circle</Button>
      <Button type="link" circle>link</Button>

      <Button type="primary" icon="ios-search">搜索</Button>
      <Button type="success" icon="ios-arrow-back">Backward</Button>
      <Button type="danger" icon="ios-arrow-forward" icon-align="right">Forward</Button>
      <Button type="primary" icon="ios-play" circle />
      <Button type="primary" icon="ios-pause" />
      <Button type="primary" icon="ios-square" />
      <Button type="primary" icon="ios-search" loading>loading</Button>
      </Col>
    </Row> -->
    <Alert type="success">Success Text</Alert>
    <Alert type="info">Info Text</Alert>
    <Alert type="warning">Warning Text</Alert>
    <Alert type="error">Error Text</Alert>
  </div>
</template>

<script> 
// import Button from '../../src/components/button'
export default {
  // components: { Button },
  data() {
    return {
      theme: 'light',
    }
  },
  mounted() {
  },
  methods: {
    test2() {
      this.a = true
    },
    test() {
      this.b = 3
    }
  }
}
</script>

