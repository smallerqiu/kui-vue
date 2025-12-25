import { defineComponent, ref, watch, inject, onMounted, onBeforeUnmount, computed } from "vue";
import Icon from "../icon";
import ImagePreview from "./preview";
import { Loading, IconImage, EyeOutline } from "kui-icons";

export default defineComponent({
  name: "KImage",
  props: {
    src: String,
    origin: String,
    width: [String, Number],
    height: [String, Number],
    data: Array,
  },
  setup(props, { slots }) {
    const isError = ref(false);
    const isLoading = ref(true);
    const isPreviewVisible = ref(false);
    
    const imageGroup = inject("ImageGroup", null);
    
    // 如果在 Group 内，优先使用 Group 的数据
    const previewData = computed(() => {
      if (imageGroup) return imageGroup.data.value;
      return props.data || [props.origin || props.src];
    });

    const currentSrc = ref(props.origin || props.src);

    const handlePreview = () => {
      if (isError.value) return;
      if (imageGroup) {
        imageGroup.show(props.origin || props.src);
      } else {
        isPreviewVisible.value = true;
      }
    };

    const onImageLoad = () => {
      isLoading.value = false;
      isError.value = false;
    };

    const onImageError = () => {
      isLoading.value = false;
      isError.value = true;
    };

    onMounted(() => {
      imageGroup?.register(props.origin || props.src);
    });

    onBeforeUnmount(() => {
      imageGroup?.unregister(props.origin || props.src);
    });

    return () => (
      <div 
        class="k-image" 
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
        onClick={handlePreview}
      >
        {isError.value ? (
          <div class="k-image-error"><Icon type={IconImage} /></div>
        ) : (
          <img 
            src={props.src} 
            onLoad={onImageLoad} 
            onError={onImageError} 
            class="k-image-inner"
          />
        )}

        {isLoading.value && (
          <div class="k-image-loading"><Icon type={Loading} spin /></div>
        )}

        {!isLoading.value && !isError.value && (
          <div class="k-image-mask">
            <Icon type={EyeOutline} />
            <span>预览</span>
          </div>
        )}

        {/* 预览器：只有非 Group 模式下才由 KImage 自己持有 */}
        {!imageGroup && (
          <ImagePreview 
            v-model:visible={isPreviewVisible.value}
            src={currentSrc.value}
            data={previewData.value}
            onSwitch={(idx) => currentSrc.value = previewData.value[idx]}
          />
        )}
      </div>
    );
  }
});