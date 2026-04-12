<template>
  <Space :size="[8, 20]" wrap>
    <Button size="small" v-for="x in 25" :key="x">Wrap</Button>
  </Space>
</template>