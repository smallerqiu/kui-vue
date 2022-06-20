<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <div style="margin-left:70px;white-space: nowrap;">
    <Tooltip placement="top-left">
      <Button>TL</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="top">
      <Button>Top</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="top-right">
      <Button>TR</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
  </div>
  <div style="float:left;height:125px;width:70px;">
    <Tooltip placement="left-top">
      <Button>LT</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="left">
      <Button>Left</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="left-bottom">
      <Button>LB</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
  </div>
  <div style="margin-left:310px;height:125px;width:70px;">
    <Tooltip placement="right-top">
      <Button>RT</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="right">
      <Button>Right</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="right-bottom">
      <Button>RB</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
  </div>
  <div style="margin-left:70px;white-space: nowrap;">
    <Tooltip placement="bottom-left">
      <Button>BL</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="bottom" >
      <Button>Bottom</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
    <Tooltip placement="bottom-right" >
      <Button>BR</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Tooltip>
  </div>
</template>
<script>
export default{
  data() {
    return {
      title:'明月几时有,把酒问青天 !',
    }
  },
}
</script>
```