<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <div style="margin-left:70px;white-space: nowrap;">
    <Popconfirm placement="top-left">
      <Button>TL</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="top">
      <Button>Top</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="top-right">
      <Button>TR</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
  </div>
  <div style="float:left;height:125px;width:70px;">
    <Popconfirm placement="left-top">
      <Button>LT</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="left">
      <Button>Left</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="left-bottom">
      <Button>LB</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
  </div>
  <div style="margin-left:310px;height:125px;width:70px;">
    <Popconfirm placement="right-top">
      <Button>RT</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="right">
      <Button>Right</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="right-bottom">
      <Button>RB</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
  </div>
  <div style="margin-left:70px;white-space: nowrap;">
    <Popconfirm placement="bottom-left">
      <Button>BL</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="bottom" >
      <Button>Bottom</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
    <Popconfirm placement="bottom-right" >
      <Button>BR</Button>
      <template slot="title">
        <p>{{title}}</p>
        <p>{{title}}</p>
      </template>
    </Popconfirm>
  </div>
</template>
<script>
export default{
  data(){
    return{
      title:'删除不可恢复,你确定要执行操作吗?',
    }
  }
}
</script>
```