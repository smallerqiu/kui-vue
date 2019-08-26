let code = {}

code.base =`<Button @click="$ImagePreview.show('https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg')">预览</Button>
<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="show" />
<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="show" />
 <script>
export default {
  methods: {
    show(e){
      this.$ImagePreview.show(e.target.src)
    }
  },
};
</script>`

export default code