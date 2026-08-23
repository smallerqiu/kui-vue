import { defineComponent, type ExtractPropTypes } from "vue";

const pageHeaderProps = {
  title: String,
  description: String,
};

export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>;

const PageHeader = defineComponent({
  name: "PageHeader",
  props: pageHeaderProps,
  setup(props, { attrs, slots }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      return (
        <header {...restAttrs} class={["k-page-header", customClass]}>
          <div class="k-page-header-main">
            {slots.breadcrumb?.()}
            <div class="k-page-header-heading">
              {slots.back?.()}
              <div class="k-page-header-copy">
                {(props.title || slots.title) && (
                  <div class="k-page-header-title">{slots.title?.() || props.title}</div>
                )}
                {(props.description || slots.description) && (
                  <div class="k-page-header-description">
                    {slots.description?.() || props.description}
                  </div>
                )}
              </div>
            </div>
            {slots.default?.()}
          </div>
          {slots.actions && <div class="k-page-header-actions">{slots.actions()}</div>}
        </header>
      );
    };
  },
});

export default PageHeader;
