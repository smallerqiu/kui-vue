<cn>
#### 设置图标
通过 `icon` 设置图标
</cn>

```vue
<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem to="/" icon="home">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb" icon="cloud">app</BreadcrumbItem>
      <BreadcrumbItem icon="heart">other</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
```