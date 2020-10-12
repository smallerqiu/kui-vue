<cn>
#### 尺寸
`large` 为大尺寸， `mini` 为小尺寸
</cn>

```vue
<template>
  <div>
    <Input placeholder="Large Input" large icon="logo-apple" icon-align="left" clearable/>
    <Input placeholder="Base Input" icon="logo-apple" clearable icon-align="left"/>
    <Input mini placeholder="Mini Input" icon="logo-apple" @icon-click="$Message.info('点击图标事件')" clearable icon-align="left"/>
  </div>
</template>
```