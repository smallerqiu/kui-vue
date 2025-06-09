import { defineComponent, ref, reactive } from "vue";
import zhCN from "../locale/lang/zh-CN";
import Icon from "../icon";
import { Add } from "kui-icons";
export default defineComponent({
  name: "UploadSelector",
  props: {
    draggable: Boolean,
    disabled: Boolean,
    accept: String,
    directory: Boolean,
    name: { type: String, default: "file" },
    multiple: Boolean,
    limit: Number,
    minSize: Number,
    maxSize: Number,
    autoTrigger: { type: Boolean, default: true },
    uploadSubText: String,
    uploadText: String,
    uploadIcon: [String, Array],
  },
  setup(ps, { slots, emit }) {
    const locale = inject("locale", null) || zhCN;
    const dragOver = ref(false);
    const refFile = ref(null);

    const uploadFile = (item, file) => {};

    const onDragEnter = (e) => {
      dragOver.value = true;
      e.preventDefault();
      return false;
    };
    const onDrop = (e) => {
      this.selectFiles(e);
      e.preventDefault();
      dragOver.value = false;
    };
    const onDragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };
    const triggerSelect = (e) => {
      e.cancelBubble = true;
      if (ps.disabled) return false;

      refFile.value.click();
    };
    const formatFileSize = (fileSize) => {
      var temp = "";
      if (fileSize < 1024) {
        return fileSize + "B";
      } else if (fileSize < 1024 * 1024) {
        temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + "KB";
      } else if (fileSize < 1024 * 1024 * 1024) {
        temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + "MB";
      } else {
        temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + "GB";
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
          uid: getUuid(),
          filename: files[i].name,
          size: formatFileSize(size),
          status: "wait",
          percent: 0,
          preview: false,
        };
        uploadTemp[item.uid] = files[i];

        if (limit && i > limit - 1) {
          emit("exceed");
          return;
        }
        if ((type || "").indexOf("image") >= 0) {
          item.preview = window.URL.createObjectURL(files[i]);
        }
        let error = false;
        if (
          (minSize !== undefined && minSize >= 0 && size / 1024 < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && size / 1024 > maxSize)
        ) {
          error = true;
          item.errorText = locale?.k.upload.errorFileSize;
          item.status = "error";
        }
        // if (multiple) {
        this.defaultFileList.push(item);

        emit("before-upload", {
          file: item,
          fileList: this.defaultFileList,
        });

        if (error) {
          emit("change", {
            file: item,
            fileList: this.defaultFileList,
          });
          emit("size-error", {
            file: item,
            fileList: this.defaultFileList,
          });
          continue;
        }

        if (autoTrigger) {
          this.uploadFile(item, files[i]);
        }
      }
      e.target.value = "";
    };
    return () => {
      const props = {
        drag: ps.draggable && dragOver.value ? "over" : null,
        onDragenter: onDragEnter,
        onDrop: onDrop,
        onDragover: onDragOver,
        onDragleave: () => (dragOver.value = false),
        onClick: triggerSelect,
      };
      return (
        <div class="k-upload-select">
          <div class="k-upload-add" {...props}>
            <input
              type="file"
              class="k-upload-file"
              webkitdirectory={ps.directory}
              name={ps.name}
              accept={ps.accept}
              multiple={ps.multiple}
              onChange={selectFiles}
              ref={refFile}
            />
            {isPicture || ps.draggable ? (
              <Icon type={ps.uploadIcon || Add} />
            ) : (
              slots.default?.()
            )}
            {isPicture || (ps.draggable && ps.uploadText) ? (
              <span class="k-upload-text">{ps.uploadText}</span>
            ) : null}
            {ps.draggable && ps.uploadSubText ? (
              <span class="k-upload-sub-text">
                {dragOver.value
                  ? locale?.k.upload.releaseTip
                  : ps.uploadSubText}
              </span>
            ) : null}
          </div>
        </div>
      );
    };
  },
});
