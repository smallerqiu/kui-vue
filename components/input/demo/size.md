<cn>
#### 尺寸
`large` 为大尺寸， `mini` 为小尺寸
</cn>

```tpl
<template>
  <div>
    <Input type="text"  placeholder="Large Input" large icon="logo-apple" icon-align="left" clearable/>
    <Input type="text" placeholder="Base Input" icon="logo-apple" clearable icon-align="left"/>
    <Input type="text" mini placeholder="Mini Input" icon="logo-apple" @icon-click="$Message.info('点击图标事件')" clearable icon-align="left"/>
  </div>
</template>
```