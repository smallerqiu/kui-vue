import { FileTrayOutline } from "kui-icons";
import { computed, defineComponent, inject, type CSSProperties, type ExtractPropTypes, type PropType } from "vue";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";

export const emptyProps = {
  description: String,
  image: String,
  imageStyle: Object as PropType<CSSProperties>, // 明确 imageStyle 的类型
};

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;

const Empty = defineComponent({
  name: "Empty",
  props: emptyProps,
  emits: ["click"],
  setup(props, { slots }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    return () => {
      const { image, imageStyle, description } = props;

      const rootProps = {
        class: "k-empty",
      };

      const imageNode = (() => {
        if (!image && !slots.image) {
          // 假设 FileTrayOutline 是 IconType[] 类型
          return <Icon type={FileTrayOutline as IconType[]} class="k-empty-icon" />;
        } else if (slots.image) {
          return slots.image();
        } else {
          const imgProps = {
            src: image,
            class: "k-empty-image",
            style: imageStyle, // 通过属性展开应用样式
            alt: description || locale.value?.k.empty.description || 'Empty state image', // 添加 alt 属性以提高可访问性
          };
          return <img {...imgProps} />;
        }
      })();

      const descriptionNode = description !== null ? (
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

export default Empty;