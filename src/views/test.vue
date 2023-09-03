<template>
  <div>
    <Tooltip :title="`切换${theme == 'dark' ? '浅色' : '暗色'}主题`">
      <Button theme="normal" :icon="theme == 'dark' ? Sunny : Moon" shape="circle" size="large" style="margin:0 8px;">
        <!-- <Icon :type="Moon"></Icon>123 -->
      </Button>
    </Tooltip>
  </div>
</template>
<script>
import { Moon, Sunny } from 'kui-icons';
export default {
  data() {
    return {
      Moon, Sunny,
      theme: false
    }
  }
}
</script>
<style lang="less">
.demo-slider-vertical {
  height: 300px;
  margin-left: 30px;
  margin-top: 10px;
  padding-right: 30px;
  display: inline-block
}
</style>

