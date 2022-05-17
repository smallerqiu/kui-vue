<cn>
#### 尺寸
`large` 为大尺寸， `small` 为小尺寸
</cn>

```vue
<template>
  <div style="width:512px;">
    <Input placeholder="Large Input" size="large" icon="logo-kui" clearable/>
    <Input placeholder="Base Input" icon="logo-kui" clearable />
    <Input size="small" placeholder="Small Input" icon="logo-kui" @icon-click="$Message.info('点击图标事件')" clearable />
  </div>
</template>
```