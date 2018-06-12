let code = {}

code.base = `<Modal v-model="d1"></Modal>`
code.custom = `<Button @click="d2=!d2">自定义宽度</Button>
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
<Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>`
code.canMove = `<Modal v-model="d5" isMove>我可以拖动的</Modal>`
code.mode = `<Button @click="show('success')">Success</Button>
<Button @click="show('error')">Error</Button>
<Button @click="show('warning')">Warning</Button>
<Button @click="show('info')">Info</Button>
<Button @click="show('happy')">happy</Button>
<Modal v-model="d6" type="toast" :icon="icon" :color="color">恭喜你中了5000万...</Modal>
<script>
export default {
  data() {
    return {
      color: "",
      icon: "success",
      d6: false,
    }
  },
  methods: {
    show(type) {
      this.icon = type;
      this.d6 = !this.d6;
      this.color = type == "happy" ? "orange" : "";
    }
  }
}
<\/script>`

export default code