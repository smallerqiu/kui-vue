import { IconImage, Loading } from "kui-icons";
import {
  type CSSProperties,
  type DefineComponent,
  defineComponent,
  type ExtractPropTypes,
  inject,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
  watch,
} from "vue";
import Icon from "../icon";
import createInstance from "./instance";
import type { ImagePreviewProps } from "./preview";
import { loadImage } from "./utils";

interface ImageGroupContext {
  show: (props: ImagePreviewProps, slots: any) => void;
  destroy: () => void;
  register: (src?: string) => void;
  unregister: (src?: string) => void;
}

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
  showPanel: Boolean,
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;

const KImage = defineComponent({
  name: "KImage",
  props: imageProps,
  emits: ["close", "switch"],
  setup(props, { emit, slots, expose }) {
    const loading = ref(false);
    const showPlaceholder = ref(false);
    const imageUrl = ref<string>();
    const imgWidth = ref(0);
    const imgHeight = ref(0);

    const preview = ref();
    const ImageGroup = inject<ImageGroupContext>("ImageGroup");

    // global api
    const togglePanel = () => {
      const instance = ImageGroup || preview.value;
      if (instance) {
        instance.togglePanel();
      }
    };
    // global api
    const show = (props: ImagePreviewProps, slots: any) => {
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
      if (ImageGroup) {
        ImageGroup.destroy();
      }
    };

    expose({ show, destroy, togglePanel });

    const showPreview = (e: MouseEvent) => {
      const { origin, src } = props;
      if ((!src && !origin) || showPlaceholder.value || loading.value) return;
      const options = {
        onClose: () => {
          emit("close");
          setTimeout(() => {
            destroy();
          }, 200);
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
      const { src, placeholder } = props;
      if (src) {
        loading.value = true;
        loadImage(
          src,
          ({ width, height }) => {
            showPlaceholder.value = false;
            loading.value = false;
            imageUrl.value = src;
            imgWidth.value = width;
            imgHeight.value = height;
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

    watch(
      () => props.src,
      () => {
        reload();
      }
    );

    onMounted(() => {
      reload();
      ImageGroup?.register(props.origin || props.src);
    });

    onBeforeUnmount(() => {
      destroy();
      ImageGroup?.unregister(props.origin || props.src);
    });

    return () => {
      const { alt, width, height, imgStyle } = props;

      const containerProps = {
        style: {
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
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
}) as DefineComponent<ImageProps>;

export default KImage;
