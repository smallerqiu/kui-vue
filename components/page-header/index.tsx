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
      const breadcrumb = slots.breadcrumb?.();
      const title = slots.title ? slots.title() : props.title;
      const description = slots.description ? slots.description() : props.description;
      const content = slots.default?.();
      const actions = slots.actions?.();
      const hasTitle = Boolean(slots.title || props.title !== undefined);
      const hasDescription = Boolean(slots.description || props.description !== undefined);
      const hasHeading = Boolean(slots.back || hasTitle || hasDescription);
      return (
        <header {...restAttrs} class={["k-page-header", customClass]}>
          <div class="k-page-header-main">
            {breadcrumb?.length ? <div class="k-page-header-breadcrumb">{breadcrumb}</div> : null}
            {hasHeading ? (
              <div class="k-page-header-heading">
                {slots.back?.()}
                {hasTitle || hasDescription ? (
                  <div class="k-page-header-copy">
                    {hasTitle ? <div class="k-page-header-title">{title}</div> : null}
                    {hasDescription ? (
                      <div class="k-page-header-description">{description}</div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            {content?.length ? <div class="k-page-header-content">{content}</div> : null}
          </div>
          {actions?.length ? <div class="k-page-header-actions">{actions}</div> : null}
        </header>
      );
    };
  },
});

export default PageHeader;
