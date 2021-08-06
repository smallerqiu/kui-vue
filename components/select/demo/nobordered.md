<cn>
#### 无边框
无边框样式。
</cn>

```vue
<template>
  <div>
    <Select :width="200" clearable value="2" :bordered="false">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <Select :width="200" size="small" clearable value="2" disabled :bordered="false">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
    <Select :width="200" :showArrow="false" placeholder="隐藏下拉箭头" />
  </div>
</template>
```