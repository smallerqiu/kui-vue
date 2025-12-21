import { ref, defineComponent, inject, computed } from "vue";
import zhCN from "../locale/zh-CN";
import { v4 as uuid } from "uuid";

export default defineComponent({
  name: "Selector",
  props: {
    disabled: Boolean,
    name: { type: String, default: "file" },
    accept: String,
    multiple: Boolean,
    directory: Boolean,
    limit: Number,
    uploadText: String,
    uploadSubText: String,
    draggable: Boolean,
    fileList: Array,
    uploadIcon: [String, Object, Array],
    minSize: Number,
    maxSize: Number,
    autoTrigger: { type: Boolean, default: true },
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
  },
  setup(ps, { emit, slots }) {
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const dragOver = ref(false);
    const uploadFileRef = ref(null);
    const defaultFileList = ref(ps.fileList || []);
    const onDragEnter = (e) => {
      dragOver.value = true;
      e.preventDefault();
      return false;
    };
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
    const selectFiles = (e) => {
      let { limit, minSize, maxSize, autoTrigger } = ps;
      let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

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

        emit("select", { item, file: files[i] });

        // uploadTemp[item.uid] = files[i];

        if (limit && i > limit - 1) {
          emit("exceed");
          return;
        }
        if ((type || "").indexOf("image/") >= 0) {
          item.preview = window.URL.createObjectURL(files[i]);
        }

        let error = false;
        if (
          (minSize !== undefined && minSize >= 0 && size / 1024 < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && size / 1024 > maxSize)
        ) {
          error = true;
          item.errorText = locale?.value.k.upload.errorFileSize;
          item.status = "error";
        }

        defaultFileList.value.push(item);

        emit("before-upload", {
          file: item,
          fileList: defaultFileList.value,
        });

        if (error) {
          emit("change", {
            file: item,
            fileList: defaultFileList.value,
          });
          emit("size-error", {
            file: item,
            fileList: defaultFileList.value,
          });
          continue;
        }

        if (autoTrigger) {
          emit("upload", { item, file: files[i] });
          // uploadFile(item, files[i]);
        }
      }
      e.target.value = "";
    };
    const onDrop = (e) => {
      selectFiles(e);
      e.preventDefault();
      dragOver.value = false;
      return false;
    };

    const onDragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };

    const triggerSelect = (e) => {
      e.cancelBubble = true;
      if (ps.disabled) return false;

      if (uploadFileRef.value) {
        uploadFileRef.value.click();
      }
      return false;
    };

    return () => {
      let {
        name,
        accept,
        multiple,
        directory,
        limit,
        disabled,
        uploadText,
        uploadSubText,
        draggable,
        uploadIcon,
        type,
      } = ps;
      let isPicture = type == "picture";
      let addProps = {
        drag: draggable && dragOver.value ? "over" : null,
        onDragenter: onDragEnter,
        onDrop: onDrop,
        onDragover: onDragOver,
        onDragleave: () => (dragOver.value = false),
        onClick: triggerSelect,
      };
      let showSelector =
        (isPicture && limit && limit > defaultFileList.value.length) ||
        !isPicture ||
        !limit;
      // console.log(type, isPicture, draggable);
      return showSelector ? (
        <div class="k-upload-select">
          <div class="k-upload-add" {...addProps}>
            <input
              type="file"
              class="k-upload-file"
              webkitdirectory={directory}
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={selectFiles}
              ref={uploadFileRef}
            />
            {isPicture || draggable ? (
              <Icon type={uploadIcon} />
            ) : (
              slots.default?.()
            )}
            {isPicture || (draggable && uploadText) ? (
              <span class="k-upload-text">{uploadText}</span>
            ) : null}
            {draggable && uploadSubText ? (
              <span class="k-upload-sub-text">
                {dragOver.value ? "松手开始上传" : uploadSubText}
              </span>
            ) : null}
          </div>
        </div>
      ) : null;
    };
  },
});
