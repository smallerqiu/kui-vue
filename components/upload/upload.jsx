import { ref, reactive, watch, getCurrentInstance } from "vue";
import Icon from "../icon";
import { t } from "../locale";
import Progress from "../progress";
import Tooltip from "../tooltip";
import { DocumentTextOutline, Close, AlertCircle, Add } from "kui-icons";
import { withInstall } from "../utils/vue";

let count = 0;
const timestamp = Date.now();

function getUuid() {
  return `k-upload-${timestamp}-${count++}`;
}

const Upload = {
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
    uploadIcon: [String, Array],
    draggable: Boolean,
  },
  emits: ["remove", "exceed", "before-upload", "change", "size-error"],
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const defaultFileList = ref(props.fileList || []);
    const uploadTemp = reactive({});
    const dragOver = ref(false);
    const uploadFileRef = ref(null);

    // Watch for fileList changes
    watch(
      () => props.fileList,
      (newVal) => {
        defaultFileList.value = newVal || [];
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

    const triggerSelect = (e) => {
      e.cancelBubble = true;
      if (props.disabled) return false;

      if (uploadFileRef.value) {
        uploadFileRef.value.click();
      }
      return false;
    };

    const remove = (i) => {
      if (props.disabled) return false;
      let item = defaultFileList.value[i];
      defaultFileList.value.splice(i, 1);

      delete uploadTemp[item.uid];
      if (item.xhr) item.xhr.abort();

      emit("remove", {
        file: item,
        fileList: defaultFileList.value,
      });
    };

    const upload = () => {
      if (!props.autoTrigger && !props.disabled) {
        let files = uploadTemp;
        for (let k in files) {
          let item = defaultFileList.value.filter((x) => x.uid == k)[0];
          item && uploadFile(item, files[k]);
        }
      }
    };

    const selectFiles = (e) => {
      let { limit, minSize, maxSize, autoTrigger } = props;
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
          preview: null,
        };

        uploadTemp[item.uid] = files[i];

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
          item.errorText = t("k.upload.errorFileSize");
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
          uploadFile(item, files[i]);
        }
      }
      e.target.value = "";
    };

    const uploadFile = async (item, file) => {
      if (props.transformFile) {
        props.transformFile(file).then((f) => {
          toUpload(item, f);
        });
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

      xhr.onload = () => {
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

    const getPreview = (item) => {
      if (item.preview == true && item.url) {
        return <img src={item.url} />;
      }
      if (item.preview) {
        return <img src={item.preview} />;
      } else if (item.url) {
        return <img src={item.url} />;
      } else {
        return null;
      }
    };

    const onDrop = (e) => {
      selectFiles(e);
      e.preventDefault();
      dragOver.value = false;
      return false;
    };

    const onDragEnter = (e) => {
      dragOver.value = true;
      e.preventDefault();
      return false;
    };

    const onDragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };

    expose({ upload })

    return () => {
      let {
        name,
        accept,
        multiple,
        directory,
        type,
        showUploadList,
        uploadIcon,
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

      let addProps = {
        attrs: {
          drag: draggable && dragOver.value ? "over" : null,
        },
        on: {
          dragenter: onDragEnter,
          drop: onDrop,
          dragover: onDragOver,
          dragleave: () => (dragOver.value = false),
          click: triggerSelect,
        },
      };

      let showSelector =
        (isPicture && limit && limit > defaultFileList.value.length) ||
        !isPicture ||
        !limit;
      const selector = showSelector ? (
        <div class="k-upload-select">
          <div class="k-upload-add" {...addProps}>
            <input
              type="file"
              class="k-upload-file"
              webkitdirectory={directory}
              name={name}
              accept={accept}
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

      const filsList = (selectorEl) => {
        return (showUploadList && !isPicture) || isPicture ? (
          <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
            {defaultFileList.value.map((item, i) => {
              let statusText =
                item.status == "success"
                  ? t("k.upload.successful")
                  : item.errorText || t("k.upload.failed");
              delete item.errorText;
              item.uid = item.uid || getUuid();
              return (
                <div
                  class={[
                    `k-upload-file-${type}-item`,
                    `k-upload-file-status-${item.status}`,
                  ]}
                  key={item.uid}
                >
                  <div
                    class={`k-upload-${isPicture ? "picture" : "file"}-preview`}
                  >
                    {getPreview(item) || <Icon type={DocumentTextOutline} />}
                  </div>
                  <div class="k-upload-file-item-info">
                    {!isPicture ? (
                      <div class="k-upload-file-main">
                        <span class="k-upload-file-name">{item.filename}</span>
                        <span class="k-upload-file-size">{item.size}</span>
                      </div>
                    ) : null}
                    {item.status != "wait" ? (
                      <div class="k-upload-file-status">
                        {item.status == "uploading" ? (
                          <Progress
                            percent={item.percent}
                            type={`${isPicture ? "circle" : "line"}`}
                            size="small"
                            showInfo={false}
                            status="active"
                            strokeWidth={15}
                          />
                        ) : statusText && !isPicture ? (
                          <div class="k-upload-file-status-text">
                            <Icon type={AlertCircle} />
                            {statusText}
                          </div>
                        ) : null}

                        {isPicture && item.status == "error" ? (
                          <Tooltip title={statusText} placement="bottom">
                            <Icon type={AlertCircle} />
                          </Tooltip>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <Icon
                    type={Close}
                    class={`k-upload-file-${isPicture ? "picture" : "item"}-remove`}
                    onClick={() => remove(i)}
                  />
                </div>
              );
            })}
            {isPicture && selectorEl}
          </div>
        ) : null;
      };

      return (
        <div {...propsData}>
          {!isPicture ? [selector, filsList()] : filsList(selector)}
        </div>
      );
    };
  },
};

export default withInstall(Upload);
