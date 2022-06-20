<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <div style="margin-left:70px;white-space: nowrap;">
    <Popconfirm :title="title" placement="top-left">
      <Button>TL</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="top">
      <Button>Top</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="top-right">
      <Button>TR</Button>
    </Popconfirm>
  </div>
  <div style="float:left;height:125px;width:70px;">
    <Popconfirm :title="title" placement="left-top">
      <Button>LT</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="left">
      <Button>Left</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="left-bottom">
      <Button>LB</Button>
    </Popconfirm>
  </div>
  <div style="margin-left:310px;height:125px;width:70px;">
    <Popconfirm :title="title" placement="right-top">
      <Button>RT</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="right">
      <Button>Right</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="right-bottom">
      <Button>RB</Button>
    </Popconfirm>
  </div>
  <div style="margin-left:70px;white-space: nowrap;">
    <Popconfirm :title="title" placement="bottom-left">
      <Button>BL</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="bottom" >
      <Button>Bottom</Button>
    </Popconfirm>
    <Popconfirm :title="title" placement="bottom-right" >
      <Button>BR</Button>
    </Popconfirm>
  </div>
</template>
<script>
export default{
  data() {
    return {
      title:'Are you sure to delete this task?',
    }
  }
}
</script>
```