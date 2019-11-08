<template>
  <div>
    <h2>下拉菜单</h2>
    <Alert>注意：若下拉被父级元素遮挡，请设置组件 属性 `transfer=true`。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基础用法">
        <div slot="content">
          <Dropdown>
            <a style="margin-right:30px;">下拉菜单
              <Icon type="ios-arrow-down" /></a>
            <DropdownMenu slot="list">
              <DropdownItem>苹果🍎</DropdownItem>
              <DropdownItem>香蕉</DropdownItem>
              <DropdownItem>橘子</DropdownItem>
              <DropdownItem>葡萄</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <Button>下拉菜单
              <Icon type="ios-arrow-down" /></Button>
            <DropdownMenu slot="list">
              <DropdownItem>苹果🍎</DropdownItem>
              <DropdownItem>香蕉</DropdownItem>
              <DropdownItem>橘子</DropdownItem>
              <DropdownItem>葡萄</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div slot="desc">
          下拉菜单配合<code>DropdownMenu，DropdownItem</code>使用,并标记<code>slot="list"</code>
        </div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="触发方式">
        <div slot="content">
          <Dropdown>
            <a style="margin-right:10px;">hover展开
              <Icon type="ios-arrow-down" /></a>
            <DropdownMenu slot="list">
              <DropdownItem>苹果🍎</DropdownItem>
              <DropdownItem>香蕉</DropdownItem>
              <DropdownItem>橘子</DropdownItem>
              <DropdownItem>葡萄</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown trigger="click">
            <Button>click展开
              <Icon type="ios-arrow-down" /></Button>
            <DropdownMenu slot="list">
              <DropdownItem>苹果🍎</DropdownItem>
              <DropdownItem>香蕉</DropdownItem>
              <DropdownItem>橘子</DropdownItem>
              <DropdownItem>葡萄</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown trigger="custom" :visible="show">
            <Button @click="show=true">custom展开
              <Icon type="ios-arrow-down" /></Button>
            <div slot="list" style="background:#fff;padding:10px;border:1px solid #ddd;">
              我是自定义内容
              <Button mini @click="show=false">关闭</Button>
            </div>
          </Dropdown>
        </div>
        <div slot="desc">
          支持三种下拉展开方式<code>hover(默认)，click，custom</code>
        </div>
        <div slot="code">{{code.trigger}}</div>
      </Demo>
      </Col>
    </Row>
    <Demo title="辅助项">
      <div slot="content">
        <Dropdown>
          <Button>下拉菜单
            <Icon type="ios-arrow-down" /></Button>
          <DropdownMenu slot="list">
            <DropdownItem>菜单一</DropdownItem>
            <DropdownItem disabled>我被禁用了</DropdownItem>
            <DropdownItem>菜单一</DropdownItem>
            <DropdownItem selected>我被选中了</DropdownItem>
            <DropdownItem icon="md-save">
              <span>保存项目</span>
              <span slot="shortcut">⌘+S</span></DropdownItem>
            <DropdownItem icon="ios-cut">
              <span>剪切</span>
              <span slot="shortcut">⌘+X</span></DropdownItem>
            <DropdownItem divided>我有一条线</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div slot="desc">
        通过<code>disabled、selected、divided、icon、slot="shortcut"</code>来控制单项的禁用、选中、隔横、图标、快捷键标识等状态
      </div>
      <div slot="code">{{code.helper}}</div>
    </Demo>
    <h3>Dropdown API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式,支持hover(默认), click, custom 3种方式</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>是否显示下拉菜单，trigger为custom可用</td>
          <td>Boolen</td>
          <td>false</td>
        </tr>
        <tr>
          <td>transfer</td>
          <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>DropdownItem API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>icon</td>
          <td>单项图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>单项是否被禁用</td>
          <td>Boolen</td>
          <td>false</td>
        </tr>
        <tr>
          <td>selected</td>
          <td>单项是否被选中</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>divided</td>
          <td>单项是否有隔横</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/dropdown'

export default {
  components: { Demo },
  data() {
    return {
      show: false,
      code: code
    }
  }
}
</script>
