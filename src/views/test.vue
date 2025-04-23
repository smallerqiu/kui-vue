<template>
  <RadioGroup :options="types" v-model:value="direction" type="button" />
  <br />
  <br />
  <CheckboxGroup :options="options" v-model:value="cities" @change="change" :direction="direction" />
</template>
<script setup>
import { ref } from 'vue'
import { message } from "kui-vue";
const direction = ref('horizontal')
const types = [
  { label: '垂直', value: 'vertical' },
  { label: '水平', value: 'horizontal' }
]
const options = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shenzhen', value: 'shenzhen' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Guangzhou', value: 'guangzhou' },
  { label: 'Wuhan', value: 'wuhan' },
  { label: 'Other', value: 'other', disabled: true },
]
const cities = ref(['wuhan'])

const change = (e) => {
  console.log(e)
  message.info(e)
}
</script>
