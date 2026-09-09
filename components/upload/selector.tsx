import { Plus } from "kui-icons";
import { defineComponent, ref, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import type { IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import type { UploadFile } from "./types";

const selectorProps = {
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  name: { type: String, default: "file" },
  accept: String,
  multiple: Boolean as BooleanType,
  directory: Boolean as BooleanType,
  limit: Number,
  uploadText: String,
  uploadSubText: String,
  draggable: Boolean as BooleanType,
  locale: Object as PropType<typeof zhCN>,
  fileList: Array as PropType<UploadFile[]>,
  uploadIcon: Array as PropType<IconType[]>,
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
  emits: {
    select: (files: File[]) => Array.isArray(files),
  },
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
      if (props.disabled || props.readonly) {
        e.preventDefault();
        dragOver.value = false;
        return;
      }
      const files = (e as DragEvent).dataTransfer
        ? (e as DragEvent).dataTransfer?.files
        : (e.target as HTMLInputElement).files;
      if (files && files.length > 0) emit("select", files);
      if (e.target instanceof HTMLInputElement) e.target.value = "";
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
      if (props.disabled || props.readonly) return;
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
      const normalizedLimit = limit !== undefined && limit >= 0 ? Math.floor(limit) : undefined;
      const isLimitExceeded =
        normalizedLimit !== undefined && !!fileList && fileList.length >= normalizedLimit;
      const showSelector = !isPicture || !isLimitExceeded;
      const directoryProps: { webkitdirectory?: string } = directory
        ? { webkitdirectory: "true" }
        : {};
      if (!showSelector) return null;

      const addProps = {
        class: ["k-upload-add", { "k-upload-drag-over": dragOver.value }],
        role: "button",
        tabindex: disabled ? -1 : 0,
        "aria-disabled": disabled ? "true" : undefined,
        onDragenter: draggable && !disabled ? onDragEnter : undefined,
        onDrop: draggable && !disabled ? onDrop : undefined,
        onDragover: draggable && !disabled ? onDragOver : undefined,
        onDragleave: draggable && !disabled ? onDragLeave : undefined,
        onClick: triggerSelect,
        onKeydown: (event: KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            triggerSelect();
          }
        },
      };

      return showSelector ? (
        <div class="k-upload-select">
          <div {...addProps}>
            <input
              type="file"
              class="k-upload-file"
              {...directoryProps}
              name={name}
              accept={accept}
              disabled={disabled}
              multiple={multiple}
              onChange={selectFiles}
              ref={uploadFileRef}
            />
            {isPicture || draggable ? <Icon type={uploadIcon || Plus} /> : slots.default?.()}
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
