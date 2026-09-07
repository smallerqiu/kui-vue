<template>
  <p>use href</p>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/components/breadcrumb">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem>Other</BreadcrumbItem>
  </Breadcrumb>
  <p>use tag a</p>
  <Breadcrumb>
    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/components/breadcrumb">Breadcrumb</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Other</BreadcrumbItem>
  </Breadcrumb>
</template>
