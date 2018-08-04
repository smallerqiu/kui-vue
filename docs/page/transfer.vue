<template>
  <div>
    <h3>Transfer </h3>
    <h2>双栏穿梭选择框。</h2>
    <Demo title="">
      <div solt="content"></div>
      <div solt="desc"></div>
      <div solt="code"></div>
    </Demo>
  </div>
</template>

<script>
import code from '../code/transfer'
import Demo from '../components/demo'
export default {
  data() {
    return {
      code: code
    }
  }
}
</script>
