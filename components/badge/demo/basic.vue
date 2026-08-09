<template>
  <Space size="large" vertical>
    <Badge :count="3">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="15" color="orange">
      <div class="badge-box"></div>
    </Badge>
    <Badge status="success" text="Success" />
    <Badge pill status="success" text="success" />
  </Space>
</template>
