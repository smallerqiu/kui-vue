<template>
  <div>
    <h2>Upload 上传</h2>
    <Alert>为了兼容低版本（ie9）浏览器，上传采用模拟表单上传</Alert>
    <h3>基础</h3>
    <Upload :action="action">
      <Button>上传文件</Button>
    </Upload>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>禁用</h3>
    <Upload :action="action" disabled>
      <Button>上传文件</Button>
      <Button type="danger">上传文件</Button>
      <Button>上传文件</Button>
    </Upload>
    <Code lang="xml html">{{demo}}</Code>
    <h3>附带数据上传</h3>
    <Alert>此操作非多此一举，在ajax上传模式中，除了上传文件外，可能会有其他附加参数一起附带表单提交</Alert>
    <Upload :action="action" @change="change" @complite="complite" :data="data">
      <Button>上传文件</Button>
    </Upload>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>非自动上传模式</h3>
    <Upload :action="action" @change="change" @complite="complite" ref="upload" :data="data" type="wait">
      <Button>上传文件</Button>
    </Upload>
    <Button @click="upload">点我开始上传</Button>
    <Code lang="xml html">{{demo3}}</Code>
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
          <td>action</td>
          <td>上传API地址</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>data</td>
          <td>上传附带参数</td>
          <td>Oject</td>
          <td>{ }</td>
        </tr>
        <tr>
          <td>type</td>
          <td>上传类型，可选值为change（选择文件触发上传），wait（选择文件之后，其他事件触发上传）或者不设置</td>
          <td>String</td>
          <td>change</td>
        </tr>
        <tr>
          <td>change</td>
          <td>选择文件之后的回调，返回选中的文件名</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>complite</td>
          <td>上传完成之后的回调，返回值取决于api上传接口返回的值 </td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>upload</td>
          <td>触发上传事件，此方法配合type=wait，选中文件后 手动提交上传</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      action: "/rest/jcmro-sys-service/fileupload/uploadFile",
      data: { a: 1, b: 2, c: 3 },
      demo: `<Upload :action="action" disabled>
   <Button>上传文件</Button>
</Upload>`,
      demo1: `<Upload :action="action">
   <Button>上传文件</Button>
</Upload>`,
      demo2: `<Upload :action="action" @change="change" @complite="complite" :data="data">
   <Button>上传文件</Button>
</Upload>
<script>
export default {
  data() {
    return {
      action: "/rest/jcmro-sys-service/fileupload/uploadFile",
      data: { a: 1, b: 2, c: 3 }, 
    };
  },
  methods: { 
    change(res) {
      console.log(res);
    },
    complite(res) {
      console.log(res);
    }
  }
};
<\/script>`,
      demo3: `<Upload :action="action" @change="change" @complite="complite" :data="data" type="wait">
   <Button>上传文件</Button>
   <Button @click="upload">点我开始上传</Button>
</Upload>
<script>
export default {
  data() {
    return {
      action: "/rest/jcmro-sys-service/fileupload/uploadFile",
      data: { a: 1, b: 2, c: 3 }, 
    };
  },
  methods: { 
    upload() {
      this.$refs.upload.submit();
    },
    change(res) {
      console.log(res);
    },
    complite(res) {
      console.log(res);
    }
  }
};
<\/script>`
    };
  },
  methods: {
    upload() {
      this.$refs.upload.submit();
    },
    change(res) {
      console.log(res);
    },
    complite(res) {
      console.log(res);
    }
  }
};
</script>

