import {
  type DefineComponent,
  defineComponent,
  type ExtractPropTypes,
  onUnmounted,
  type PropType,
  provide,
  ref,
} from "vue";
import createInstance from "./instance";
import type { ImagePreviewProps } from "./preview";

const imageGroupProps = {
  data: Array as PropType<string[]>,
};

export type ImageGroupProps = ExtractPropTypes<typeof imageGroupProps>;

const ImageGroup = defineComponent({
  name: "ImageGroup",
  props: imageGroupProps,
  setup(props, { slots }) {
    const data = ref(props.data || []);
    const preview = ref();
    const show = (props: ImagePreviewProps, slots: any) => {
      if (!preview.value) {
        props.data = data.value;
        preview.value = createInstance({ ...props }, slots);
      }
      preview.value.show(props);
    };
    const togglePanel = () => {
      if (preview.value) {
        preview.value.togglePanel();
      }
    };

    const register = (item: string) => {
      data.value.push(item);
    };

    const unregister = (item: string) => {
      const index = data.value.indexOf(item);
      if (index >= 0) {
        data.value.splice(index, 1);
      }
    };
    const destroy = () => {
      if (preview.value) {
        preview.value.destroy();
        preview.value = null;
      }
    };

    provide("ImageGroup", {
      show,
      destroy,
      register,
      unregister,
      data,
      togglePanel,
    });

    onUnmounted(() => {
      destroy();
    });

    return () => {
      return <div class="k-image-group">{slots.default?.()}</div>;
    };
  },
}) as DefineComponent<ImageGroupProps>;
export default ImageGroup;
