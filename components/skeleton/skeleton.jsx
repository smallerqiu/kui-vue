import { defineComponent, ref, watch } from "vue";
import { withInstall } from "../utils/vue";
const Skeleton = defineComponent({
  name: "Skeleton",
  props: {
    animated: Boolean,
    avatar: [Boolean, Object],
    loading: Boolean,
    title: { type: Number, default: 35 },
    delay: { type: Number, default: 500 },
    rows: { type: Number, default: 3 },
  },
  setup(ps, { slots }) {
    const show = ref(ps.loading);
    const timer = ref();
    watch(
      () => ps.loading,
      (v) => {
        if (v) {
          show.value = v;
        } else {
          clearTimeout(timer.value);
          timer.value = setTimeout(() => {
            show.value = v;
          }, ps.delay);
        }
      }
    );

    const renderAvatar = () => {
      const { avatar } = ps;
      if (!avatar) return null;
      let size = "large",
        shape = "circle";
      if (typeof avatar == "object") {
        if (avatar.size) size = avatar.size;
        if (avatar.shape) shape = avatar.shape;
      }
      let props = {
        class: [
          "k-skeleton-avatar",
          {
            "k-skeleton-avatar-lg": size == "large",
            "k-skeleton-avatar-sm": size == "small",
            "k-skeleton-avatar-circle": shape == "circle",
            "k-skeleton-avatar-square": shape == "square",
          },
        ],
      };
      return (
        <div class="k-skeleton-header">
          <span {...props}></span>
        </div>
      );
    };
    const renderContent = () => {
      const { title, rows } = ps;
      let lines = new Array(rows).fill("");
      return (
        <div class="k-skeleton-content">
          {title > 0 ? <div class="k-skeleton-title" style={`width:${title}%`}></div> : null}
          <ul class="k-skeleton-paragraph">
            {lines.map(() => (
              <li />
            ))}
          </ul>
        </div>
      );
    };

    return () => {
      let { animated } = ps;

      let props = {
        class: [
          "k-skeleton",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      let nodeAvatar = renderAvatar();
      let nodeContent = renderContent();
      let child = slots.default?.();
      return <div {...props}>{child && !show.value ? child : [nodeAvatar, nodeContent]}</div>;
    };
  },
});
export default withInstall(Skeleton);
