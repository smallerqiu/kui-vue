let code = {}

code.base = `<Upload action="/rest/uploadFile">
  <Button>上传文件</Button>
</Upload>`

code.disabled = `<Upload action="/rest/uploadFile" disabled>
  <Button type="success">上传文件</Button>
</Upload>`
code.withData = `<Upload action="/rest/uploadFile" @change="change" @complite="complite" :data="data">
  <Button>上传文件</Button>
</Upload>
data() {
  return {
    data: { a: 1, b: 2, c: 3 },
  };
},`

code.mode = `<Upload action="/rest/uploadFile" @change="change" @complite="complite" ref="upload" :data="data" type="wait">
  <Button>上传文件</Button>
</Upload>
<Button @click="upload">点我开始上传</Button>
<script>
  export default {
    data() {
      return {
        data: { a: 1, b: 2, c: 3 },
      };
    },
    methods: {
      upload() {
        this.$refs.upload.submit();
      },
      change(file) {
        this.$Message.info('选择了文件：' + file);
      },
      complite(res) {
        console.log(res);
      }
    }
  };
  </script>`


export default code