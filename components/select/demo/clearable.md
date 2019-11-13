<cn>
#### 可清除
通过 `clearable` 可控制组件是否显示清除按钮
</cn>

```tpl
<template>
  <div>
    <Select :width="200" clearable>
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <Select :width="200" mini clearable>
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
  </div>
</template>
```