import { defineComponent } from "vue";
import { DocumentTextOutline, Close, AlertCircle } from "kui-icons";
import Icon from "../icon";
import Tooltip from "../tooltip";
import Progress from "../progress";

export default defineComponent({
  name: "UploadFileList",
  props: {
    showUploadList: { type: Boolean, default: true },
    locale: Object,
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
    fileList: Array,
    disabled: Boolean,
  },
  setup(props, { emit, slots }) {
    const getPreview = (item) => {
      if (item.preview && typeof item.preview === "string") {
        return <img src={item.preview} />;
      }
      if (item.url) {
        return <img src={item.url} />;
      }
      return null;
    };

    const handleRemove = (index, item) => {
      if (props.disabled) return;
      emit("remove", { index, file: item });
    };

    return () => {
      const { showUploadList, type, fileList=[], locale } = props;
      const isPicture = type === "picture";

      if (!showUploadList && !isPicture) return null;
      console.log(fileList)

      return (showUploadList && !isPicture) || isPicture ? (
        <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
          {fileList.map((item, i) => {
            let statusText =
              item.status == "success"
                ? locale?.k.upload.successful
                : item.errorText || locale?.k.upload.failed;
            return (
              <div
                class={[
                  `k-upload-file-${type}-item`,
                  `k-upload-file-status-${item.status}`,
                ]}
                key={item.uid || i}
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
                  {item.status !== "wait" && (
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

                      {isPicture && item.status == "error" && (
                        <Tooltip title={statusText} placement="bottom">
                          <Icon type={AlertCircle} />
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
                <Icon
                  type={Close}
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
