<template>
  <Flex style="width:300px" vertical align="center">
    <Space compact>
      <Popconfirm :title="title" placement="top-left">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm :title="title" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm :title="title" placement="top-right">
        <Button>TR</Button>
      </Popconfirm>
    </Space>
    <Flex justify="space-between" style="width:100%;padding:10px 0">
      <Space vertical compact>
        <Popconfirm :title="title" placement="left-top">
          <Button>LT</Button>
        </Popconfirm>
        <Popconfirm :title="title" placement="left">
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm :title="title" placement="left-bottom">
          <Button>LB</Button>
        </Popconfirm>
      </Space>
      <Space vertical compact>
        <Popconfirm :title="title" placement="right-top">
          <Button>RT</Button>
        </Popconfirm>
        <Popconfirm :title="title" placement="right">
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm :title="title" placement="right-bottom">
          <Button>RB</Button>
        </Popconfirm>
      </Space>
    </Flex>
    <Space compact>
      <Popconfirm :title="title" placement="bottom-left">
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm :title="title" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm :title="title" placement="bottom-right">
        <Button>BR</Button>
      </Popconfirm>
    </Space>
  </Flex>
</template>
<script>
export default {
  data() {
    return {
      title: 'Are you sure to delete this task?',
    }
  }
}
</script>