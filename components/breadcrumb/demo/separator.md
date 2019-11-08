<cn>
#### 分隔符
通过 `separator` 设置分隔符
</cn>

```tpl
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" icon="ios-home" separator="~">Home</BreadcrumbItem>
      <BreadcrumbItem to="/breadcrumb" icon="logo-buffer" separator="~">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem icon="ios-heart" separator="~">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
```