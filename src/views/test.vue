<template>
  <Space vertical>
    <Select :width="200" clearable v-model="value1">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    {{value1}}
    <!-- <Select :width="200" size="small" clearable v-model="value2">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
    {{value2}}
    <Select :width="200" multiple clearable v-model="value3">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
    {{value3}} -->
  </Space>
</template>
<script>
export default{
  data() {
    return {
      value1:'',
      value2:'',
      value3:['1','2']
    }
  }
}
</script>

