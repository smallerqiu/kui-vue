<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <div style="width:512px;">
    <Input placeholder="Large Input" size="large" icon="logo-apple" icon-align="left" clearable/>
    <Input placeholder="Base Input" icon="logo-apple" clearable icon-align="left"/>
    <Input size="small" placeholder="Small Input" icon="logo-apple" @icon-click="$Message.info('点击图标事件')" clearable icon-align="left"/>
  </div>
</template>
```