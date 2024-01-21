<template>
  <Space>
    <Input clearable></Input>
    <Select clearable>
      <Option v-for="x in 5" :key="x" :value="x" :label="x"></Option>
    </Select>
  </Space>
</template>

