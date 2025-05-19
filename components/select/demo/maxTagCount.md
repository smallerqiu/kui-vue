<cn>
#### 最多显示多少个选项
maxTagCount 也可以设置成响应式，但响应式对性能有所消耗，不推荐在大表单场景下使用。
</cn>

```vue
<template>
  <div class="demo-select">
    <Space>
      <Button @click="maxTagCount++" type="primary">maxTagCount++</Button>
      <Button @click="maxTagCount--" type="primary">maxTagCount--</Button>
    </Space>
    <p>maxTagCount : {{maxTagCount}}</p>
    <Select :width="300" v-model:value="data" :maxTagCount="maxTagCount" placeholder="单选过滤" multiple>
      <Option :value="v" :label="v" v-for="(v, i) in options" :key="i" />
    </Select>
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref(['apple','banana','pear','orange','pineapple','watermelon']);
const maxTagCount = ref(3);
const options = ['almond', 'apple', 'apple core', 'apple juice', 'apple skin', 'apricot', 'apricot flesh', 'apricot pit', 'areca nut', 'banana', 'banana skin', 'bargain price', 'beechnut', 'Beijing flowering crab', 'bitter', 'bitterness', 'bitter orange', 'blackberry', 'canned fruit', 'carambola', 'cherry', 'cherry pit', 'cherry pulp', 'chestnut', 'Chinese chestnut', 'Chinese date', 'Chinese gooseberry', 'Chinese walnut', 'coconut', 'coconut milk', 'coconut water', 'cold storage', 'cold store', 'crisp', 'cumquat', 'damson plum', 'Dangshan pear', 'date', 'date pit', 'decayed fruit', 'downy pitch', 'dry fruit', 'duke', 'early-maturing', 'fig', 'filbert', 'first class', 'flat peach', 'flavour', 'flesh', 'flesh fruit', 'fresh', 'fresh litchi', 'fruiterer', 'fruit in bags', 'fruit knife', 'fruits of the season', 'gingko', 'give full weigh', 'give short weight', 'grape', 'grape juice', 'grape skin', 'grapestone', 'greengage', 'Hami melon', 'Hard', 'haw', 'hawthorn', 'hazel', 'honey peach', 'in season', 'juicy', 'juicy peach', 'jujube', 'kernel', 'kumquat', 'late-maturing', 'lemon', 'litchi', 'litchi rind', 'longan', 'longan pulp', 'loquat', 'mandarine', 'mango', 'mature', 'morello', 'muskmelon', 'navel orange', 'nut', 'nut meat', 'nut shell', 'oleaster', 'olive', 'orange', 'orange peel', 'papaya', 'peach', 'pear', 'perishable', 'pineapple', 'plum', 'plumcot', 'pomegranate', 'pomelo', 'red bayberry', 'reduced price', 'ripe', 'rotten fruit', 'seasonable', 'seedless orange', 'special-grade', 'strawberry', 'sultana', 'superfine', 'tangerine', 'tart', 'tender', 'tinned fruit', 'unripe', 'walnut', 'walnut kernel', 'water chestnut', 'watermelon']
</script>
```