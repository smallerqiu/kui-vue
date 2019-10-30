<template>
  <div>
    <h2>Badge 徽标</h2>
    <h3>代码示例</h3>
    <Demo layout="vertical" title="基本用法">
      <div slot="content">
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
      <div slot="desc">
        <code>Badge</code>基础使用</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo layout="vertical" title="点">
      <div slot="content">
        <Badge dot>
          <div style="width:50px;height:50px;background:#ddd"></div>
        </Badge>
        <Badge dot style="margin-left:20px;">
          <Icon type="ios-archive" size="30"></Icon>
        </Badge>
        <Badge dot style="margin-left:20px;">
          <a href="#">我是一个连接</a>
        </Badge>
      </div>
      <div slot="desc">设置
        <code>dot</code>来展示一个点</div>
      <div slot="code">{{code.dot}}</div>
    </Demo>
    <Demo layout="vertical" title="最大值 / 自定义">
      <div slot="content">
        <Badge count="50" max-count="10" color="orange">
          <Button>最新消息</Button>
        </Badge>
        <Badge count="10055" max-count="999" style="margin-left:60px;" color="green">
          <Button>最新消息</Button>
        </Badge>
        <Badge count="hot" style="margin-left:60px;">
          <Button>热门</Button>
        </Badge>
        <Badge count="new" style="margin-left:60px;">
          <Button>最新</Button>
        </Badge>
      </div>
      <div slot="desc">数字模式超出隐藏，设置
        <code>max-count</code>配合
        <code>count</code>
      </div>
      <div slot="code">{{code.maxCount}}</div>
    </Demo>
    <h3>API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>count</td>
          <td>显示的文字</td>
          <td>String，Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>max-count</td>
          <td>展示封顶的数字值，高于的部分会以+号显示</td>
          <td>String，Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>不展示数字，只有一个小红点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>mark</td>
          <td>是否单独使用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/badge'
export default {
  components: { Demo },
  data() {
    return {
      m: 1,
      code: code
    }
  }
}
</script>