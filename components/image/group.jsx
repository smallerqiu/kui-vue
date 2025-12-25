import { defineComponent, ref, provide, computed } from "vue";
import ImagePreview from "./preview";
import { withInstall } from "../utils/vue";

export const ImageGroup = defineComponent({
  name: "ImageGroup",
  setup(_, { slots }) {
    const dataSet = ref(new Set());
    const isVisible = ref(false);
    const currentSrc = ref("");

    const dataArray = computed(() => Array.from(dataSet.value));

    const show = (src) => {
      currentSrc.value = src;
      isVisible.value = true;
    };

    provide("ImageGroup", {
      data: dataArray,
      register: (src) => dataSet.value.add(src),
      unregister: (src) => dataSet.value.delete(src),
      show,
    });

    return () => (
      <div class="k-image-group">
        {slots.default?.()}
        <ImagePreview
          v-model:visible={isVisible.value}
          src={currentSrc.value}
          data={dataArray.value}
          onSwitch={(idx) => (currentSrc.value = dataArray.value[idx])}
        />
      </div>
    );
  },
});

export default withInstall(ImageGroup);
