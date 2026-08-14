import { Image as IconImage, Loading } from "kui-icons";
import {
  type CSSProperties,
  defineComponent,
  type ExtractPropTypes,
  inject,
  onBeforeUnmount,
  type PropType,
  type Slots,
  ref,
  watch,
} from "vue";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import createInstance from "./instance";
import { imageGroupKey } from "./context";
import type { ImagePreviewProps } from "./preview";
import { loadImage } from "./utils";

const imageProps = {
  alt: String,
  src: String,
  type: String,
  origin: String,
  height: [String, Number],
  width: [String, Number],
  placeholder: String,
  data: Array,
  imgStyle: Object as PropType<CSSProperties>,
  showPanel: Boolean as BooleanType,
  onClose: Function as PropType<() => void>,
  onSwitch: Function as PropType<(index: number) => void>,
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;

const Image = defineComponent({
  name: "Image",
  props: imageProps,
  setup(props, { emit, slots, expose }) {
    const loading = ref(false);
    const showPlaceholder = ref(false);
    const imageUrl = ref<string>();
    const preview = ref();
    const ImageGroup = inject(imageGroupKey, null);
    let cancelLoad = () => {};

    // global api
    const togglePanel = () => {
      const instance = ImageGroup || preview.value;
      if (instance) {
        instance.togglePanel();
      }
    };
    // global api
    const show = (props: ImagePreviewProps, slots: Slots) => {
      if (ImageGroup) {
        ImageGroup.show(props, slots);
        return;
      }
      if (!preview.value) {
        preview.value = createInstance({ ...props }, slots);
      }
      preview.value.show(props);
    };

    // global api
    const destroy = () => {
      if (preview.value) {
        preview.value.destroy();
        preview.value = null;
      }
    };

    expose({ show, destroy, togglePanel });

    const showPreview = (e: MouseEvent) => {
      const { origin, src } = props;
      if ((!src && !origin) || showPlaceholder.value || loading.value) return;
      const options = {
        onClose: () => {
          emit("close");
        },
        onSwitch: (index: number) => {
          emit("switch", index);
        },
        src: origin || src,
        showPanel: props.showPanel,
        type: props.type,
      };
      show(options, slots);
      e.preventDefault();
    };

    const reload = () => {
      cancelLoad();
      const { src, placeholder } = props;
      if (src) {
        loading.value = true;
        cancelLoad = loadImage(
          src,
          () => {
            showPlaceholder.value = false;
            loading.value = false;
            imageUrl.value = src;
          },
          () => {
            loading.value = false;
            showPlaceholder.value = true;
            imageUrl.value = placeholder;
          }
        );
      } else {
        showPlaceholder.value = true;
        imageUrl.value = placeholder;
      }
    };

    watch(() => [props.src, props.placeholder], reload, { immediate: true });

    watch(
      () => props.origin || props.src,
      (src, oldSrc) => {
        ImageGroup?.unregister(oldSrc);
        ImageGroup?.register(src);
      },
      { immediate: true }
    );

    onBeforeUnmount(() => {
      cancelLoad();
      destroy();
      ImageGroup?.unregister(props.origin || props.src);
    });

    return () => {
      const { alt, width, height, imgStyle } = props;

      const containerProps = {
        style: {
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        },
        class: "k-image",
        onClick: showPreview,
      };

      const imgProps = {
        style: imgStyle,
        class: "k-image-img",
        alt: alt,
        src: imageUrl.value,
      };
      const nodes = [];

      if (loading.value) {
        nodes.push(
          <div class="k-image-loading">
            <Icon type={Loading} spin class="k-image-loading-icon" />
          </div>
        );
      } else {
        if (showPlaceholder.value) {
          if (imageUrl.value) {
            nodes.push(<img {...imgProps} />);
          } else {
            nodes.push(<Icon type={IconImage} class="k-image-error" />);
          }
        } else {
          nodes.push(<img {...imgProps} />);
        }
      }

      return (
        <div {...containerProps}>
          {nodes}
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default Image;
