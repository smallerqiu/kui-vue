<cn>
#### 分隔符
通过 `separator` 设置分隔符
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" icon="home" separator="~">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb" icon="cloud" separator="~">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem icon="heart" separator="~">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
```