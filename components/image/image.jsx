import { defineComponent, ref, onMounted, onBeforeUnmount, watch, inject } from "vue";
import Icon from "../icon";
import newInstance from "./instance";
import { Loading, IconImage, EyeOutline } from "kui-icons/dist/icons";
import { withInstall } from "../utils/vue";
import { loadImage } from "./utils";

const KImage = defineComponent({
  name: "KImage",
  props: {
    alt: String,
    src: String,
    type: String,
    origin: String,
    height: [String, Number],
    width: [String, Number],
    placeholder: String,
    data: Array,
    imgStyle: Object,
    showPanel: Boolean,
  },
  setup(props, { emit, slots, expose, listeners }) {
    const loading = ref(false);
    const showPlaceholder = ref(false);
    const imageUrl = ref(null);
    const imgWidth = ref(0);
    const imgHeight = ref(0);

    const preview = ref();
    const ImageGroup = inject("ImageGroup", null);

    // global api
    const togglePanel = () => {
      const instance = ImageGroup || preview.value;
      if (instance) {
        instance.togglePanel();
      }
    };
    // global api
    const show = (props) => {
      if (ImageGroup) {
        ImageGroup.show(props);
        return;
      }
      if (!preview.value) {
        preview.value = newInstance({ ...props });
      }
      preview.value.show(props);
    };

    // global api
    const destroy = () => {
      if (preview.value) {
        document.body.removeChild(preview.value.$el);
        preview.value = null;
      }
      if (ImageGroup) {
        ImageGroup.destroy();
      }
    };

    expose({ show, destroy, togglePanel });

    const showPreview = (e) => {
      const { origin, src } = props;
      if ((!src && !origin) || showPlaceholder.value || loading.value) return;
      const options = {
        on: {
          close: () => {
            emit("close");
            setTimeout(() => {
              destroy();
            }, 200);
          },
          switch: (index) => {
            emit("switch", index);
          },
        },
        props: {
          src: origin || src,
          showPanel: props.showPanel,
          type: props.type,
        },
        scopedSlots: { ...slots },
      };

      show(options);
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
            imageUrl.value = placeholder || null;
          }
        );
      } else {
        showPlaceholder.value = true;
        imageUrl.value = placeholder || null;
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
      const { alt, width, height, imgStyle, placeholder } = props;

      const containerProps = {
        style: {
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        },
        class: "k-image",
        on: { click: showPreview },
      };

      const imgProps = {
        style: imgStyle,
        class: "k-image-img",
        attrs: {
          alt: alt,
          src: imageUrl.value,
        },
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

export default withInstall(KImage);
