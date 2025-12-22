import { ref, defineComponent } from "vue";

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
  setup(ps, { emit, slots }) {
    const dragOver = ref(false);
    const uploadFileRef = ref(null);
    const onDragEnter = (e) => {
      dragOver.value = true;
      e.preventDefault();
      return false;
    };

    const selectFiles = (e) => {
      let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      emit("select", files);
      e.target.value = "";
      e.preventDefault();
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
        (isPicture && limit && limit > (ps.fileList?.length || 0)) ||
        !isPicture ||
        !limit;
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
                {dragOver.value
                  ? ps.locale?.k.upload.releaseToUpload
                  : uploadSubText}
              </span>
            ) : null}
          </div>
        </div>
      ) : null;
    };
  },
});
