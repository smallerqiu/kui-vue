<template>
  <Space vertical>
    <InputTag shape="square" theme="outline" :value="['square']" />
    <InputTag shape="circle" :value="['circle']" />
    <InputTag disabled :value="['disabled']" />
  </Space>
</template>
