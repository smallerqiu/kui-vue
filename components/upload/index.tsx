import { v4 as uuid } from "uuid";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  onBeforeUnmount,
  reactive,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import type { BooleanType } from "../const/types";
import { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import FileList from "./file-list";
import Selector from "./selector";
import type {
  UploadChangeEvent,
  UploadCustomRequest,
  UploadFile,
  UploadRequestHandle,
  UploadSortEvent,
} from "./types";

const uploadProps = {
  method: { type: String, default: "post" },
  name: { type: String, default: "file" },
  action: String,
  type: {
    type: String as PropType<"list" | "picture">,
    default: "list",
  },
  data: {
    type: Object as PropType<Record<string, string | number | boolean | Blob>>,
    default: () => ({}),
  },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  directory: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  accept: String,
  headers: Object as PropType<Record<string, string>>,
  withCredentials: Boolean as BooleanType,
  timeout: { type: Number, default: 0 },
  customRequest: Function as PropType<UploadCustomRequest>,
  parseResponse: Function as PropType<(xhr: XMLHttpRequest) => unknown>,
  showUploadList: { type: Boolean as BooleanType, default: true },
  transformFile: Function as PropType<(file: File) => File | Blob | Promise<File | Blob>>,
  fileList: Array as PropType<UploadFile[]>,
  defaultFileList: { type: Array as PropType<UploadFile[]>, default: () => [] },
  autoTrigger: { type: Boolean as BooleanType, default: true },
  limit: Number,
  minSize: Number, // KB
  maxSize: Number, // KB
  uploadText: String,
  uploadSubText: String,
  uploadIcon: Array as PropType<IconType[]>,
  draggable: Boolean as BooleanType,
  sortable: Boolean as BooleanType,
  preview: { type: Boolean as BooleanType, default: true },
  validateAccept: { type: Boolean as BooleanType, default: true },
  maxConcurrent: { type: Number, default: Infinity },
  onChange: Function as PropType<(event: UploadChangeEvent) => void>,
  onRemove: Function as PropType<(event: UploadChangeEvent) => void>,
  onSelectFiles: Function as PropType<(files: UploadFile[]) => void>,
  onExceed: Function as PropType<() => void>,
  onSizeError: Function as PropType<(event: UploadChangeEvent) => void>,
  onTypeError: Function as PropType<(event: UploadChangeEvent) => void>,
  onSort: Function as PropType<(event: UploadSortEvent) => void>,
  onBeforeUpload: Function as PropType<
    (
      item: UploadFile,
      file: File,
    ) => boolean | File | Blob | void | Promise<boolean | File | Blob | void>
  >,
};

export type UploadProps = ExtractPropTypes<typeof uploadProps>;

export interface UploadContext extends UploadProps {
  upload: () => void;
  abort: (file?: UploadFile) => void;
  retry: (file: UploadFile) => void;
}

const Upload = defineComponent({
  name: "Upload",
  props: uploadProps,
  setup(props, { emit, slots, expose }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const innerFileList = ref<UploadFile[]>([...(props.fileList ?? props.defaultFileList)]);
    const uploadTemp = reactive<Record<string, File>>({});
    const generatedPreviewUrls = new Set<string>();
    const requestHandles = new Map<string, UploadRequestHandle>();
    const queuedUids = new Set<string>();
    let activeUploads = 0;
    let unmounted = false;

    const matchesAccept = (file: File) => {
      if (!props.accept || !props.validateAccept) return true;
      return props.accept.split(",").some((rule) => {
        const value = rule.trim().toLowerCase();
        if (!value) return false;
        if (value.startsWith(".")) return file.name.toLowerCase().endsWith(value);
        if (value.endsWith("/*")) return file.type.toLowerCase().startsWith(value.slice(0, -1));
        return file.type.toLowerCase() === value;
      });
    };

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
      { deep: true },
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
      if (props.readonly) return;
      const { limit, minSize, maxSize } = props;
      const selectedFiles = Array.from(files).filter((file) => file.name !== ".DS_Store");
      const fileArray = props.multiple ? selectedFiles : selectedFiles.slice(0, 1);
      const normalizedLimit = limit !== undefined && limit >= 0 ? Math.floor(limit) : undefined;
      let exceeded = false;

      fileArray.forEach((file) => {
        const currentCount = innerFileList.value.length;
        if (normalizedLimit !== undefined && currentCount >= normalizedLimit) {
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

        if (!matchesAccept(file)) {
          item.errorText = `File type is not accepted: ${props.accept}`;
          item.status = "error";
          innerFileList.value.push(item);
          triggerUpdate(item);
          emit("typeError", { file: item, fileList: innerFileList.value });
          return;
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

      if (props.autoTrigger) scheduleUpload(reactiveItem, file);
    };

    const handleRemove = ({ index, file }: { index: number; file: UploadFile }) => {
      if (props.readonly) return;
      const currentIndex = innerFileList.value.findIndex(
        (item) => item === file || (!!file.uid && item.uid === file.uid),
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
      if (item.uid) {
        const handle = requestHandles.get(item.uid);
        if (handle) {
          handle.abort();
          finishUpload(item);
        }
        queuedUids.delete(item.uid);
      }

      innerFileList.value.splice(removeIndex, 1);
      if (item.uid) delete uploadTemp[item.uid];

      if (item.preview && generatedPreviewUrls.has(item.preview)) {
        URL.revokeObjectURL(item.preview);
        generatedPreviewUrls.delete(item.preview);
      }

      emit("update:fileList", innerFileList.value);
      emit("remove", { file: item, fileList: innerFileList.value });
    };

    const upload = () => {
      if (!props.autoTrigger && !props.disabled && !props.readonly) {
        Object.keys(uploadTemp).forEach((uid) => {
          const item = innerFileList.value.find((x) => x.uid === uid);
          const file = uploadTemp[uid];
          if (item && file && item.status === "waiting") scheduleUpload(item, file);
        });
      }
    };

    const uploadQueue: Array<{ item: UploadFile; file: File }> = [];
    const runNext = () => {
      const maximum = Math.max(1, Math.floor(props.maxConcurrent || 1));
      while (activeUploads < maximum && uploadQueue.length) {
        const task = uploadQueue.shift()!;
        if (!task.item.uid || !queuedUids.delete(task.item.uid)) continue;
        activeUploads += 1;
        void uploadFile(task.item, task.file);
      }
    };
    const finishUpload = (item: UploadFile) => {
      if (item.uid) requestHandles.delete(item.uid);
      activeUploads = Math.max(0, activeUploads - 1);
      runNext();
    };
    const scheduleUpload = (item: UploadFile, file: File) => {
      if (!item.uid || queuedUids.has(item.uid) || requestHandles.has(item.uid)) return;
      queuedUids.add(item.uid);
      uploadQueue.push({ item, file });
      runNext();
    };
    const uploadFile = async (item: UploadFile, original: File) => {
      try {
        const beforeResult = await props.onBeforeUpload?.(item, original);
        if (beforeResult === false) {
          finishUpload(item);
          return;
        }
        const beforeFile = beforeResult instanceof Blob ? beforeResult : original;
        const file = props.transformFile ? await props.transformFile(original) : beforeFile;
        if (unmounted || !innerFileList.value.includes(item)) {
          finishUpload(item);
          return;
        }
        toUpload(item, file);
      } catch (error) {
        if (!unmounted && innerFileList.value.includes(item)) {
          item.errorText = error instanceof Error ? error.message : String(error || "");
          item.status = "error";
          triggerUpdate(item);
        }
        finishUpload(item);
      }
    };

    const toUpload = (item: UploadFile, file: File | Blob) => {
      const { action, method, name, headers = {}, data, customRequest } = props;
      let settled = false;
      const finish = (status: "success" | "error", value?: unknown) => {
        if (settled || unmounted || !innerFileList.value.includes(item)) return;
        settled = true;
        item.status = status;
        item.percent = status === "success" ? 100 : item.percent;
        if (status === "success") {
          item.response = value;
          if (item.uid) delete uploadTemp[item.uid];
        } else {
          item.errorText =
            value instanceof Error ? value.message : String(value || locale.value?.k.upload.failed);
        }
        item.xhr = undefined;
        triggerUpdate(item);
        finishUpload(item);
      };
      if (customRequest) {
        item.status = "uploading";
        triggerUpdate(item);
        Promise.resolve(
          customRequest({
            action,
            method,
            name,
            file,
            filename: item.filename || (file instanceof File ? file.name : name),
            data,
            headers,
            withCredentials: props.withCredentials,
            timeout: props.timeout,
            onProgress: (percent) => {
              if (!settled) {
                item.percent = Math.max(0, Math.min(100, percent));
                triggerUpdate(item);
              }
            },
            onSuccess: (response) => finish("success", response),
            onError: (error) => finish("error", error),
          }),
        )
          .then((handle) => {
            if (handle && typeof handle.abort === "function" && item.uid) {
              requestHandles.set(item.uid, handle);
            }
          })
          .catch((error) => finish("error", error));
        return;
      }
      if (!action) {
        finish("error", "Upload action is required");
        return;
      }
      const formdata = new FormData();
      formdata.append(name, file);

      if (data) {
        Object.keys(data).forEach((key) => {
          const value = data[key];
          formdata.append(key, value instanceof Blob ? value : String(value));
        });
      }

      const xhr = new XMLHttpRequest();
      item.xhr = xhr;
      if (item.uid) requestHandles.set(item.uid, { abort: () => xhr.abort() });

      xhr.open(method.toUpperCase(), action);
      xhr.withCredentials = props.withCredentials;
      xhr.timeout = Math.max(0, props.timeout);
      if (headers) {
        for (const k in headers) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && !settled) {
          if (xhr.status >= 200 && xhr.status < 300) {
            let response: unknown;
            if (props.parseResponse) response = props.parseResponse(xhr);
            else {
              try {
                response = JSON.parse(xhr.responseText);
              } catch {
                response = xhr.responseText;
              }
            }
            finish("success", response);
          } else {
            handleError(String(xhr.status));
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
          triggerUpdate(item);
        }
      };

      const handleError = (detail?: string) => {
        const message = detail
          ? `${locale.value?.k.upload.failed}: ${detail}`
          : locale.value?.k.upload.failed;
        finish("error", message);
      };

      xhr.onerror = () => handleError();
      xhr.ontimeout = () => handleError("timeout");
      xhr.send(formdata);
    };

    const abort = (file?: UploadFile) => {
      const targets = file ? [file] : innerFileList.value;
      targets.forEach((item) => {
        if (!item.uid) return;
        if (queuedUids.delete(item.uid)) return;
        const handle = requestHandles.get(item.uid);
        if (!handle) return;
        requestHandles.delete(item.uid);
        handle.abort();
        item.status = "waiting";
        item.percent = 0;
        triggerUpdate(item);
        finishUpload(item);
      });
    };
    const retry = (item: UploadFile) => {
      if (props.disabled || props.readonly || !item.uid) return;
      const file = uploadTemp[item.uid];
      if (!file) return;
      item.status = "waiting";
      item.errorText = undefined;
      item.percent = 0;
      triggerUpdate(item);
      scheduleUpload(item, file);
    };

    const handleSort = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex === newIndex || props.readonly || props.disabled) return;
      const [item] = innerFileList.value.splice(oldIndex, 1);
      if (!item) return;
      innerFileList.value.splice(newIndex, 0, item);
      emit("update:fileList", innerFileList.value);
      emit("sort", { file: item, fileList: innerFileList.value, oldIndex, newIndex });
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
      requestHandles.forEach((handle) => handle.abort());
      requestHandles.clear();
      queuedUids.clear();
      generatedPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      generatedPreviewUrls.clear();
    });

    expose({ upload, abort, retry });

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
        sortable,
        preview,
        disabled,
        readonly,
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
      const SelectorNode = readonly ? null : (
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
        readonly,
        locale: locale.value,
        onRemove: handleRemove,
        sortable: sortable && isPicture,
        preview,
        onSort: handleSort,
        onAbort: abort,
        onRetry: retry,
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
              "k-upload-readonly": readonly,
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

export type {
  UploadChangeEvent,
  UploadCustomRequest,
  UploadFile,
  UploadRequestHandle,
  UploadRequestOptions,
  UploadSortEvent,
} from "./types";
