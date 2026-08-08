import { v4 as uuid } from "uuid";
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  reactive,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, UploadStatusType } from "../const/types";
import { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import FileList from "./file-list";
import Selector from "./selector";

export interface UploadFile {
  uid?: string;
  url?: string;
  filename?: string;
  size?: string;
  status?: UploadStatusType;
  percent?: number;
  preview?: string | null;
  response?: any;
  errorText?: string;
  xhr?: XMLHttpRequest;
}

const uploadProps = {
  method: { type: String, default: "post" },
  name: { type: String, default: "file" },
  action: { type: String, required: true as const },
  type: {
    type: String as PropType<"list" | "picture">,
    default: "list",
  },
  data: { type: Object as PropType<Record<string, any>>, default: () => ({}) },
  disabled: Boolean as BooleanType,
  directory: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  accept: String,
  headers: Object as PropType<Record<string, string>>,
  showUploadList: { type: Boolean as BooleanType, default: true },
  transformFile: Function as PropType<(file: File) => File | Promise<File>>,
  fileList: { type: Array as PropType<UploadFile[]>, default: () => [] },
  autoTrigger: { type: Boolean as BooleanType, default: true },
  limit: Number,
  minSize: Number, // KB
  maxSize: Number, // KB
  uploadText: String,
  uploadSubText: String,
  uploadIcon: Array as PropType<IconType[]>,
  draggable: Boolean as BooleanType,
  onChange: Function as PropType<(event: UploadChangeEvent) => void>,
  onRemove: Function as PropType<(event: UploadChangeEvent) => void>,
  onSelectFiles: Function as PropType<(files: UploadFile[]) => void>,
  onExceed: Function as PropType<() => void>,
  onSizeError: Function as PropType<(event: UploadChangeEvent) => void>,
  onBeforeUpload: Function as PropType<(item: UploadFile, file: File) => void>,
};

export type UploadProps = ExtractPropTypes<typeof uploadProps>;

export interface UploadChangeEvent {
  file: UploadFile;
  fileList: UploadFile[];
}

export interface UploadContext extends UploadProps {
  upload: () => void;
}

const Upload = defineComponent({
  name: "Upload",
  props: uploadProps,
  setup(props, { emit, slots, expose }) {
    const injectedLocale = inject<any>("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale?.value || injectedLocale || zhCN;
    });

    const innerFileList = ref<UploadFile[]>([...(props.fileList || [])]);
    const uploadTemp = reactive<Record<string, File>>({});
    const generatedPreviewUrls = new Set<string>();
    let unmounted = false;

    // Watch for fileList changes
    watch(
      () => props.fileList,
      (newVal) => {
        const nextList = [...(newVal || [])];
        const activePreviews = new Set(nextList.map((item) => item.preview).filter(Boolean));
        generatedPreviewUrls.forEach((url) => {
          if (!activePreviews.has(url)) {
            URL.revokeObjectURL(url);
            generatedPreviewUrls.delete(url);
          }
        });
        innerFileList.value = nextList;
      },
      { deep: true }
    );

    const formatFileSize = (fileSize: number) => {
      if (fileSize <= 0) return "0B";
      const k = 1024;
      if (fileSize < k) {
        return fileSize + "B";
      } else if (fileSize < k * k) {
        return (fileSize / k).toFixed(2) + "KB";
      } else if (fileSize < k * k * k) {
        return (fileSize / (k * k)).toFixed(2) + "MB";
      } else {
        return (fileSize / (k * k * k)).toFixed(2) + "GB";
      }
    };

    const triggerUpdate = (fileItem: UploadFile) => {
      emit("update:fileList", innerFileList.value);
      emit("change", { file: fileItem, fileList: innerFileList.value });
    };

    const onSelectFiles = (files: FileList | File[]) => {
      const { limit, minSize, maxSize } = props;
      const fileArray = Array.from(files).filter((f) => f.name !== ".DS_Store");
      let exceeded = false;

      fileArray.forEach((file) => {
        const currentCount = innerFileList.value.length;
        if (limit !== undefined && limit >= 0 && currentCount >= limit) {
          exceeded = true;
          return;
        }

        const item: UploadFile = {
          uid: uuid(),
          filename: file.name,
          size: formatFileSize(file.size),
          status: "waiting",
          percent: 0,
          preview: null,
        };

        const isImage =
          file.type?.startsWith("image/") ||
          /\.(png|jpe?g|gif|webp|bmp|ico|svg|avif|apng)$/i.test(file.name);
        if (isImage) {
          item.preview = URL.createObjectURL(file);
          generatedPreviewUrls.add(item.preview);
        }

        const fileSizeInKB = file.size / 1024;
        if (
          (minSize !== undefined && minSize >= 0 && fileSizeInKB < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && fileSizeInKB > maxSize)
        ) {
          item.errorText = locale.value?.k.upload.errorFileSize;
          item.status = "error";
          innerFileList.value.push(item);
          triggerUpdate(item);
          emit("sizeError", { file: item, fileList: innerFileList.value });
          return;
        }

        handleSelect({ item, file });
      });

      if (exceeded) emit("exceed");
      emit("selectFiles", innerFileList.value);
    };

    const handleSelect = ({ item, file }: { item: UploadFile; file: File }) => {
      innerFileList.value.push(item);
      const reactiveItem = innerFileList.value.find((x) => x.uid === item.uid);
      if (!reactiveItem) return;
      if (reactiveItem.uid) uploadTemp[reactiveItem.uid] = file;
      triggerUpdate(reactiveItem);

      if (props.autoTrigger) uploadFile(reactiveItem, file);
    };

    const handleRemove = ({ index, file }: { index: number; file: UploadFile }) => {
      const currentIndex = innerFileList.value.findIndex(
        (item) => item === file || (!!file.uid && item.uid === file.uid)
      );
      const removeIndex = currentIndex >= 0 ? currentIndex : index;
      const item = innerFileList.value[removeIndex];
      if (!item) return;

      if (item.xhr) {
        item.xhr.onreadystatechange = null;
        item.xhr.onerror = null;
        item.xhr.upload.onloadstart = null;
        item.xhr.upload.onprogress = null;
        item.xhr.abort();
        item.xhr = undefined;
      }

      innerFileList.value.splice(removeIndex, 1);
      item.uid && delete uploadTemp[item.uid];

      if (item.preview && generatedPreviewUrls.has(item.preview)) {
        URL.revokeObjectURL(item.preview);
        generatedPreviewUrls.delete(item.preview);
      }

      emit("update:fileList", innerFileList.value);
      emit("remove", { file: item, fileList: innerFileList.value });
    };

    const upload = () => {
      if (!props.autoTrigger && !props.disabled) {
        Object.keys(uploadTemp).forEach((uid) => {
          const item = innerFileList.value.find((x) => x.uid === uid);
          const file = uploadTemp[uid];
          if (item && file && item.status === "waiting") uploadFile(item, file);
        });
      }
    };

    const uploadFile = (item: UploadFile, file: File) => {
      emit("beforeUpload", item, file);
      if (props.transformFile) {
        Promise.resolve(props.transformFile(file))
          .then((res) => {
            if (unmounted || !innerFileList.value.includes(item)) return;
            toUpload(item, res);
          })
          .catch((error) => {
            if (unmounted || !innerFileList.value.includes(item)) return;
            item.errorText = error instanceof Error ? error.message : String(error || "");
            item.status = "error";
            item.uid && delete uploadTemp[item.uid];
            triggerUpdate(item);
          });
      } else {
        toUpload(item, file);
      }
    };

    const toUpload = (item: UploadFile, file: File) => {
      const { action, method, name, headers, data } = props;
      const formdata = new FormData();
      formdata.append(name, file);

      if (data) {
        Object.keys(data).forEach((k) => formdata.append(k, data[k]));
      }

      const xhr = new XMLHttpRequest();
      item.xhr = xhr;
      let settled = false;

      xhr.open(method.toUpperCase(), action);
      if (headers) {
        for (const k in headers) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && !settled) {
          if (xhr.status >= 200 && xhr.status < 300) {
            settled = true;
            item.status = "success";
            item.percent = 100;
            try {
              item.response = JSON.parse(xhr.responseText);
            } catch (e) {
              item.response = xhr.responseText;
            }
            item.uid && delete uploadTemp[item.uid];
            item.xhr = undefined;
            triggerUpdate(item);
          } else {
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
          item.percent = (event.loaded / event.total) * 100;
        }
      };

      const handleError = () => {
        if (settled) return;
        settled = true;
        item.status = "error";
        item.uid && delete uploadTemp[item.uid];
        item.xhr = undefined;
        triggerUpdate(item);
      };

      xhr.onerror = handleError;
      xhr.send(formdata);
    };

    onBeforeUnmount(() => {
      unmounted = true;
      innerFileList.value.forEach((item) => {
        if (!item.xhr) return;
        item.xhr.onreadystatechange = null;
        item.xhr.onerror = null;
        item.xhr.upload.onloadstart = null;
        item.xhr.upload.onprogress = null;
        item.xhr.abort();
      });
      generatedPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      generatedPreviewUrls.clear();
    });

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
        <Selector
          key="selector"
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
        <FileList key="filelist" {...fileListProps} v-slots={{ selector: () => SelectorNode }} />
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
