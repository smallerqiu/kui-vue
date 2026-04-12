<template>
  <p>use href</p>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem>Other</BreadcrumbItem>
  </Breadcrumb>
  <p>use tag a</p>
  <Breadcrumb>
    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/navigation/breadcrumb">Breadcrumb</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Other</BreadcrumbItem>
  </Breadcrumb>
</template>