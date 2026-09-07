<template>
  <PageHeader>
    <template #breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>Projects</BreadcrumbItem>
        <BreadcrumbItem>Detail</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template #back><Button :icon="ArrowLeft" shape="circle" /></template>
    <template #title>
      Design system
      <Tag color="blue">Active</Tag>
    </template>
    <template #description>Shared foundations and reusable components.</template>
    <template #actions><Button type="primary">Edit project</Button></template>
  </PageHeader>

  <ListPanel summary="3 members">
    <template #filters>
      <Input :icon="Search" placeholder="Search members" style="width: 220px" />
    </template>
    <template #actions><Button :icon="Plus">Add member</Button></template>
    <Table :columns="columns" :data="data" />
  </ListPanel>
</template>

<script setup lang="ts">
import { ArrowLeft, Plus, Search } from "kui-icons";
import type { Column } from "kui-vue";

const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Role", key: "role" },
  { title: "Status", key: "status" },
];
const data = [
  { key: 1, name: "Alex", role: "Owner", status: "Active" },
  { key: 2, name: "Mia", role: "Designer", status: "Active" },
  { key: 3, name: "Leo", role: "Developer", status: "Invited" },
];
</script>
