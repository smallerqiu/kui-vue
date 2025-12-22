import { ref, reactive, watch, defineComponent, inject, computed } from "vue";
import { Add } from "kui-icons";
import { withInstall } from "../utils/vue";
import Selector from "./selector";
import FileList from "./fileList";
import { v4 as uuid } from "uuid";
import zhCN from "../locale/zh-CN";

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
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const innerFileList = ref([...(props.fileList || [])]);
    const uploadTemp = reactive({});

    // Watch for fileList changes
    watch(
      () => props.fileList,
      (newVal) => {
        innerFileList.value = newVal || [];
      }
    );
    const formatFileSize = (fileSize) => {
      var temp = 0;
      if (fileSize < 1024) {
        return fileSize + "B";
      } else if (fileSize < 1024 * 1024) {
        temp = fileSize / 1024;
        return temp.toFixed(2) + "KB";
      } else if (fileSize < 1024 * 1024 * 1024) {
        temp = fileSize / (1024 * 1024);
        return temp.toFixed(2) + "MB";
      } else {
        temp = fileSize / (1024 * 1024 * 1024);
        return temp.toFixed(2) + "GB";
      }
    };
    const onSelectFiles = (files) => {
      const currentCount = innerFileList.value?.length;
      const { limit, minSize, maxSize } = props;
      for (let i = 0; i < files.length; i++) {
        let { size, type } = files[i];
        if (files[i].name == ".DS_Store") {
          continue;
        }

        let item = {
          uid: uuid(),
          filename: files[i].name,
          size: formatFileSize(size),
          status: "wait",
          percent: 0,
          preview: null,
        };

        if (limit && currentCount + i >= limit) {
          emit("exceed");
          return;
        }
        if ((type || "").indexOf("image/") >= 0) {
          item.preview = window.URL.createObjectURL(files[i]);
        }

        if (
          (minSize !== undefined && minSize >= 0 && size / 1024 < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && size / 1024 > maxSize)
        ) {
          item.errorText = locale?.value.k.upload.errorFileSize;
          item.status = "error";

          emit("change", {
            file: item,
            fileList: innerFileList.value,
          });
          emit("size-error", {
            file: item,
            fileList: innerFileList.value,
          });
          continue;
        }

        emit("before-upload", {
          file: item,
          fileList: innerFileList.value,
        });
        handleSelect({ item, file: files[i] });
      }
    };
    // 处理 Selector 发来的选择事件
    const handleSelect = ({ item, file }) => {
      innerFileList.value.push(item);
      uploadTemp[item.uid] = file;

      emit("update:fileList", innerFileList.value);
      emit("change", { file: item, fileList: innerFileList.value });

      if (props.autoTrigger) {
        uploadFile(item, file);
      }
    };

    // 处理 FileList 发来的移除事件
    const handleRemove = ({ index, file }) => {
      innerFileList.value.splice(index, 1);
      delete uploadTemp[file.uid];

      // 释放内存
      if (file.preview) window.URL.revokeObjectURL(file.preview);

      emit("update:fileList", innerFileList.value);
      emit("remove", { file, fileList: innerFileList.value });
    };

    const upload = () => {
      if (!props.autoTrigger && !props.disabled) {
        let files = uploadTemp;
        for (let k in files) {
          let item = innerFileList.value.filter((x) => x.uid == k)[0];
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
            fileList: innerFileList.value,
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
          fileList: innerFileList.value,
          event,
        });
      };

      xhr.onload = (event) => {
        if (xhr.status != 200) {
          item.status = "error";
          delete uploadTemp[item.uid];

          emit("change", {
            file: Object.assign(item, { response: xhr.responseText }),
            fileList: innerFileList.value,
            event: event,
          });
        }
      };

      xhr.onerror = (event) => {
        item.status = "error";
        delete uploadTemp[item.uid];

        emit("change", {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: innerFileList.value,
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
        fileList: innerFileList.value,
        uploadIcon,
        locale: locale.value,
        onSelect: onSelectFiles,
      };
      const SelectorNode = (
        <Selector
          {...selectorProps}
          v-slots={{ default: () => slots.default?.() }}
        />
      );
      const fileListProps = {
        type,
        fileList: innerFileList.value,
        showUploadList,
        disabled,
        locale: locale.value,
        onRemove: handleRemove,
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
