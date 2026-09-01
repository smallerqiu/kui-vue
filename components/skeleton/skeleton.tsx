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
      () => ps.delay,
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
        <div class="k-skeleton-header" aria-hidden="true">
          <span {...props}></span>
        </div>
      );
    };
    const renderContent = () => {
      const { title, titleWidth, rows } = ps;
      const rowCount = Number.isFinite(rows) ? Math.max(0, Math.floor(rows)) : 3;
      const rawTitleWidth = title ?? titleWidth;
      const normalizedTitleWidth = Number.isFinite(rawTitleWidth)
        ? Math.min(100, Math.max(0, rawTitleWidth))
        : 35;
      const lines = new Array(rowCount).fill("");
      return (
        <div class="k-skeleton-content" aria-hidden="true">
          {normalizedTitleWidth > 0 ? (
            <div class="k-skeleton-title" style={{ width: `${normalizedTitleWidth}%` }}></div>
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
      return (
        <div {...props} aria-busy={ps.loading || undefined}>
          {child?.length && !show.value ? child : [nodeAvatar, nodeContent]}
        </div>
      );
    };
  },
});
export default Skeleton;
