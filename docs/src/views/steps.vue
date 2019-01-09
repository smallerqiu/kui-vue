<template>
  <div>
    <h2>Steps 步骤条</h2>
    <p>拆分某项流程的步骤，引导用户按流程完成任务。</p>
    <h3>代码示例</h3>
    <Demo title="基本" layout="vertical">
      <div slot="content">
        <Steps current="1">
          <Step title="已完成" description="这里是步骤的描述信息"></Step>
          <Step title="进行中" description="这里是步骤的描述信息"></Step>
          <Step title="待进行" description="这里是步骤的描述信息"></Step>
        </Steps>
      </div>
      <div slot="desc">简单的步骤条。</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="迷你版" layout="vertical">
      <div slot="content">
        <Steps current="1" mini>
          <Step title="已完成"></Step>
          <Step title="进行中"></Step>
          <Step title="待进行"></Step>
        </Steps>
      </div>
      <div slot="desc">迷你版的步骤条，通过设置
        <code>mini</code> 启用.</div>
      <div slot="code">{{code.mini}}</div>
    </Demo>
    <Demo title="自定义图标" layout="vertical">
      <div slot="content">
        <Steps current="1">
          <Step title="登陆" icon="md-lock"></Step>
          <Step title="绑定手机" icon="md-phone-portrait"></Step>
          <Step title="绑定邮箱" icon="md-mail"></Step>
        </Steps>
      </div>
      <div slot="desc">可以启用自定义图标。自定义
        <code>icon</code>
      </div>
      <div slot="code">{{code.icon}}</div>
    </Demo>
    <Demo title="步骤切换" layout="vertical">
      <div slot="content">
        <Steps :current="current">
          <Step title="步骤1"></Step>
          <Step title="步骤2"></Step>
          <Step title="步骤3"></Step>
          <Step title="步骤4"></Step>
        </Steps>
        <br/>
        <Button @click="step('next')">下一步</Button>
        <Button @click="step('prev')">上一步</Button>
      </div>
      <div slot="desc">通常配合内容及按钮使用，表示一个流程的处理进度。</div>
      <div slot="code">{{code.test}}</div>
    </Demo>
    <Demo title="步骤运行错误" layout="vertical">
      <div slot="content">
        <Steps :current="1" status="error">
          <Step title="步骤1" description="这里是步骤的描述信息"></Step>
          <Step title="步骤2" description="这里是步骤的描述信息"></Step>
          <Step title="步骤3" description="这里是步骤的描述信息"></Step>
          <Step title="步骤4" description="这里是步骤的描述信息"></Step>
        </Steps>
      </div>
      <div slot="desc">使用
        <code>Steps</code> 的
        <code>status</code> 属性来指定当前步骤的状态。</div>
      <div slot="code">{{code.status}}</div>
    </Demo>
    <Demo title="垂直方向" layout="vertical">
      <div slot="content">
        <Steps :current="1" vertical>
          <Step title="步骤1" description="这里是步骤的描述信息"></Step>
          <Step title="步骤2" description="这里是步骤的描述信息"></Step>
          <Step title="步骤3" description="这里是步骤的描述信息"></Step>
          <Step title="步骤4" description="这里是步骤的描述信息"></Step>
        </Steps>
      </div>
      <div slot="desc">简单的竖直方向的小型步骤条。</div>
      <div slot="code">{{code.vertical}}</div>
    </Demo>
    <h3>Steps API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>current</td>
          <td>指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态</td>
          <td>String,Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否垂直显示，默认水平显示 </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>是否显示迷你模式 </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>status</td>
          <td>指定当前步骤的状态，可选 wait process finish error</td>
          <td>String </td>
          <td>process</td>
        </tr>
      </table>
    </div>
    <h3>Step API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>title</td>
          <td>步骤标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>description</td>
          <td>步骤的详情描述，可选 </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>步骤图标的类型，可选 </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>status</td>
          <td>指定当前步骤的状态，可选 wait process finish error</td>
          <td>String </td>
          <td>wait</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/steps'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      current: 0
    }
  },
  methods: {
    step(t) {
      this.current = t == 'next' ? (this.current >= 3 ? 3 : this.current + 1) : (this.current <= 0 ? 0 : this.current - 1)
    }
  }
}
</script>
