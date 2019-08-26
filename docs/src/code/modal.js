let code = {}

code.base = `<Modal v-model="d1"></Modal>`
code.custom = `<Button @click="d2=!d2">自定义宽度</Button>
<Button @click="d3=!d3">内容和页脚</Button>
<Button @click="d4=!d4">按钮文字</Button>
<Modal v-model="d2" width="300"></Modal>
<Modal v-model="d3" title="我是自定义标题">
   <p>我是自定义内容</p>
   <div slot="footer">
    <Button type="danger">删除</Button>
    <Button type="success">确定</Button>
   </div>
</Modal>
<Modal v-model="d4"  width="300" title="What's your name? " cancelText="cancel" okText="Ok">My name is chuchur.</Modal>`
code.canMove = `<Button @click="d5=true">拖动的弹框</Button>
<Button @click="d51=true">居中对弹框</Button>
<Button @click="d52=true">Top 20px</Button>
<Button @click="d53=true">最大化</Button>
<Modal v-model="d5" isMove>可拖动的Modal</Modal>
<Modal v-model="d51" isCenter>居中的Modal</Modal>
<Modal v-model="d52" top="20">Top 20px</Modal>
<Modal v-model="d53" isMax title="窗口最大化"> <div style="padding:20px">可以最大化</div></Modal>
`
code.show = `<Button @click="show('success')">Success</Button>
<Button @click="show('error')">Error</Button>
<Button @click="show('warning')">Warning</Button>
<Button @click="show('info')">Info</Button>
<Button @click="show('happy')">Custom icon</Button>
<script>
export default {
  methods: {
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
}
<\/script>`

code.comfirm = `<Button @click="comfirm()">标准调用</Button>
<Button @click="custom()">国际化</Button>
<Button @click="Async()">异步关闭</Button>
<script>
export default {
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
  }  
<\/script>`

code.static =`this.$Modal.info(options)
this.$Modal.success(options)
this.$Modal.warning(options)
this.$Modal.error(options)
this.$Modal.show(options)
`

code.destory =`this.$Modal.show(options)
this.$Modal.close()
` 

export default code