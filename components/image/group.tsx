import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  onUnmounted,
  type PropType,
  type Slots,
  provide,
  ref,
} from "vue";
import { imageGroupKey } from "./context";
import createInstance from "./instance";
import type { ImagePreviewInstance } from "./instance";
import type { ImagePreviewProps } from "./preview";

const imageGroupProps = {
  data: Array as PropType<string[]>,
};

export type ImageGroupProps = ExtractPropTypes<typeof imageGroupProps>;

const ImageGroup = defineComponent({
  name: "ImageGroup",
  props: imageGroupProps,
  setup(props, { slots }) {
    const registered = ref<string[]>([]);
    const data = computed(() => (props.data ? [...props.data] : [...registered.value]));
    const preview = ref<ImagePreviewInstance | null>(null);
    const show = (props: ImagePreviewProps, slots: Slots) => {
      const options = { ...props, data: data.value };
      if (!preview.value) {
        preview.value = createInstance(options, slots);
      }
      preview.value?.show(options);
    };
    const togglePanel = () => {
      if (preview.value) {
        preview.value.togglePanel();
      }
    };

    const register = (item?: string) => {
      if (item && !registered.value.includes(item)) registered.value.push(item);
    };

    const unregister = (item?: string) => {
      if (!item) return;
      const index = registered.value.indexOf(item);
      if (index >= 0) {
        registered.value.splice(index, 1);
      }
    };
    const destroy = () => {
      if (preview.value) {
        preview.value.destroy();
        preview.value = null;
      }
    };

    provide(imageGroupKey, {
      show,
      register,
      unregister,
      togglePanel,
    });

    onUnmounted(() => {
      destroy();
    });

    return () => {
      return <div class="k-image-group">{slots.default?.()}</div>;
    };
  },
});
export default ImageGroup;
