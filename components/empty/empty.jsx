import Icon from "../icon";
import { FileTrayOutline } from "kui-icons";
import zhCN from "../locale/lang/zh-CN";
import { defineComponent, inject } from "vue";
import { withInstall } from '../utils/vue';
const Empty = defineComponent({
  name: "Empty",
  props: {
    description: String,
    image: String,
    imageStyle: Object,
  },
  setup(ps, { slots }) {
    let { image, imageStyle, description } = ps;
    const locale = inject("locale", null) || zhCN;

    return () => {
      return (
        <div class="k-empty">
          {!image && !slots.image ? <Icon type={FileTrayOutline} class="k-empty-icon" /> : slots.image ? slots.image() : <img src={image} class="k-empty-image" style={imageStyle} />}
          {description !== null ? <p class="k-empty-description">{description || slots.description?.() || locale?.k.empty.description}</p> : null}
          {slots.default ? <div class="k-empty-footer">{slots.default()}</div> : null}
        </div>
      );
    };
  },
});
export default withInstall(Empty);