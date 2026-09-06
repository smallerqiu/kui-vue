<template>
  <Space vertical>
    <InputTag size="small" theme="plain" :value="['Plain']" />
    <InputTag shape="square" theme="outline" :value="['Outline']" />
    <InputTag size="large" shape="circle" :value="['Circle']" />
    <InputTag disabled :value="['Disabled']" />
  </Space>
</template>
