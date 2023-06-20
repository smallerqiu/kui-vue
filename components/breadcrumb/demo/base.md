<cn>
#### 基础用法
通过 `to` 添加跳转链接
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem>other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
```