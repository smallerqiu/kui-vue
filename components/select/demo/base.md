<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```tpl
<template>
  <div>
    <Select :width="200" v-model="select">
      <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" />
    </Select>
    <Button @click="select=''" mini>Clear</Button>
    <Button @click="select=1" mini>Choose orange</Button>
    <br />
    <Select :width="200">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" disabled/>
      <Option value="4" label="Pear" />
    </Select>
    <br />
    <Select :width="200" value="1" disabled>
      <Option value="1" label="Chuchur" />
    </Select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: 2,
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
    };
  }
}
</script> 
```