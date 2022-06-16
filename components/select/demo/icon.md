<cn>
#### 带图标
可以自定义图标
</cn>

```vue
<template>
  <div> 
    <Select :width="200" icon="search" v-model="select"  theme="light" arrow-icon="caret-down" :options="data"/>
    <Button @click="select=''" size="small">Clear</Button>
    <Button @click="select=1" size="small">Choose orange</Button>
    <br />
    <Select :width="200" icon="location" arrow-icon="chevron-down-circle-outline">
      <Option :value="1" label="Apple" />
      <Option :value="2" label="Orange" />
      <Option :value="3" label="Banana" disabled/>
      <Option :value="4" label="Pear" />
    </Select>
    <br />
    <Select :width="200" value="1" disabled icon="search">
      <Option value="1" label="disabled" />
    </Select>
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