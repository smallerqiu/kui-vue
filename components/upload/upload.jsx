import { ref, reactive, watch, defineComponent } from "vue";
import { Add } from "kui-icons";
import { withInstall } from "../utils/vue";
import Selector from "./selector";
import FileList from "./fileList";

const Upload = defineComponent({
  name: "Upload",
  props: {
    method: { type: String, default: "post" },
    name: { type: String, default: "file" },
    action: { type: String, required: true },
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
    data: { type: Object, default: () => ({}) },
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
    uploadIcon: [String, Object, Array],
    draggable: Boolean,
  },
  emits: ["remove", "exceed", "before-upload", "change", "size-error"],
  setup(props, { emit, slots, expose }) {
    const defaultFileList = ref(props.fileList || []);
    const uploadTemp = reactive({});

    // Watch for fileList changes
    watch(
      () => props.fileList,
      (newVal) => {
        defaultFileList.value = newVal || [];
      }
    );

    const upload = () => {
      if (!props.autoTrigger && !props.disabled) {
        let files = uploadTemp;
        for (let k in files) {
          let item = defaultFileList.value.filter((x) => x.uid == k)[0];
          item && uploadFile(item, files[k]);
        }
      }
    };

    const uploadFile = async (item, file) => {
      if (props.transformFile) {
        const promise = props.transformFile(file);
        if (promise && promise.then) {
          promise.then((f) => {
            toUpload(item, f);
          });
        }
      } else {
        toUpload(item, file);
      }
    };

    const toUpload = (item, file) => {
      let { action, name, headers, data } = props;
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
          delete uploadTemp[item.uid];
          emit("change", {
            file: Object.assign(item, {
              response: JSON.parse(xhr.responseText),
            }),
            fileList: defaultFileList.value,
            event,
          });
        }
      };

      xhr.upload.onloadstart = () => (item.status = "uploading");

      //获取上传的进度
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          var percent = (event.loaded / event.total) * 100;
          item.percent = percent;
        }
        emit("change", {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: defaultFileList.value,
          event,
        });
      };

      xhr.onload = (event) => {
        if (xhr.status != 200) {
          item.status = "error";
          delete uploadTemp[item.uid];

          emit("change", {
            file: Object.assign(item, { response: xhr.responseText }),
            fileList: defaultFileList.value,
            event: event,
          });
        }
      };

      xhr.onerror = (event) => {
        item.status = "error";
        delete uploadTemp[item.uid];

        emit("change", {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: defaultFileList.value,
          event: event,
        });
      };

      //将formdata上传
      xhr.send(formdata);
    };

    expose({ upload });

    return () => {
      let {
        type,
        showUploadList,
        uploadIcon,
        name,
        accept,
        multiple,
        directory,
        limit,
        uploadText,
        uploadSubText,
        draggable,
        disabled,
        minSize,
        maxSize,
        autoTrigger,
      } = props;

      let isPicture = type == "picture";
      if (uploadIcon === undefined) {
        uploadIcon = Add;
      }

      const propsData = {
        class: [
          "k-upload",
          {
            ["k-upload-disabled"]: disabled,
            ["k-upload-picture"]: isPicture,
            ["k-upload-drag"]: draggable,
          },
        ],
      };

      const selectorProps = {
        type,
        disabled,
        name,
        accept,
        multiple,
        directory,
        limit,
        uploadText,
        uploadSubText,
        draggable,
        fileList: defaultFileList.value,
        uploadIcon,
        minSize,
        maxSize,
        autoTrigger,
        onUpload: ({ item, file }) => {
          uploadFile(item, file);
        },
        onSelect: ({ item, file }) => {
          uploadTemp[item.uid] = file;
        },
        onExceed: (data) => {
          emit("exceed", data);
        },
        onBeforeUpload: (data) => {
          emit("before-upload", data);
        },
        onChange: (data) => {
          emit("change", data);
        },
        onSizeError: (data) => {
          emit("size-error", data);
        },
      };
      const SelectorNode = (
        <Selector
          {...selectorProps}
          v-slots={{ default: () => slots.default?.() }}
        />
      );
      const fileListProps = {
        type,
        fileList: defaultFileList.value,
        showUploadList,
        disabled,
        onRemove: (data) => {
          delete uploadTemp[data.file.uid];
          emit("remove", data);
        },
      };
      const FileListNode = (
        <FileList
          {...fileListProps}
          v-slots={{ selector: () => SelectorNode }}
        />
      );
      return (
        <div {...propsData}>
          {!isPicture ? [SelectorNode, FileListNode] : FileListNode}
        </div>
      );
    };
  },
});

export default withInstall(Upload);
