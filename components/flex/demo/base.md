<cn>
#### 基本布局 
最简单的用法。
</cn>

```vue
<template>
  <Flex vertical size="middle">
    <RadioGroup v-model="value">
      <Radio value="horizontal">horizontal</Radio>
      <Radio value="vertical">vertical</Radio>
    </RadioGroup>
    <Flex :vertical="value=='vertical'">
      <div v-for="x in 4" :style="{'background-color':'var(--kui-color-main)',opacity:(x%2?1:0.8),height:'40px',width:'25%'}"></div>
    </Flex>
  </Flex>
</template>
<script>
export default{
  data() {
    return {
      value: 'horizontal',
    }
  }
}
</script>
```