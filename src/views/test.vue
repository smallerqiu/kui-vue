<template>
  <Dropdown show-placement-arrow @click="test">
    <Space>
      <Button>
        滑动展开
        <Icon :type="ChevronDown" />
      </Button>
    </Space>
    <Menu slot="content" @click="test">
      <MenuItem>
      <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
      <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
      <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>
</template>
<script>
import { ChevronDown } from 'kui-icons'
export default {
  data() {
    return {
      ChevronDown,
      show: false
    }
  },
  methods: {
    test(e) {
      console.log(e)
    }
  }
}
</script>