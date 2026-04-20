<template>
  <Space vertical block>
    <TextArea :rows="4" placeholder="Please input" />
    <TextArea :rows="2" placeholder="Please input" />
    <TextArea :rows="2" placeholder="Disabled" disabled />
    <TextArea :rows="2" placeholder="Readonly" readonly />
  </Space>
</template>
