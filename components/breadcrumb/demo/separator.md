<cn>
#### 分隔符
通过 `separator` 设置分隔符
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" icon="ios-home" separator="~">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb" icon="logo-buffer" separator="~">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem icon="ios-heart" separator="~">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
```