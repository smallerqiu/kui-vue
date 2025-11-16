import { t } from "../locale";
import zhCN from "../locale/lang/zh-CN";

import { DocumentTextOutline, Close, AlertCircle, Add } from "kui-icons";
let count = 0;
const timestamp = Date.now();

import Selector from "./selector";
import FileItem from "./fileItem";
import { defineComponent } from "vue";
import { withInstall } from '../utils/vue';
const Upload = defineComponent({
  name: "Upload",
  props: {
    method: { type: String, default: "post" },
    name: { type: String, default: "file" }, //提交的 name值
    action: { type: String, required: true },
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
    data: { type: Object, default: () => { } },
    disabled: Boolean,
    directory: Boolean,
    multiple: Boolean,
    accept: String,
    headers: Object,
    showUploadList: { type: Boolean, default: true },
    transformFile: Function,
    fileList: Array,
    autoTrigger: { type: Boolean, default: true },
    limit: Number,
    minSize: Number,
    maxSize: Number,
    uploadText: String,
    uploadSubText: String,
    uploadIcon: [String, Array],
    draggable: Boolean,
  },
  watch: {
    fileList(v) {
      this.defaultFileList = v || [];
    },
  },
  data() {
    return {
      defaultFileList: this.fileList || [],
      count: 0,
      uploadTemp: {},
    };
  },

  methods: {
    upload() {
      if (!this.autoTrigger && !this.disabled) {
        let files = this.uploadTemp;
        for (let k in files) {
          let item = this.defaultFileList.filter((x) => x.uid == k)[0];
          item && this.uploadFile(item, files[k]);
        }
      }
    },

    async uploadFile(item, file) {
      if (this.transformFile) {
        this.transformFile(file).then((f) => {
          this.toUpload(item, f);
        });
      } else {
        this.toUpload(item, file);
      }
    },
    toUpload(item, file) {
      let { action, name, headers, data } = this;
      var formdata = new FormData();
      formdata.append(name, file);
      if (data) {
        for (let k in data) {
          formdata.append(k, data[k]);
        }
      }
      //创建xhr，使用ajax进行文件上传
      var xhr = new XMLHttpRequest();
      item.xhr = xhr;

      xhr.open("post", action);
      if (headers) {
        for (let k in headers) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }
      //回调
      xhr.onreadystatechange = (event) => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          item.status = "success";
          delete this.uploadTemp[item.uid];
          this.$emit("change", {
            file: Object.assign(item, {
              response: JSON.parse(xhr.responseText),
            }),
            fileList: this.defaultFileList,
            event,
          });
        }
      };
      xhr.upload.onloadstart = () => (item.status = "uploading");
      //获取上传的进度
      xhr.upload.onprogress = (event) => {
        // console.log(event)
        if (event.lengthComputable) {
          var percent = (event.loaded / event.total) * 100;
          // console.log(percent)
          item.percent = percent;
        }
        this.$emit("change", {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: this.defaultFileList,
          event,
        });
      };
      xhr.onload = (e) => {
        if (xhr.status != 200) {
          item.status = "error";
          delete this.uploadTemp[item.uid];

          this.$emit("change", {
            file: Object.assign(item, { response: xhr.responseText }),
            fileList: this.defaultFileList,
            event: event,
          });
        }
      };
      xhr.onerror = (event) => {
        item.status = "error";
        delete this.uploadTemp[item.uid];

        this.$emit("change", {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: this.defaultFileList,
          event: event,
        });
      };
      //将formdata上传
      xhr.send(formdata);
    },
  },

  setup(ps, { slots, emit }) {
    let { type, showUploadList, defaultFileList } = this;
    let isPicture = type == "picture";
    const uploadTemp = reactive({});

    let showSelector =
      (isPicture && ps.limit && ps.limit > defaultFileList.length) ||
      !isPicture ||
      !ps.limit;

    const selector = showSelector ? <Selector /> : null;
    const onRemove = (index, item) => {
      // if (ps.disabled) return false;
      // let item = this.defaultFileList[i];
      // this.defaultFileList.splice(i, 1);

      // delete this.uploadTemp[item.uid];
      // item.xhr && item.xhr.abort();
      // emit("remove", { fiel: item, fileList: defaultFileList });
    };
    const renderFileList = () => {
      return (showUploadList && !isPicture) || isPicture ? (
        <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
          {defaultFileList.map((item, i) => {
            return <FileItem onRemove={onRemove} item={item} index={i} />;
          })}
          {isPicture && selector}
        </div>
      ) : null;
    };

    return () => {
      const props = {
        class: [
          "k-upload",
          {
            ["k-upload-disabled"]: ps.disabled,
            ["k-upload-picture"]: isPicture,
            ["k-upload-drag"]: ps.draggable,
          },
        ],
      };
      const filelist = renderFileList();

      return (
        <div {...props}>{!isPicture ? [selector, filsList] : filsList}</div>
      );
    };
  },
});
export default withInstall(Upload)