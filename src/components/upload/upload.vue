<template>
  <div :class='classes' @click.stop="changeFile">
    <slot></slot>
    <div class="k-upload-form">
      <iframe frameborder="0" :name="`k-upload-iframe-${span}`" style="display:none;" ref="k-upload-iframe"></iframe>
      <form :action="action" :method="method" enctype="multipart/form-data" style="display:none;" ref="k-upload-form" :target="`k-upload-iframe-${span}`">
        <input type="file" :name="name" :id="id" @change="upload($event)" ref="k-upload-file" />
        <input type="hidden" :name="key" :id="key" :value="item" v-for="(item,key) in data" :key="key" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Upload",
  props: {
    method: { type: String, default: "post" },
    name: { type: String }, //提交的 name值
    id: { type: String }, //提交的 id值
    action: { type: String, required: true }, //url 要带/rest
    type: { type: String, default: "change" },
    data: { type: Object, default: () => {} },
    disabled: Boolean,
    maxFileSize: { type: [String, Number] },
    fileExtension: String
  },
  computed: {
    classes() {
      return [
        "k-upload",
        {
          ["k-upload-disabled"]: this.disabled
        }
      ];
    }
  },
  data() {
    return {
      // select: false,
      // file: null,
      // target: null,
      span: Math.floor(Math.random() * 99999999)
    };
  },
  mounted() {
    const fm = this.$refs["k-upload-iframe"];
    if (!fm) return;
    if (fm.attachEvent) {
      fm.attachEvent("onload", e => this.complite(fm, e));
    } else {
      fm.onload = e => this.complite(fm, e);
    }
  },
  methods: {
    changeFile: function(e) {
      e.cancelBubble = true;
      if (this.disabled) return false;

      this.$refs["k-upload-file"].click();
      return false;
    },
    upload: function(e) {
      let file = e.target.value;

      // 为空判断
      if (!file) {
        this.$Message.error("请选择上传文件");
        return false;
      }

      // 判断文件大小
      if (this.maxFileSize > 0) {
        var fileSize = 0;
        // ActiveXObject 涉及到浏览器安全等级，无法执行所以干掉了
        // var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
        // if (isIE && !this.target.files) {
        //   var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        //   var file = fileSystem.GetFile(this.file);
        //   fileSize = file.Size;
        // } else {
        fileSize = e.target.files[0].size;
        // }
        if (fileSize / 1024 / 1024 > this.maxFileSize) {
          e.target.value = ''
          this.$Message.error(`上传文件不能大于${this.maxFileSize}MB,请重新选择`);
          return;
        }
      }
      // 判断文件扩展名
      if (this.fileExtension) {
        var fileExt = file.substring(file.lastIndexOf(".")).toLowerCase();
        // '.jpg'.match('/.jpg|.gif|.png|.bmp/g')
        if (!fileExt.match(`/${this.fileExtension}/g`)) {
          e.target.value = ''
          this.$Message.error(`上传格式只支持${this.fileExtension}等格式`);
          return false;
        }
      }

      file && this.$emit("change", file);
      this.type === "change" && file && this.submit();
    },
    submit: function() {
      if (this.type !== "change" && this.type !== "wait") return false;
      this.$emit("beforeUpload");
      this.$refs["k-upload-form"].submit();
    },
    complite: function(fm, e) {
      let doc = fm.contentWindow || fm.contentDocument;
      let data = "";
      try {
        if (doc.document) {
          doc = doc.document;
          let content = doc.body.textContent;
          if (content) {
            data = eval("(" + content + ")");
            this.$emit("complite", data);
            this.$refs["k-upload-file"].value = "";
            // this.select = false;
            // this.file = null;
          }
        }
      } catch (e) {
        let msg =
          e.message.indexOf("cross-origin") >= 0
            ? "不支持跨域上传!"
            : "上传失败！";
        this.$Message.error(msg);
        this.$refs["k-upload-file"].value = "";
        data = e.message;
      }
      this.$emit("afterUpload", data);
    }
  }
};
</script>

