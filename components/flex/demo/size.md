<cn>
#### 间距大小
使用 size 设置元素之间的间距，预设了 small、middle、large 三种尺寸，也可以自定义间距。
</cn>

```vue
<template>
  <Flex vertical size="middle">
    <RadioGroup v-model="size" @change="sizeChange">
      <Radio value="small" label="small" />
      <Radio value="middle" label="middle" />
      <Radio value="large" label="large" />
      <Radio value="customize" label="customize" />
    </RadioGroup>
    <Slider v-model="gap" :step="1" :max="50" v-if="size==='customize'" @change="gapChange"/>
    <Flex :size="flexSize">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Flex>
  </Flex>
</template>
<script setup>
import { ref } from "vue";
const size = ref('small')
const flexSize = ref('small')
const gap = ref(8)

const gapChange =()=>{
  flexSize.value = gap.value
}
const sizeChange = ({value})=>{
  if(value!='customize'){
    flexSize.value = value
  }
}
</script>
```