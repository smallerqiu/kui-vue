<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <Flex style="width:300px" vertical align="center">
    <Space compact>
      <Tooltip placement="top-left" :title="title">
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" :title="title">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="top-right" :title="title">
        <Button>TR</Button>
      </Tooltip>
    </Space>
    <Flex justify="space-between" style="width:100%;padding:10px 0">
      <Space vertical compact>
        <Tooltip placement="left-top" :title="title">
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" :title="title">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="left-bottom" :title="title">
          <Button>LB</Button>
        </Tooltip>
      </Space>
      <Space vertical compact>
        <Tooltip placement="right-top" :title="title">
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" :title="title">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="right-bottom" :title="title">
          <Button>RB</Button>
        </Tooltip>
      </Space>
    </Flex>
    <Space compact>
      <Tooltip placement="bottom-left" :title="title">
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" :title="title">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottom-right" :title="title">
        <Button>BR</Button>
      </Tooltip>
    </Space>
  </Flex>
</template>
<script>
export default {
  data() {
    return {
      title: '明月几时有?',
    }
  },
}
</script>
```