<template>
  <Space vertical>
    <Select />
    <DatePicker />
    <Select :options="locales" v-model="locale" @change="switchLocale" />
  </Space>
</template>
<script>
export default {
  data() {
    return {
      locale: '',
      locales: [
        { label: '中文', value: 'zhCN' },
        { label: '英语', value: 'en' },
        { label: '乌克兰语', value: 'ua' },
        { label: '希腊语', value: 'el' },
        { label: '法语', value: 'fr' },
      ]
    }
  },
  methods: {
    switchLocale() {
      window.i18n.locale = this.locale
    }
  }
}
</script>
