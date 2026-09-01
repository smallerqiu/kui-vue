import { Images } from "kui-icons";
import { type CSSProperties, defineComponent, type ExtractPropTypes } from "vue";
import Icon from "../icon";
import { skeletonImageProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

export type SkeletonImageProps = ExtractPropTypes<typeof skeletonImageProps>;

const SkeletonImage = defineComponent({
  name: "SkeletonImage",
  props: skeletonImageProps,
  setup(ps, { slots }) {
    const show = useSkeletonLoading(
      () => ps.loading,
      () => ps.delay,
    );
    return () => {
      const { animated, radius, size } = ps;
      const props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      const innerProps = {
        class: ["k-skeleton-image"],
        style: {} as CSSProperties,
        // style: {
        //   'border-radius': radius ? radius + 'px' : ''
        // }
      };
      const child = slots.default?.();

      if (radius !== undefined) {
        innerProps.style["border-radius"] = `${radius}px`;
      }

      if (Array.isArray(size)) {
        const width = Number.isFinite(size[0]) ? Math.max(0, size[0]) : 96;
        const height = Number.isFinite(size[1]) ? Math.max(0, size[1]) : width;
        innerProps.style.width = `${width}px`;
        innerProps.style.height = `${height}px`;
        innerProps.style.minWidth = `${width}px`;
        innerProps.style.minHeight = `${height}px`;
      } else if (typeof size === "number") {
        const value = Number.isFinite(size) ? Math.max(0, size) : 96;
        innerProps.style.width = `${value}px`;
        innerProps.style.height = `${value}px`;
        innerProps.style.minWidth = `${value}px`;
        innerProps.style.minHeight = `${value}px`;
      }
      return (
        <div {...props} aria-busy={ps.loading || undefined}>
          {child?.length && !show.value ? (
            child
          ) : (
            <span {...innerProps} aria-hidden="true">
              <Icon type={Images} class="k-skeleton-image-icon" />
            </span>
          )}
        </div>
      );
    };
  },
});
export default SkeletonImage;
