<template>
  <Space size="large" wrap>
    <Badge :count="99">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="100">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="20" :max-count="10">
      <div class="badge-box"></div>
    </Badge>
    <Badge :count="1000" :max-count="999">
      <div class="badge-box"></div>
    </Badge>
    <Badge count="hot">
      <div class="badge-box"></div>
    </Badge>
    <Badge count="new">
      <div class="badge-box"></div>
    </Badge>
  </Space>
</template>