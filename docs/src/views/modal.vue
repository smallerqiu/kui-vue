<template>
  <div>
    <h2>Modal 对话框</h2>
    <h3>代码示例 </h3>
    <Demo title="基础">
      <div slot="content">
        <Button @click="d1=!d1">普通对话框</Button>
        <Modal v-model="d1"></Modal>
      </div>
      <div slot="desc">通过
        <code>v-model</code>双向绑定
        <code>Modal</code>是否展示</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="自定义">
      <div slot="content">
        <Button @click="d2=!d2">自定义宽度</Button>
        <Button @click="d3=!d3">内容和页脚</Button>
        <Button @click="d4=!d4">国际化</Button>
        <Modal v-model="d2" width="300"></Modal>
        <Modal v-model="d3" title="我是自定义标题">
          <p>我是自定义内容</p>
          <div slot="footer">
            <Button type="danger">删除</Button>
            <Button type="success">确定</Button>
          </div>
        </Modal>
        <Modal v-model="d4" width="300" title="What's your name? " cancelText="cancel" okText="Ok">My name is chuchur.</Modal>
      </div>
      <div slot="desc">通过
        <code>title</code>来设置标题，
        <code>width</code>控制宽度， 还有
        <code>slot</code>展示自定义内容
      </div>
      <div slot="code">{{code.custom}}</div>
    </Demo>
    <Demo title="扩展属性">
      <div slot="content">
        <Button @click="d5=true">拖动的弹框</Button>
        <Button @click="d51=true">居中对弹框</Button>
        <Button @click="d52=true">Top 20px</Button>
        <Button @click="d53=true">最大化</Button>
        <Modal v-model="d5" isMove>可拖动的Modal</Modal>
        <Modal v-model="d51" isCenter>居中的Modal</Modal>
        <Modal v-model="d52" top="20">Top 20px</Modal>
        <Modal v-model="d53" isMax title="窗口最大化">
          <div style="padding:20px">可以最大化</div>
        </Modal>
      </div>
      <div slot="desc">，
        <code>isMove</code>可以控制Modal是否可以拖动,
        <code>isCenter</code>窗口显示居中，
        <code>isMax</code>窗口最大化，
        <!-- <code>animateIn，animateOut</code>结合<a href="https://daneden.github.io/animate.css/" target="_blank">Animate</a>库来控制窗口入场，出场动画， -->
      </div>
      <div slot="code">{{code.canMove}}</div>
    </Demo>
    <Demo title="Toast">
      <div slot="content">
        <Button @click="show('success')">Success</Button>
        <Button @click="show('error')">Error</Button>
        <Button @click="show('warning')">Warning</Button>
        <Button @click="show('info')">Info</Button>
        <Button @click="show('happy')">Custom icon</Button>
      </div>
      <div slot="desc">全局的提示框，提供4种固定调用方法和一种自定义调用方式</div>
      <div slot="code">{{code.show}}</div>
    </Demo>
    <Demo title="Confrim">
      <div slot="content">
        <Button @click="comfirm()">标准调用</Button>
        <Button @click="custom()">国际化</Button>
        <Button @click="Async()">异步关闭</Button>
      </div>
      <div slot="desc">全局的确认提示框，可以异步关闭</div>
      <div slot="code">{{code.comfirm}}</div>
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
          <td>value</td>
          <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>对话框标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>对话框宽度</td>
          <td>Number,String</td>
          <td>520</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>确定按钮文字</td>
          <td>String</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文字</td>
          <td>String</td>
          <td>取消</td>
        </tr>
        <tr>
          <td>isMove</td>
          <td>弹框是否可拖动,confirm模式不可用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>isCenter</td>
          <td>窗口是否可以居中 ,confirm模式不可用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>isMax</td>
          <td>弹框是否可以最大化显示 ,confirm模式不可用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>mask-closable</td>
          <td>是否点击遮罩关闭弹窗, 为否时Esc键将失效</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>animateIn</td>
          <td><s>弹框入场动画</s><code>2.3.0版本废弃</code></td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>animateOut</td>
          <td><s>弹框出场动画</s> <code>2.3.0版本废弃</code></td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>type</td>
          <td><s>弹框的模式，可选值为 modal，toast </s><code>2.3.0版本废弃</code></td>
          <td>String</td>
          <td>modal</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>弹框的图标，type为toast可用 ，默认可选值为success，warning,error,info,也可以自定义，参照
            <a href="#/icon">Icon</a>值 </td>
          <td>String</td>
          <td>success</td>
        </tr>
        <tr>
          <td>color</td>
          <td>弹框的图标的颜色 </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确定的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>点击取消的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>close</td>
          <td>窗口关闭的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>Modal.method()</h3>
    <Alert>组件提供了一些静态方法，使用方式如下</Alert>
    <Code lang="js">{{code.static}}</Code>
    <br />
    <Alert>另外提供了全局配置和全局销毁的方法：</Alert>
    <Code lang="js">{{code.destory}}</Code>
    <p>参数 options 为对象，具体说明如下：</p>
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
          <td>对话框标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>确定按钮文字</td>
          <td>String</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文字</td>
          <td>String</td>
          <td>取消</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>弹框的图标，type为toast可用 ，默认可选值为success，warning,error,info,也可以自定义，参照
            <a href="#/icon">Icon</a>值 </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>弹框的图标的颜色，type为toast可用 </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>onOk</td>
          <td>点击确定的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>onCancel</td>
          <td>点击取消的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Code from '../components/code'
import code from '../code/modal'
import Demo from '../components/demo'
export default {
  components: { Demo, Code },
  data() {
    return {
      color: "",
      icon: "success",
      d1: false, d2: false, d3: false, d4: false, d5: false, d51: false, d52: false, d53: false,
      code: code
    };
  },
  methods: {
    comfirm() {
      this.$Modal.comfirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        onOk: () => {
          this.$Message.success('你点了确认')
        },
        onCancel: () => {
          this.$Message.info('你点了取消')
        }
      })
    },
    custom() {
      this.$Modal.comfirm({
        title: 'Are you Ok?',
        content: 'Yes , I am fine, and you?',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },
    Async() {
      this.$Modal.comfirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        loading: true,
        onOk: () => {
          this.timer = setTimeout(e => {
            this.$Modal.close()
          }, 2000)
        },
        onCancel: () => {
          //用户点了取消 应该中断 异步执行
          clearTimeout(this.timer)
        }
      })
    },
    show(type) {
      if (type == 'happy') {
        this.$Modal.show({
          title: '自定义标题',
          content: '自定义内容',
          icon: 'ios-happy',
          color: '#00ffff'
        })
        return;
      }
      let title, content;
      switch (type) {
        case 'info':
          title = 'Modal title';
          content = 'Modal Content'
          break;
        case 'success':
          title = '保存成功'
          content = '数据成功的保存了'
          break;
        case 'error':
          title = '保存失败'
          content = '数据保存失败了'
          break;
        case 'warning':
          title = '警告警告⚠️'
          content = '您的操作会导致系统崩溃，所以操作被驳回'
          break
      }
      this.$Modal[type]({ title, content });
    }

  }
};
</script>

