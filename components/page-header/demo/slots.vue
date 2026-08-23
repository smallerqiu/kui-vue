<template>
  <PageHeader>
    <template #breadcrumb>
      <Breadcrumb><BreadcrumbItem>Projects</BreadcrumbItem><BreadcrumbItem>Detail</BreadcrumbItem></Breadcrumb>
    </template>
    <template #back><Button :icon="ArrowLeft" shape="circle" /></template>
    <template #title>Design system <Tag color="blue">Active</Tag></template>
    <template #description>Shared foundations and reusable components.</template>
    <template #actions><Button type="primary">Edit project</Button></template>
    <Alert description="The next release is scheduled for Friday." show-icon />
  </PageHeader>
</template>
<script setup lang="ts">
import { ArrowLeft } from "kui-icons";
</script>
