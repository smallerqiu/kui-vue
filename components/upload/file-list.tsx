import { AlertCircle, Close, DocumentTextOutline } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { TypeBoolean } from "../const/var";
import Icon from "../icon";
import Progress from "../progress";
import Tooltip from "../tooltip";
import type { UploadFile } from "./index";

export const uploadFileListProps = {
  showUploadList: { type: Boolean as TypeBoolean, default: true },
  locale: Object as PropType<any>,
  type: {
    type: String as PropType<"list" | "picture">,
    default: "list",
    validator: (val: string) => ["list", "picture"].indexOf(val) >= 0,
  },
  fileList: { type: Array as PropType<UploadFile[]>, default: () => [] },
  disabled: Boolean as TypeBoolean,
};

export type UploadFileListProps = ExtractPropTypes<typeof uploadFileListProps>;

export default defineComponent({
  name: "UploadFileList",
  props: uploadFileListProps,
  emits: ["remove"],
  setup(props, { emit, slots }) {
    const getPreview = (item: any) => {
      if (item.preview) return <img src={item.preview} alt="" />;
      if (item.url) return <img src={item.url} alt="" />;
      return null;
    };

    const handleRemove = (index: number, item: UploadFile) => {
      if (props.disabled) return;
      emit("remove", { index, file: item });
    };

    return () => {
      const { showUploadList, type, fileList, locale } = props;
      const isPicture = type === "picture";

      if (!showUploadList && !isPicture) return null;

      return (showUploadList && !isPicture) || isPicture ? (
        <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
          {fileList.map((item, i) => {
            const statusText =
              item.status === "success"
                ? locale?.k.upload.successful
                : item.errorText || locale?.k.upload.failed;
            return (
              <div
                class={[`k-upload-file-${type}-item`, `k-upload-file-status-${item.status}`]}
                key={item.uid || i}
              >
                <div class={`k-upload-${isPicture ? "picture" : "file"}-preview`}>
                  {getPreview(item) || <Icon type={DocumentTextOutline} />}
                </div>
                <div class="k-upload-file-item-info">
                  {!isPicture ? (
                    <div class="k-upload-file-main">
                      <span class="k-upload-file-name">{item.filename}</span>
                      <span class="k-upload-file-size">{item.size}</span>
                    </div>
                  ) : null}
                  {item.status !== "wait" && (
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
                          <Icon type={AlertCircle} />
                          {statusText}
                        </div>
                      ) : null}

                      {isPicture && item.status === "error" && (
                        <Tooltip title={statusText} placement="bottom">
                          <Icon type={AlertCircle} />
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  type="text"
                  size="small"
                  icon={Close}
                  class={`k-upload-file-${isPicture ? "picture" : "item"}-remove`}
                  onClick={() => handleRemove(i, item)}
                />
              </div>
            );
          })}
          {isPicture && slots.selector?.()}
        </div>
      ) : null;
    };
  },
});
