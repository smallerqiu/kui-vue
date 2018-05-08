<template>
  <div>
    <h2>Badge 徽标</h2>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo layout="vertical" title="基础">
        <div slot="content">
          <Badge count="3">
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
        </div>
        <div slot="desc">
          <code>Badge</code>基础使用</div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo layout="vertical" title="点">
        <div slot="content">
          <Badge dot>
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
          <Badge dot style="margin-left:20px;">
            <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>
          </Badge>
          <Badge dot style="margin-left:20px;">
            <a href="#">我是一个连接</a>
          </Badge>
        </div>
        <div slot="desc">设置
          <code>dot</code>来展示一个点</div>
        <div slot="code">{{code.dot}}</div>
      </Demo>
      </Col>
    </Row>
    <Row gutter="8">
      <Col span="12">
      <Demo layout="vertical" title="数字隐藏">
        <div slot="content">
          <Badge count="100" max-count="99">
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
          <Badge count="10055" max-count="999" style="margin-left:60px;">
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
        </div>
        <div slot="desc">数字模式超出隐藏，设置
          <code>max-count</code>配合
          <code>count</code>
        </div>
        <div slot="code">{{code.maxCount}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo layout="vertical" title="颜色">
        <div slot="content">
          <Badge count="100" max-count="99" color="orange">
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
          <Badge dot color="green" style="margin-left:60px;">
            <div style="width:50px;height:50px;background:#ddd"></div>
          </Badge>
        </div>
        <div slot="desc">
          <code>color</code>属性可以自定义颜色</div>
        <div slot="code">{{code.color}}</div>
      </Demo>
      </Col>
    </Row>
    <Row gutter="8">
      <Col span="12">
      <Demo layout="vertical" title="单独使用">
        <div slot="content">
          <Badge count="10" style="margin-left:20px;"></Badge>
          <Badge count="20" color="blue" style="margin-left:40px;"></Badge>
        </div>
        <div slot="desc"></div>
        <div slot="code">{{code.badge}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo layout="vertical" title="组合使用">
        <div slot="content">
          <div v-for="i in m" style="margin:15px 0;" :key="i">
            <Badge count="+" @onClick="()=>{m++}">
              <Button>增加</Button>
            </Badge>
            <Badge count="-" @onClick="()=>{m!=1&&m--}" style="margin-left:20px;">
              <Input width="200"></Input>
            </Badge>
          </div>
        </div>
        <div slot="desc">Badge的使用场景不光是数字或者是提醒的展示，在很多场合可以当按钮使用</div>
        <div slot="code">{{code.other}}</div>
      </Demo>
      </Col>
    </Row>
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
          <td>onClick</td>
          <td>点击事件的回调</td>
          <td>Function</td>
          <td>-</td>
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