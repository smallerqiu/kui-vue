let code = {}

code.base =`<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg" />
<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg" />
<ImagePreview v-model="showView" :url="url" />
 <script>
export default {
  components: { Demo },
  data() {
    return {
      showView: false, url: '',
    };
  },
  methods: {
    showImg(e) {
      this.url = e.target.src
      this.showView = true
    },
  }
};
</script>`

code.ani =`<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg1" />
<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg1" />
<ImagePreview v-model="showView1" :url="url1" animateIn="rotateIn" animateOut="rotateOut" />
<script>
export default {
  components: { Demo },
  data() {
    return {
      showView: false, url: '',
    };
  },
  methods: {
    showImg1(e) {
      this.url1 = e.target.src
      this.showView1 = true
    },
  }
};
</script>`

export default code