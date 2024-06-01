<template>
  <div style="width: 800px;height: 800px;">
    <!-- top -->
    <Tooltip placement="bottom" :title="title">
      <Button>TL</Button>
    </Tooltip>

    <!-- left bottom -->
    <div style="position: absolute;bottom: 0;">
      <Tooltip placement="top-right" :title="title">
        <Button>TL</Button>
      </Tooltip>
    </div>

    <!-- top right -->
    <div style="position: absolute;top:0;right: 0;">
      <Tooltip placement="bottom" :title="title">
        <Button>TL</Button>
      </Tooltip>
    </div>

    <!-- bottom right -->

    <div style="position: absolute;bottom:0;right: 0;">
      <Tooltip placement="bottom" :title="title">
        <Button>TL</Button>
      </Tooltip>
    </div>

    <div style="margin-left:70px;white-space: nowrap;">
      <Tooltip placement="top-left" :title="title">
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" :title="title">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="top-right" :title="title">
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style="float:left;height:125px;width:70px;">
      <Tooltip placement="left-top" :title="title">
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" :title="title">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="left-bottom" :title="title">
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style="margin-left:310px;height:125px;width:70px;">
      <Tooltip placement="right-top" :title="title">
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" :title="title">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="right-bottom" :title="title">
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style="margin-left:70px;white-space: nowrap;">
      <Tooltip placement="bottom-left" :title="title">
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" :title="title">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottom-right" :title="title">
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
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
