import { CircleCheck, CircleX, FileText, Info, RotateCcw, X } from "kui-icons";
import { defineComponent, ref, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import { Image } from "../image";
import Progress from "../progress";
import Tooltip from "../tooltip";
import type { UploadFile } from "./types";
import zhCN from "../locale/zh-CN";

const uploadFileListProps = {
  showUploadList: { type: Boolean as BooleanType, default: true },
  locale: Object as PropType<typeof zhCN>,
  type: {
    type: String as PropType<"list" | "picture">,
    default: "list",
    validator: (val: string) => ["list", "picture"].indexOf(val) >= 0,
  },
  fileList: { type: Array as PropType<UploadFile[]>, default: () => [] },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  sortable: Boolean as BooleanType,
  preview: { type: Boolean as BooleanType, default: true },
};

export type UploadFileListProps = ExtractPropTypes<typeof uploadFileListProps>;

export default defineComponent({
  name: "UploadFileList",
  props: uploadFileListProps,
  setup(props, { emit, slots }) {
    const draggingIndex = ref<number | null>(null);
    const getPreview = (item: UploadFile) => {
      const src = item.preview || item.url;
      if (src && props.preview)
        return <Image src={src} width="100%" height="100%" shape="square" />;
      if (src) return <img src={src} alt="" />;
      return null;
    };

    const handleRemove = (index: number, item: UploadFile) => {
      if (props.disabled || props.readonly) return;
      emit("remove", { index, file: item });
    };

    return () => {
      const { showUploadList, type, fileList, locale } = props;
      const isPicture = type === "picture";
      const visibleFiles = showUploadList ? fileList : [];

      if (!showUploadList && !isPicture) return null;

      return (showUploadList && !isPicture) || isPicture ? (
        <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
          {visibleFiles.map((item, i) => {
            const statusText =
              item.status === "success"
                ? locale?.k.upload.successful
                : item.errorText || locale?.k.upload.failed;
            return (
              <div
                class={[`k-upload-file-${type}-item`, `k-upload-file-status-${item.status}`]}
                key={item.uid || i}
                draggable={isPicture && props.sortable && !props.disabled && !props.readonly}
                onDragstart={() => (draggingIndex.value = i)}
                onDragover={(event: DragEvent) => {
                  if (draggingIndex.value !== null) event.preventDefault();
                }}
                onDrop={(event: DragEvent) => {
                  event.preventDefault();
                  if (draggingIndex.value !== null) {
                    emit("sort", { oldIndex: draggingIndex.value, newIndex: i });
                  }
                  draggingIndex.value = null;
                }}
                onDragend={() => (draggingIndex.value = null)}
              >
                <div class={`k-upload-${isPicture ? "picture" : "file"}-preview`}>
                  {getPreview(item) || <Icon type={FileText} strokeWidth={1} size={30} />}
                </div>
                <div class="k-upload-file-item-info">
                  {!isPicture ? (
                    <div class="k-upload-file-main">
                      <span class="k-upload-file-name">{item.filename}</span>
                      <span class="k-upload-file-size">{item.size}</span>
                    </div>
                  ) : null}
                  {item.status !== "waiting" && (
                    <div class="k-upload-file-status">
                      {item.status === "uploading" ? (
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
                          <Icon type={item.status == "success" ? CircleCheck : CircleX} />
                          {statusText}
                        </div>
                      ) : null}

                      {isPicture && item.status === "error" && (
                        <Tooltip title={statusText} placement="bottom">
                          <Icon type={Info} />
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
                {!props.readonly &&
                  (item.status === "uploading" ? (
                    <Button
                      type="text"
                      size="small"
                      icon={X}
                      title="Cancel upload"
                      onClick={() => emit("abort", item)}
                    />
                  ) : item.status === "error" ? (
                    <Button
                      type="text"
                      size="small"
                      icon={RotateCcw}
                      title="Retry upload"
                      onClick={() => emit("retry", item)}
                    />
                  ) : null)}
                {!props.readonly && (
                  <Button
                    type="text"
                    size="small"
                    icon={X}
                    class={`k-upload-file-${isPicture ? "picture" : "item"}-remove`}
                    disabled={props.disabled}
                    onClick={() => handleRemove(i, item)}
                  />
                )}
              </div>
            );
          })}
          {isPicture && slots.selector?.()}
        </div>
      ) : null;
    };
  },
});
