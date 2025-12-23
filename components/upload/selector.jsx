import { ref, defineComponent } from "vue";
import Icon from "../icon";
import { Add } from "kui-icons";

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
    locale: Object,
    fileList: Array,
    uploadIcon: [String, Object, Array],
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
  },
  setup(props, { emit, slots }) {
    const dragOver = ref(false);
    const uploadFileRef = ref(null);
    const onDragEnter = (e) => {
      dragOver.value = true;
      e.preventDefault();
      return false;
    };
    const onDragLeave = () => {
      dragOver.value = false;
    };

    const selectFiles = (e) => {
      const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      if (files && files.length > 0) {
        emit("select", files);
      }
      e.target.value = ""; // 清空 input 防止重复选同文件不触发 change
      e.preventDefault();
      dragOver.value = false;
    };
    const onDrop = (e) => {
      selectFiles(e);
      return false;
    };

    const onDragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
      dragOver.value = true;
    };

    const triggerSelect = (e) => {
      if (props.disabled) return;
      uploadFileRef.value?.click();
    };

    return () => {
      const {
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
        fileList,
        locale,
      } = props;
      let isPicture = type == "picture";
      const isLimitExceeded = limit && fileList && fileList.length >= limit;
      const showSelector = !isPicture || !isLimitExceeded;
      if (!showSelector) return null;

      let addProps = {
        class: ["k-upload-add", { "k-upload-drag-over": dragOver.value }],
        onDragenter: draggable ? onDragEnter : null,
        onDrop: draggable ? onDrop : null,
        onDragover: draggable ? onDragOver : null,
        onDragleave: draggable ? onDragLeave : null,
        onClick: triggerSelect,
      };

      return showSelector ? (
        <div class="k-upload-select">
          <div {...addProps}>
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
              <Icon type={uploadIcon || Add} />
            ) : (
              slots.default?.()
            )}
            {(isPicture || (draggable && uploadText)) && (
              <span class="k-upload-text">{uploadText}</span>
            )}
            {draggable && uploadSubText && (
              <span class="k-upload-sub-text">
                {dragOver.value
                  ? locale?.k.upload.releaseToUpload
                  : uploadSubText}
              </span>
            )}
          </div>
        </div>
      ) : null;
    };
  },
});
