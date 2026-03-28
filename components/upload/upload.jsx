import { v4 as uuid } from "uuid";
import { computed, defineComponent, inject, reactive, ref, watch } from "vue";
import zhCN from "../locale/zh-CN";

import FileList from "./file-list";
import Selector from "./selector";

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
  emits: [
    "remove",
    "exceed",
    "beforeUpload",
    "change",
    "sizeError",
    "update:fileList",
    "onSelectFiles",
  ],
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
      },
      { deep: true }
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

    const triggerUpdate = (fileItem) => {
      emit("update:fileList", innerFileList.value);
      emit("change", { file: fileItem, fileList: innerFileList.value });
    };
    const onSelectFiles = (files) => {
      const currentCount = innerFileList.value?.length;
      const { limit, minSize, maxSize } = props;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.name == ".DS_Store") {
          continue;
        }

        let item = {
          uid: uuid(),
          filename: file.name,
          size: formatFileSize(file.size),
          status: "wait",
          percent: 0,
          preview: null,
        };

        if (limit && currentCount + i >= limit) {
          emit("exceed");
          return;
        }
        if ((file.type || "").indexOf("image/") >= 0) {
          const isImageByName = (name = "") =>
            /\.(png|jpe?g|gif|webp|bmp|ico|svg|avif|apng)$/i.test(name);
          if (isImageByName(file.name)) {
            item.preview = window.URL.createObjectURL(file);
          }
        }

        if (
          (minSize !== undefined && minSize >= 0 && file.size / 1024 < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && file.size / 1024 > maxSize)
        ) {
          item.errorText = locale?.value.k.upload.errorFileSize;
          item.status = "error";
          innerFileList.value.push(item);
          triggerUpdate(item);
          emit("sizeError", {
            file: item,
            fileList: innerFileList.value,
          });
          continue;
        }

        handleSelect({ item, file });
      }

      emit("onSelectFiles", innerFileList.value);
    };
    // 处理 Selector 发来的选择事件
    const handleSelect = ({ item, file }) => {
      innerFileList.value.push(item);

      const reactiveItem = innerFileList.value.find((x) => x.uid === item.uid);
      if (!reactiveItem) return;

      uploadTemp[reactiveItem.uid] = file;
      triggerUpdate(reactiveItem);

      if (props.autoTrigger) {
        uploadFile(reactiveItem, file);
      }
    };

    // 处理 FileList 发来的移除事件
    const handleRemove = ({ index, file }) => {
      const item = innerFileList.value[index];
      if (!item) return;

      if (item.xhr) {
        item.xhr.abort();
      }

      innerFileList.value.splice(index, 1);
      delete uploadTemp[file.uid];

      if (file.preview) window.URL.revokeObjectURL(file.preview);

      emit("update:fileList", innerFileList.value);
      emit("remove", { file, fileList: innerFileList.value });
    };

    const upload = () => {
      if (!props.autoTrigger && !props.disabled) {
        Object.keys(uploadTemp).forEach((uid) => {
          const item = innerFileList.value.find((x) => x.uid === uid);
          const file = uploadTemp[uid];
          if (item && file && item.status === "wait") {
            uploadFile(item, file);
          }
        });
      }
    };

    const uploadFile = async (item, file) => {
      emit("beforeUpload", {
        file: item,
        fileList: innerFileList.value,
      });
      if (props.transformFile) {
        const result = props.transformFile(file);
        if (result instanceof Promise) {
          result.then((f) => toUpload(item, f));
        } else {
          toUpload(item, result);
        }
      } else {
        toUpload(item, file);
      }
    };

    const toUpload = (item, file) => {
      const { action, name, headers, data } = props;
      const formdata = new FormData();
      formdata.append(name, file);

      if (data) {
        for (const k in data) {
          formdata.append(k, data[k]);
        }
      }

      const xhr = new XMLHttpRequest();
      item.xhr = xhr; // 将 xhr 挂载到对象上以便取消

      xhr.open("post", action);
      if (headers) {
        for (const k in headers) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            item.status = "success";
            item.percent = 100; // 确保完成是 100%
            try {
              item.response = JSON.parse(xhr.responseText);
            } catch (e) {
              item.response = xhr.responseText;
            }
            delete uploadTemp[item.uid];
            triggerUpdate(item);
          } else {
            // 处理非 200 的完成状态
            handleError();
          }
        }
      };

      xhr.upload.onloadstart = () => {
        item.status = "uploading";
        triggerUpdate(item);
      };

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          // 直接修改响应式对象，Vue 会自动更新 UI
          item.percent = (event.loaded / event.total) * 100;
        }
      };

      const handleError = () => {
        item.status = "error";
        delete uploadTemp[item.uid];
        triggerUpdate(item);
      };

      xhr.onerror = handleError;
      xhr.send(formdata);
    };

    expose({ upload });

    return () => {
      const {
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

      const isPicture = type === "picture";

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
        <Selector {...selectorProps} v-slots={{ default: () => slots.default?.() }} />
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
        <FileList {...fileListProps} v-slots={{ selector: () => SelectorNode }} />
      );
      return (
        <div
          class={[
            "k-upload",
            {
              "k-upload-disabled": disabled,
              "k-upload-picture": isPicture,
              "k-upload-drag": draggable,
            },
          ]}
        >
          {!isPicture ? [SelectorNode, FileListNode] : FileListNode}
        </div>
      );
    };
  },
});

export default Upload;
