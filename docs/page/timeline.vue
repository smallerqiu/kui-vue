<template>
  <div>
    <h2>TimeLine 时间轴</h2>
    <h3>代码示例</h3>
    <Demo title="基础">
      <div slot="content">
        <TimeLine>
          <TimeLineItem>发布1.0版本</TimeLineItem>
          <TimeLineItem>发布1.0版本</TimeLineItem>
          <TimeLineItem>发布1.0版本</TimeLineItem>
        </TimeLine>
      </div>
      <div slot="desc">
        <code>TimeLine</code>内部必须包含
        <code>TimeLineItem</code>
      </div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="图标">
      <div slot="content">
        <TimeLine>
          <TimeLineItem icon="ribbon-b">发布2.0版本</TimeLineItem>
          <TimeLineItem icon="bug">修复bug</TimeLineItem>
          <TimeLineItem>发布1.0版本</TimeLineItem>
        </TimeLine>
      </div>
      <div slot="desc">给
        <code>TimeLineItem</code>设置
        <code>icon</code>可以改变图标展示</div>
      <div slot="code">{{code.withIcon}}</div>
    </Demo>
    <Demo title="颜色">
      <div slot="content">
        <TimeLine>
          <TimeLineItem icon="ribbon-b" color="#cba302">发布2.0版本</TimeLineItem>
          <TimeLineItem icon="bug" color="red">修复bug</TimeLineItem>
          <TimeLineItem>发布1.0版本</TimeLineItem>
        </TimeLine>
      </div>
      <div slot="desc">
        <code>color</code>可以改变图标的颜色</div>
      <div slot="code">{{code.color}}</div>
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
          <td>icon</td>
          <td>时间轴item 图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>时间轴item 颜色</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>自定义时间轴点</td>
          <td>slot</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/timeline'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code
    };
  }
};
</script>

