<template>
  <Space>
    value:
    {{ checked }}
    <k-switch v-model="checked" />
    <DatePicker />
    <Button @click="checked = !checked" size="small">{{ checked ? 'Uncheck' : 'Check' }}</Button>
    <k-switch checked />
    <Button @click="test">test</Button>
  </Space>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  methods: {
    test() {
      window.i18n.locale = 'ua'
    }
  }
}
</script>
