<template>
  <div style="width:520px;padding:200px;">
    {{h}}
    <Slider v-model="h"
      :min="8"
      :marks="{8:'8',16:'16',24:'24',32:'32',40:'40',80:'100'}"
      :max="80"
      :step="10" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 8
    }
  }
}
</script>
