<cn>
#### 对齐方式
设置对齐模式。
</cn>

```vue
<template>
  <Flex vertical size="small" align="start">
    <span>Justify</span>
    <RadioGroup v-model="justify" theme="card" type="button">
      <RadioButton v-for="(item,index) in justifyOps" :key="index" :value="item">{{item}}</RadioButton>
    </RadioGroup>
    <span>Align</span>
    <RadioGroup v-model="align" theme="card" type="button">
      <RadioButton v-for="(item,index) in alignOps" :key="index" :value="item">{{item}}</RadioButton>
    </RadioGroup>
    <Flex :align="align" :justify="justify" :style="{width:'100%',height:'120px',border:'1px solid var(--kui-color-main)','border-radius':'5px'}">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Flex>
  </Flex>
</template>
<script>
export default{
  data() {
    return {
      justify:'flex-start',
      align:'flex-start',
      justifyOps:['flex-start','center','flex-end','space-between','space-around','space-evenly'],
      alignOps:['flex-start','center','flex-end']
    }
  }
}
</script>
```