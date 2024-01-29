<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <Select :width="200" v-model="select" :options="data">
      <!-- <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" /> -->
    </Select>
    <Button @click="select=''" size="small">Clear</Button>
    <Button @click="select=1" size="small">Choose orange</Button>
    <br />
    <Space vertical>
      <Select :width="200" placeholder="Please Choose">
        <Option :value="1" label="Apple" />
        <Option :value="2" label="Orange" />
        <Option :value="3" label="Banana" disabled/>
        <Option :value="4" label="Pear" />
      </Select>
      <Select :width="200" value="1" disabled>
        <Option value="1" label="disabled" />
      </Select>
    </Space>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: 2,
      data: [
        { label: "Apple", value: 0 },
        { label: "Orange", value: 1 },
        { label: "Banana", value: 2 },
        { label: "Pear", value: 3 },
      ],
    };
  }
}
</script> 
```