import { defineComponent, type ExtractPropTypes } from "vue";

import { skeletonProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;

const Skeleton = defineComponent({
  name: "Skeleton",
  props: skeletonProps,
  setup(ps, { slots }) {
    const show = useSkeletonLoading(
      () => ps.loading,
      () => ps.delay
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
      const props = {
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
      const rowCount = Math.max(0, Math.floor(rows));
      const titleWidth = Math.min(100, Math.max(0, title));
      const lines = new Array(rowCount).fill("");
      return (
        <div class="k-skeleton-content">
          {titleWidth > 0 ? (
            <div class="k-skeleton-title" style={{ width: `${titleWidth}%` }}></div>
          ) : null}
          <ul class="k-skeleton-paragraph">
            {lines.map((_, index) => (
              <li key={index} />
            ))}
          </ul>
        </div>
      );
    };

    return () => {
      const { animated } = ps;

      const props = {
        class: [
          "k-skeleton",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      const nodeAvatar = renderAvatar();
      const nodeContent = renderContent();
      const child = slots.default?.();
      return <div {...props}>{child && !show.value ? child : [nodeAvatar, nodeContent]}</div>;
    };
  },
});
export default Skeleton;
