import { Inbox } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  type CSSProperties,
  type DefineComponent,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type Ref,
} from "vue";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
const emptyProps = {
  description: { type: [String, Boolean], default: null },
  image: String,
  imageStyle: Object as PropType<CSSProperties>,
};

export type EmptyProps = Partial<ExtractPropTypes<typeof emptyProps>> & HTMLAttributes;

const Empty = defineComponent({
  name: "Empty",
  props: emptyProps,
  setup(props, { slots, attrs }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    return () => {
      const { image, imageStyle, description } = props;

      const rootProps = {
        ...attrs,
        class: "k-empty",
      };

      const imageNode = (() => {
        if (!image && !slots.image) {
          // 假设 Coffee 是 IconType[] 类型
          return <Icon type={Inbox} class="k-empty-icon" strokeWidth="0.01em" />;
        } else if (slots.image) {
          return slots.image();
        } else {
          const imgProps = {
            src: image,
            class: "k-empty-image",
            style: imageStyle, // 通过属性展开应用样式
            alt:
              typeof description === "string"
                ? description
                : locale.value?.k.empty.description || "Empty state image",
          };
          return <img {...imgProps} />;
        }
      })();

      const descriptionNode =
        description !== false ? (
          <p class="k-empty-description">
            {description || slots.description?.() || locale.value?.k.empty.description}
          </p>
        ) : null;

      const footerNode = slots.default ? <div class="k-empty-footer">{slots.default()}</div> : null;

      return (
        <div {...rootProps}>
          <div class="k-empty-content">
            {imageNode}
            {descriptionNode}
            {footerNode}
          </div>
        </div>
      );
    };
  },
});

export default Empty as DefineComponent<EmptyProps>;
