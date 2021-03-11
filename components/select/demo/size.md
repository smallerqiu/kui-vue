<cn>
#### 尺寸
通过 `width` 和 `size` 可控制组件尺寸大小
</cn>

```vue
<template>
  <div>
    <Select :width="200" size="large" clearable>
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <Select :width="200" >
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <Select :width="200" size="small">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
  </div>
</template>
```