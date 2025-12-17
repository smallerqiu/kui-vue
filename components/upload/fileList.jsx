import { ref, defineComponent, inject, computed } from "vue";
import { DocumentTextOutline, Close, AlertCircle } from "kui-icons";
import zhCN from "../locale/zh-CN";
import Icon from "../icon";
import Tooltip from "../tooltip";
import Progress from "../progress";

import { v4 as uuid } from "uuid";

export default defineComponent({
  name: "UploadFileList",
  props: {
    showUploadList: { type: Boolean, default: true },
    type: {
      type: String,
      default: "list",
      validator: (val) => ["list", "picture"].indexOf(val) >= 0,
    },
    fileList: Array,
    disabled: Boolean,
  },
  setup(ps, { emit, slots }) {
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const defaultFileList = ref(ps.fileList || []);

    const getPreview = (item) => {
      if (item.preview == true && item.url) {
        return <img src={item.url} />;
      }
      if (item.preview) {
        return <img src={item.preview} />;
      } else if (item.url) {
        return <img src={item.url} />;
      } else {
        return null;
      }
    };

    const remove = (i) => {
      if (ps.disabled) return false;
      let item = defaultFileList.value[i];
      defaultFileList.value.splice(i, 1);

      // delete uploadTemp[item.uid];
      if (item.xhr) item.xhr.abort();

      emit("remove", {
        file: item,
        fileList: defaultFileList.value,
      });
    };

    return () => {
      let { showUploadList, type } = ps;
      let isPicture = type == "picture";

      return (showUploadList && !isPicture) || isPicture ? (
        <div class={`k-upload-${isPicture ? "picture" : "file"}-list`}>
          {defaultFileList.value.map((item, i) => {
            let statusText =
              item.status == "success"
                ? locale?.value.k.upload.successful
                : item.errorText || locale?.value.k.upload.failed;
            delete item.errorText;
            item.uid = item.uid || uuid();
            return (
              <div
                class={[
                  `k-upload-file-${type}-item`,
                  `k-upload-file-status-${item.status}`,
                ]}
                key={item.uid}
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
                  onClick={() => remove(i)}
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
