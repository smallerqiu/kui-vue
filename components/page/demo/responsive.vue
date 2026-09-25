<template>
  <div
    :style="{
      width: '720px',
      maxWidth: '100%',
      minWidth: '180px',
      resize: 'horizontal',
      overflow: 'auto',
      padding: '16px',
      boxSizing: 'border-box',
      border: '1px solid var(--kui-color-border)',
    }"
  >
    <Page :total="10000" :page="50" show-sizer show-elevator />
  </div>
</template>
