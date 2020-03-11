<cn>
#### 基本用法
`Badge` 基础使用
</cn>

```tpl
<template>
  <div>
    <Badge count="3">
      <Button>最新消息</Button>
    </Badge>
    <Badge count="15" color="orange" style="margin:0 30px;">
      <Button>最新评论</Button>
    </Badge>
    <Dropdown trigger="click">
      <a style="margin-right:30px;">通知列表
        <Icon type="ios-arrow-down" /></a>
      <DropdownMenu slot="list">
        <DropdownItem>紧急通知
          <Badge count="8" mark />
        </DropdownItem>
        <DropdownItem>普通通知
          <Badge count="12" mark />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
```