<template>
  <div>
    <h2>Modal 对话框</h2>
    <h3> </h3>
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
        <Button @click="d4=!d4">按钮文字</Button>
        <Modal v-model="d2" width="300"></Modal>
        <Modal v-model="d3" title="我是自定义标题">
          <p>我是自定义内容</p>
          <div slot="footer">
            <Button type="danger">自定义1</Button>
            <Button type="success">自定义2</Button>
          </div>
        </Modal>
        <Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>
      </div>
      <div slot="desc">通过
        <code>title</code>来设置标题，
        <code>width</code>控制宽度， 还有
        <code>slot</code>展示自定义内容
      </div>
      <div slot="code">{{code.custom}}</div>
    </Demo>
    <Demo title="可拖动">
      <div slot="content">
        <Button @click="d5=!d5">普通对话框</Button>
        <Modal v-model="d5" isMove>我可以拖动的</Modal>
      </div>
      <div slot="desc">有人想要拖动
        <code>Modal</code>，真奇葩，
        <code>isMove</code>就可以搞定的</div>
      <div slot="code">{{code.canMove}}</div>
    </Demo>
    <Demo title="Toast">
      <div slot="content">
        <Button @click="show('success')">Success</Button>
        <Button @click="show('error')">Error</Button>
        <Button @click="show('warning')">Warning</Button>
        <Button @click="show('info')">Info</Button>
        <Button @click="show('happy')">happy</Button>
        <Modal v-model="d6" isMove type="toast" :icon="icon" :color="color">恭喜你中了5000万...</Modal>
      </div>
      <div slot="desc">这个模式只是用来展示最后的结果，
        <code>type=toast</code>就可以了</div>
      <div slot="code">{{code.mode}}</div>
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
          <td>弹框是否可拖动，type 为modal可以用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>type</td>
          <td>弹框的模式，可选值为 modal，toast </td>
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
          <td>弹框的图标的颜色，type为toast可用 </td>
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
  </div>
</template>
<script>
import code from '../code/modal'
export default {
  data() {
    return {
      color: "",
      icon: "success",
      d1: false,
      d2: false,
      d3: false,
      d4: false,
      d5: false,
      d6: false,
      code: code
    };
  },
  methods: {
    test() {
      alert('')
    },
    show(type) {
      this.icon = type;
      this.d6 = !this.d6;
      this.color = type == "happy" ? "orange" : "";
    }
  }
};
</script>

