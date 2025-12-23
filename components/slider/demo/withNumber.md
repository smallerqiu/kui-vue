<cn>
### 受控
受控和 Input 同步。
</cn>

```vue
<template>
  <div>
    <Row>
      <Col :span="12">
        <Slider v-model:value="n1" :min="1" :max="20" />
      </Col>
      <Col :span="4">
        <InputNumber
          v-model="n1"
          :min="1"
          :max="20"
        />
      </Col>
    </Row>
    <Row>
      <Col :span="12">
        <Slider v-model:value="n2" :min="0" :max="1" :step="0.01" />
      </Col>
      <Col :span="4">
        <InputNumber
          v-model:value="n2"
          :min="0"
          :max="1"
          :step="0.01"
        />
      </Col>
    </Row>
  </div>
</template>
<script setup>
import { ref } from "vue";
const n1 = ref(1);
const n2 = ref(0);
</script>
```
