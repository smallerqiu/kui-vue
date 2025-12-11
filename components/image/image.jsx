import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from "vue";
import Icon from "../icon";
import newInstance from "./instance";
import { Loading, IconImage, EyeOutline } from "kui-icons";
import { t } from "../locale";
import { withInstall } from "../utils/vue";

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
  setup(props, { emit, slots, expose }) {
    const loading = ref(false);
    const showImg = ref(false);
    const imageUrl = ref("");
    const error = ref(false);
    const imgWidth = ref(0);
    const imgHeight = ref(0);

    const preview = ref();

    // global api
    const togglePanel = () => {
      if (preview.value) {
        preview.value.togglePanel();
      }
    };
    // global api
    const show = (options) => {
      if (!preview.value) {
        preview.value = newInstance({ ...options });
      }
      preview.value.show();
    };

    // global api
    const destroy = () => {
      if (preview.value) {
        document.body.removeChild(preview.value.$el);
      }
    };

    expose({ show, destroy, togglePanel });

    const showPreview = (e) => {
      const { origin, src } = props;
      if ((!src && !origin) || error.value) return;

      const options = {
        on: {},
        props: {
          src,
          data: props.data,
          origin: props.origin,
          slots: slots,
          showPanel: props.showPanel,
          type: props.type,
        },
      };

      if (!origin) {
        show(options);
      } else {
        loading.value = true;
        loadImage(
          origin,
          () => {
            loading.value = false;
            options.src = origin;
            show(options);
          },
          () => {
            loading.value = false;
          }
        );
      }
      e.preventDefault();
    };

    const loadImage = (src, callback, err) => {
      if (!src) return;

      let image = new Image();
      let isCompleted = false;

      const cleanup = () => {
        if (isCompleted) return;
        isCompleted = true;
        image.onload = null;
        image.onerror = null;
        image = null;
      };

      image.onload = () => {
        if (!isCompleted) {
          const { width, height } = image;
          callback && callback({ width, height });
        }
        cleanup();
      };

      image.onerror = () => {
        if (!isCompleted) {
          err && err();
        }
        cleanup();
      };

      image.src = src;
    };

    const reload = () => {
      const { src, placeholder } = props;
      if (src) {
        loadImage(
          src,
          ({ width, height }) => {
            showImg.value = true;
            imageUrl.value = src;
            error.value = false;
            imgWidth.value = width;
            imgHeight.value = height;
          },
          () => {
            error.value = true;
            showImg.value = !!placeholder || false;
            imageUrl.value = placeholder || null;
          }
        );
      } else {
        error.value = true;
        showImg.value = false;
        imageUrl.value = null;
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
    });

    onBeforeUnmount(() => {
      if (preview) {
        preview.destroy();
      }
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

      return (
        <div {...containerProps}>
          {showImg.value || (!showImg.value && placeholder) ? (
            <img {...imgProps} />
          ) : null}
          {(!showImg.value || error.value) && !placeholder ? (
            <Icon type={IconImage} class="k-image-error" />
          ) : null}
          {loading.value ? (
            <div class="k-image-loading" key="image-loading">
              <Icon type={Loading} spin class="k-image-loading-icon" />
            </div>
          ) : null}
          {!loading.value && !error.value ? (
            <div class="k-image-preview-mask">
              <Icon type={EyeOutline} />
              {t("k.image.preview")}
            </div>
          ) : null}
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default withInstall(KImage);
