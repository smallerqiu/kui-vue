let code = {}

code.useInRouter = `import kui from 'kui-vue';
Vue.use(kui);

router.beforeEach((to, from, next) => {
  kui.Loading.start();
  next();
});

router.afterEach(route => {
  kui.Loading.finish();
});`
code.useInAjax = `<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
  methods: {
    getData () {
      this.$Loading.start();
      $.ajax({
        url: '/api/someurl',
        type: 'get',
        success: () => {
          this.$Loading.finish();
        }
        error: () => {
          this.$Loading.error();
        }
      });
    }
  }
}
<\/script>`
code.test = `<Button @click="start()">start</Button>
<Button @click="finish">finish</Button>
<Button @click="error">error</Button>
<Button @click="config">config</Button>
<Button @click="upload(30)">upload 30</Button>
<Button @click="upload(80)">upload 80</Button>
<script>
  methods: {
    config() {
      this.$Loading.config({
      type: "line",
      color: "orange",
      height: 10
      });
    },
    upload(percent){
      this.$Loading.upload(percent);
    },
    start() {
      this.$Loading.start();
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    }
  }
<\/script>`
code.theme = `<Button @click="loading('flip')">flip</Button>
<Button @click="loading('bounce')">bounce</Button>
<Button @click="loading('zoom')">zoom</Button>
<Button @click="loading('rotate')">rotate</Button>
<script>
...
methods: {
  loading(type) {
    this.$Loading.start(type);
    setTimeout(() => {
      this.$Loading.finish();
    }, 3000);
  },
}
...
<\/script>`

export default code