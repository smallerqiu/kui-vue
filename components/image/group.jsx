
import { defineComponent, onUnmounted, provide, ref } from "vue";
import newInstance from "./instance";

const ImageGroup = defineComponent({
  name: "ImageGroup",
  props: {
    data: Array,
  },
  setup(props, { slots }) {
    const data = ref(props.data || []);
    const preview = ref();
    const show = (props, slots) => {
      if (!preview.value) {
        props.data = data.value;
        preview.value = newInstance({ ...props }, null, slots);
      }
      preview.value.show(props);
    };
    const togglePanel = () => {
      if (preview.value) {
        preview.value.togglePanel();
      }
    };

    const register = (item) => {
      data.value.push(item);
    };

    const unregister = (item) => {
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
});
export default ImageGroup;
