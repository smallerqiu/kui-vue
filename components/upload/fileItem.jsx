import { defineComponent, ref, reactive } from "vue";
import { AlertCircle, Close, DocumentTextOutline } from "kui-icons";
import Icon from "../icon";
import zhCN from "../locale/lang/zh-CN";
import Progress from "../progress";
import Tooltip from "../tooltip";
export default defineComponent({
  name: "UploadSelector",
  props: {
    item: Object,
    type: String,
  },
  setup(ps, { slots, emit }) {
    const locale = inject("locale", null) || zhCN;
    const remove = (item) => {
      emit("remove", item);
    };
    return () => {
      const item = ps.item;

      let isPicture = type == "picture";
      let statusText =
        item.status == "success"
          ? locale?.k.upload.successful
          : item.errorText || locale?.k.upload.failed;
      const url =
        item.preview === true && item.url
          ? item.url
          : item.preview
          ? item.preview
          : item.url;
      return (
        <div
          class={[
            `k-upload-file-${type}-item`,
            `k-upload-file-status-${item.status}`,
          ]}
          key={item.uid}
        >
          <div class={`k-upload-${isPicture ? "picture" : "file"}-preview`}>
            {url ? <img src={url} /> : <Icon type={DocumentTextOutline} />}
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
            onClick={() => remove(item)}
          />
        </div>
      );
    };
  },
});
