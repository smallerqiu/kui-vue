<cn>
### 过滤 和 搜索
通过设置 `filterable` 值来呈现过滤模式
</cn>

```vue
<template>
  <Space vertical block>
    <span>单选过滤 :</span>
    <Select v-model="value1" block placeholder="单选过滤" filterable>
      <Option :value="v" :label="v" v-for="(v, i) in options" :key="i" />
    </Select>
    <br />
    <span>多选过滤 :</span>
    <Select
      class="demo-select"
      multiple
      :maxTagCount="3"
      block
      v-model="value2"
      placeholder="多选过滤"
      filterable
    >
      <Option :value="v" :label="v" v-for="(v, i) in options" :key="i" />
    </Select>
    <br />
    <span>单选搜索: </span>
    <Select
      v-model="value3"
      @search="fetchData"
      block
      :loading="loading"
      placeholder="单选搜索"
    >
      <Option :value="v" :label="v" v-for="(v, i) in optionsData" :key="i" />
    </Select>
    <br />
    <span>多选搜索</span>
    <Select
      multiple
      block
      :maxTagCount="3"
      :loading="loading"
      @search="fetchData"
      v-model="value4"
      placeholder="多选过滤"
    >
      <Option :value="v" :label="v" v-for="(v, i) in optionsData" :key="i" />
    </Select>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("");
const value2 = ref([]);
const value3 = ref("");
const value4 = ref([]);

const loading = ref(false);

const optionsData = ref([]);
const fetchData = (e) => {
  loading.value = true;
  setTimeout(() => {
    optionsData.value = options.filter((v) =>
      v.includes(e.target.value.trim())
    );
    loading.value = false;
  }, 1000);
};

const options = [
  "almond",
  "apple",
  "apple core",
  "apple juice",
  "apple skin",
  "apricot",
  "apricot flesh",
  "apricot pit",
  "areca nut",
  "banana",
  "banana skin",
  "bargain price",
  "beechnut",
  "Beijing flowering crab",
  "bitter",
  "bitterness",
  "bitter orange",
  "blackberry",
  "canned fruit",
  "carambola",
  "cherry",
  "cherry pit",
  "cherry pulp",
  "chestnut",
  "Chinese chestnut",
  "Chinese date",
  "Chinese gooseberry",
  "Chinese walnut",
  "coconut",
  "coconut milk",
  "coconut water",
  "cold storage",
  "cold store",
  "crisp",
  "cumquat",
  "damson plum",
  "Dangshan pear",
  "date",
  "date pit",
  "decayed fruit",
  "downy pitch",
  "dry fruit",
  "duke",
  "early-maturing",
  "fig",
  "filbert",
  "first class",
  "flat peach",
  "flavour",
  "flesh",
  "flesh fruit",
  "fresh",
  "fresh litchi",
  "fruiterer",
  "fruit in bags",
  "fruit knife",
  "fruits of the season",
  "gingko",
  "give full weigh",
  "give short weight",
  "grape",
  "grape juice",
  "grape skin",
  "grapestone",
  "greengage",
  "Hami melon",
  "Hard",
  "haw",
  "hawthorn",
  "hazel",
  "honey peach",
  "in season",
  "juicy",
  "juicy peach",
  "jujube",
  "kernel",
  "kumquat",
  "late-maturing",
  "lemon",
  "litchi",
  "litchi rind",
  "longan",
  "longan pulp",
  "loquat",
  "mandarine",
  "mango",
  "mature",
  "morello",
  "muskmelon",
  "navel orange",
  "nut",
  "nut meat",
  "nut shell",
  "oleaster",
  "olive",
  "orange",
  "orange peel",
  "papaya",
  "peach",
  "pear",
  "perishable",
  "pineapple",
  "plum",
  "plumcot",
  "pomegranate",
  "pomelo",
  "red bayberry",
  "reduced price",
  "ripe",
  "rotten fruit",
  "seasonable",
  "seedless orange",
  "special-grade",
  "strawberry",
  "sultana",
  "superfine",
  "tangerine",
  "tart",
  "tender",
  "tinned fruit",
  "unripe",
  "walnut",
  "walnut kernel",
  "water chestnut",
  "watermelon",
];
</script>
```
