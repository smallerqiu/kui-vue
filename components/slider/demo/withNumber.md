<cn>
#### 受控
受控和 Input 同步。
</cn>

```vue
<template>
  <div>
    <Row>
      <Col :span="12">
        <Slider v-model="n1" :min="1" :max="20" />
      </Col>
      <Col :span="4">
        <InputNumber v-model="n1" :min="1" :max="20" style="margin-left: 16px" />
      </Col>
    </Row>
    <Row>
      <Col :span="12">
        <Slider v-model="n2" :min="0" :max="1" :step="0.01" />
      </Col>
      <Col :span="4">
        <InputNumber
          v-model="n2"
          :min="0"
          :max="1"
          :step="0.01"
          style="margin-left: 16px"
        />
      </Col>
    </Row>
  </div>
</template>
<script lang="ts">
export default ({
  data() {
    return {
      n1:1,
      n2:0,
    };
  },
});
</script>
```