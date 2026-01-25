import { withInstall } from "../utils/vue";
import { defineComponent, ref, provide, onUnmounted } from "vue";
import newInstance from "./instance";

const ImageGroup = defineComponent({
  name: "ImageGroup",
  props: {
    data: Array,
  },
  setup(props, { slots }) {
    const data = ref(props.data || []);
    const preview = ref();
    const show = (options) => {
      if (!preview.value) {
        options.props.data = data.value;
        preview.value = newInstance({ ...options });
      }
      preview.value.show(options);
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
        document.body.removeChild(preview.value.$el);
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
export default withInstall(ImageGroup);
