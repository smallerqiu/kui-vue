import { Add } from "kui-icons";
import { defineComponent, ref, type ExtractPropTypes, type PropType } from "vue";
import Icon from "../icon";
import type { UploadFile } from "./index";

export const selectorProps = {
  disabled: Boolean,
  name: { type: String, default: "file" },
  accept: String,
  multiple: Boolean,
  directory: Boolean,
  limit: Number,
  uploadText: String,
  uploadSubText: String,
  draggable: Boolean,
  locale: Object as PropType<any>,
  fileList: Array as PropType<UploadFile[]>,
  uploadIcon: [String, Object, Array] as PropType<any>,
  type: {
    type: String as PropType<"list" | "picture">,
    default: "list",
    validator: (val: string) => ["list", "picture"].indexOf(val) >= 0,
  },
};

export type SelectorProps = ExtractPropTypes<typeof selectorProps>;

export default defineComponent({
  name: "Selector",
  props: selectorProps,
  emits: ["select"],
  setup(props, { emit, slots }) {
    const dragOver = ref(false);
    const uploadFileRef = ref<HTMLInputElement | null>(null);

    const onDragEnter = (e: DragEvent) => {
      dragOver.value = true;
      e.preventDefault();
    };
    const onDragLeave = () => {
      dragOver.value = false;
    };

    const selectFiles = (e: Event | DragEvent) => {
      const files = (e as DragEvent).dataTransfer ? (e as DragEvent).dataTransfer?.files : (e.target as HTMLInputElement).files;
      if (files && files.length > 0) emit("select", files);
      if (e.target) (e.target as HTMLInputElement).value = ""; 
      e.preventDefault();
      dragOver.value = false;
    };

    const onDrop = (e: DragEvent) => {
      selectFiles(e);
    };

    const onDragOver = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      dragOver.value = true;
    };

    const triggerSelect = () => {
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
      const isPicture = type === "picture";
      const isLimitExceeded = !!(limit && fileList && fileList.length >= limit);
      const showSelector = !isPicture || !isLimitExceeded;
      if (!showSelector) return null;

      let addProps = {
        class: ["k-upload-add", { "k-upload-drag-over": dragOver.value }],
        onDragenter: draggable ? onDragEnter : undefined,
        onDrop: draggable ? onDrop : undefined,
        onDragover: draggable ? onDragOver : undefined,
        onDragleave: draggable ? onDragLeave : undefined,
        onClick: triggerSelect,
      };

      return showSelector ? (
        <div class="k-upload-select">
          <div {...addProps}>
            <input
              type="file"
              class="k-upload-file"
              {...({ webkitdirectory: directory ? "true" : undefined } as any)}
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={selectFiles}
              ref={uploadFileRef}
            />
            {isPicture || draggable ? <Icon type={uploadIcon || Add} /> : slots.default?.()}
            {(isPicture || (draggable && uploadText)) && (
              <span class="k-upload-text">{uploadText}</span>
            )}
            {draggable && uploadSubText && (
              <span class="k-upload-sub-text">
                {dragOver.value ? locale?.k.upload.releaseToUpload : uploadSubText}
              </span>
            )}
          </div>
        </div>
      ) : null;
    };
  },
});
