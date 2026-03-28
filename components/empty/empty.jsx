import { FileTrayOutline } from "kui-icons";
import { computed, defineComponent, inject } from "vue";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";

const Empty = defineComponent({
  name: "Empty",
  props: {
    description: String,
    image: String,
    imageStyle: Object,
  },
  setup(ps, { slots }) {
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    return () => {
      let { image, imageStyle, description } = ps;
      return (
        <div class="k-empty">
          <div class="k-empty-content">
            {!image && !slots.image ? (
              <Icon type={FileTrayOutline} class="k-empty-icon" />
            ) : slots.image ? (
              slots.image()
            ) : (
              <img src={image} class="k-empty-image" style={imageStyle} />
            )}
            {description !== null ? (
              <p class="k-empty-description">
                {description || slots.description?.() || locale?.value.k.empty.description}
              </p>
            ) : null}
            {slots.default ? <div class="k-empty-footer">{slots.default()}</div> : null}
          </div>
        </div>
      );
    };
  },
});
export default Empty;
