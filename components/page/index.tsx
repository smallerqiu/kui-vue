import { ChevronsLeft, ChevronsRight, ChevronUp, Ellipsis } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";
import Icon from "../icon";
import InputNumber from "../input-number";
import zhCN from "../locale/zh-CN";
import { Select } from "../select";

const pageProps = {
  disabled: Boolean as BooleanType,
  showSizer: Boolean as BooleanType,
  showTotal: { type: Boolean as BooleanType, default: true },
  showElevator: Boolean as BooleanType,
  simple: Boolean as BooleanType,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  sizeData: { type: Array as PropType<number[]>, default: () => [10, 15, 20, 30, 40] },
  size: {
    type: String as PropType<SizeType>,
  },
  total: { default: 0, type: Number },
  pageSize: { default: 10, type: Number },
  page: { default: 1, type: Number },
  onChange: {
    type: Function as PropType<(page: number, pageSize: number) => void>,
  },
};
export type PageProps = ExtractPropTypes<typeof pageProps>;

const Page = defineComponent({
  name: "Page",
  inheritAttrs: false,
  props: pageProps,
  emits: ["update:page", "update:pageSize", "change"],
  setup(props, { emit, attrs }) {
    const nextPageGroup = ref(false);
    const prevPageGroup = ref(false);
    const normalizePageSize = (value: number) => (Number.isFinite(value) && value > 0 ? value : 10);
    const calculatePageCount = (total: number, pageSize: number) =>
      Math.max(1, Math.ceil((Number.isFinite(total) && total > 0 ? total : 0) / pageSize));
    const normalizePage = (value: number, count: number) =>
      Math.min(count, Math.max(1, Number.isFinite(value) ? Math.floor(value) : 1));
    const defaultPageSize = ref(normalizePageSize(props.pageSize));
    const pageCount = ref(calculatePageCount(props.total, defaultPageSize.value));
    const defaultPage = ref(normalizePage(props.page, pageCount.value));
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);

    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const sizeOptions = computed(() =>
      props.sizeData.map((size) => ({
        value: size,
        label: `${size}${locale.value?.k.page.pageSize}`,
      })),
    );
    watch(
      () => props.pageSize,
      (v) => {
        defaultPageSize.value = v;
        resetPage();
      },
    );
    watch(
      () => props.total,
      () => {
        resetPage();
      },
    );

    watch(
      () => props.page,
      (v) => {
        defaultPage.value = v;
        resetPage();
      },
    );

    const resetPage = () => {
      const normalizedPageSize = normalizePageSize(defaultPageSize.value);
      if (normalizedPageSize !== defaultPageSize.value) {
        defaultPageSize.value = normalizedPageSize;
        emit("update:pageSize", normalizedPageSize);
      }
      pageCount.value = calculatePageCount(props.total, defaultPageSize.value);
      const normalizedPage = normalizePage(defaultPage.value, pageCount.value);
      if (normalizedPage !== defaultPage.value) {
        defaultPage.value = normalizedPage;
        emit("update:page", normalizedPage);
      }
    };
    const renderPage = () => {
      const groupCount = 7,
        page = Number(defaultPage.value),
        pCount = Number(pageCount.value);
      let showPrevMore = false;
      let showNextMore = false;
      if (pCount > groupCount) {
        if (page > groupCount - 3) {
          showPrevMore = true;
        }
        if (page < pCount - 3) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pCount - (groupCount - 2);
        for (let i = startPage; i < pCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < groupCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(groupCount / 2) - 1;
        for (let i = page - offset; i <= page + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pCount; i++) {
          array.push(i);
        }
      }
      const child = array.map((p, i) => {
        const prop = {
          class: ["k-pager-item", { "k-pager-item-active": page == p }],
          key: i,
          role: "button",
          tabindex: props.disabled ? -1 : 0,
          "aria-current": page === p ? "page" : undefined,
          "aria-label": `Page ${p}`,
          onClick: () => toPage(p),
          onKeydown: (event: KeyboardEvent) => activateByKeyboard(event, () => toPage(p)),
        };
        return (
          <li {...prop}>
            <span>{p}</span>
          </li>
        );
      });

      if (showPrevMore) {
        const p = {
          class: "k-pager-item k-pager-more",
          onMouseenter: () => (prevPageGroup.value = true),
          onMouseleave: () => (prevPageGroup.value = false),
          role: "button",
          tabindex: props.disabled ? -1 : 0,
          "aria-label": "Previous 5 pages",
          onClick: () => toPage(defaultPage.value - 5),
          onKeydown: (event: KeyboardEvent) =>
            activateByKeyboard(event, () => toPage(defaultPage.value - 5)),
        };
        const moreNode = (
          <li {...p}>
            <Icon type={prevPageGroup.value ? ChevronsLeft : Ellipsis} />
          </li>
        );
        child.unshift(moreNode);
      }
      if (showNextMore) {
        const p = {
          class: "k-pager-item k-pager-more",
          onMouseenter: () => (nextPageGroup.value = true),
          onMouseleave: () => (nextPageGroup.value = false),
          role: "button",
          tabindex: props.disabled ? -1 : 0,
          "aria-label": "Next 5 pages",
          onClick: () => toPage(defaultPage.value + 5),
          onKeydown: (event: KeyboardEvent) =>
            activateByKeyboard(event, () => toPage(defaultPage.value + 5)),
        };
        const moreNode = (
          <li {...p}>
            <Icon type={nextPageGroup.value ? ChevronsRight : Ellipsis} />
          </li>
        );
        child.push(moreNode);
      }
      return child;
    };
    const prePage = () => {
      if (props.disabled) return;
      if (defaultPage.value > 1) {
        defaultPage.value--;
        emit("update:page", defaultPage.value);
        emit("change", defaultPage.value, defaultPageSize.value);
      }
    };
    const nextPage = () => {
      if (props.disabled) return;
      if (defaultPage.value < pageCount.value) {
        defaultPage.value++;
        emit("update:page", defaultPage.value);
        emit("change", defaultPage.value, defaultPageSize.value);
      }
    };
    const toPage = (page: number) => {
      if (props.disabled) return;
      if (page == defaultPage.value) return;
      if (page <= 1) {
        page = 1;
        prevPageGroup.value = false;
      }
      if (page >= pageCount.value) {
        nextPageGroup.value = false;
        page = pageCount.value;
      }
      defaultPage.value = page;
      emit("update:page", page);
      emit("change", defaultPage.value, defaultPageSize.value);
    };
    const activateByKeyboard = (event: KeyboardEvent, action: () => void) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      action();
    };
    const changeSize = (value: string | number | (string | number)[]) => {
      if (Array.isArray(value)) return;
      defaultPageSize.value = normalizePageSize(Number(value));
      pageCount.value = calculatePageCount(props.total, defaultPageSize.value);
      if (defaultPage.value > pageCount.value) {
        defaultPage.value = pageCount.value;
        emit("update:page", defaultPage.value);
      }
      emit("update:pageSize", defaultPageSize.value);
      emit("change", defaultPage.value, defaultPageSize.value);
    };
    const renderFirst = () => {
      if (pageCount.value > 0) {
        return (
          <li
            class={["k-pager-item", { "k-pager-item-active": defaultPage.value == 1 }]}
            role="button"
            tabindex={props.disabled ? -1 : 0}
            aria-current={defaultPage.value === 1 ? "page" : undefined}
            aria-label="Page 1"
            onClick={() => toPage(1)}
            onKeydown={(event) => activateByKeyboard(event, () => toPage(1))}
          >
            <span>1</span>
          </li>
        );
      }
      return null;
    };
    const renderLast = () => {
      const pCount = pageCount.value;
      if (pCount > 1) {
        return (
          <li
            class={["k-pager-item", { "k-pager-item-active": defaultPage.value == pCount }]}
            role="button"
            tabindex={props.disabled ? -1 : 0}
            aria-current={defaultPage.value === pCount ? "page" : undefined}
            aria-label={`Page ${pCount}`}
            onClick={() => toPage(pCount)}
            onKeydown={(event) => activateByKeyboard(event, () => toPage(pCount))}
          >
            <span>{pCount}</span>
          </li>
        );
      }
      return null;
    };
    const renderSize = () => {
      const prop = {
        modelValue: defaultPageSize.value,
        size: props.size,
        clearable: false,
        theme: props.theme,
        options: sizeOptions.value,
        disabled: props.disabled,
        onChange: changeSize,
      };
      return props.showSizer ? (
        <div class="k-page-sizer">
          <Select {...prop} />
          <span class="k-page-sizer-measure" aria-hidden="true">
            {sizeOptions.value.map((option, index) => (
              <span key={index}>{option.label}</span>
            ))}
          </span>
        </div>
      ) : null;
    };

    const changePageByElevator = (page?: number) => {
      if (page == undefined) return;

      const pCount = pageCount.value;
      page = normalizePage(page, pCount);

      if (defaultPage.value != page) {
        defaultPage.value = page;
        emit("update:page", page);
        emit("change", page, defaultPageSize.value);
      }
    };
    const renderElevator = () => {
      const _props = {
        class: "k-page-options-elevator",
        size: props.size,
        theme: props.theme,
        disabled: props.disabled,
        clearable: false,
        min: 1,
        onChange: changePageByElevator,
      };
      return props.showElevator ? (
        <div class="k-page-options">
          <span>{locale.value?.k.page.goto}</span>
          <InputNumber {..._props} />
          <span>{locale.value?.k.page.page}</span>
        </div>
      ) : null;
    };
    return () => {
      const classes = [
          "k-page",
          `k-page-${props.shape}`,
          {
            ["k-page-sm"]: props.size == "small",
            ["k-page-lg"]: props.size == "large",
            "k-page-fill": props.theme == "fill",
            "k-page-outline": props.theme == "outline",
            "k-page-disabled": props.disabled,
            "k-page-simple": props.simple,
          },
        ],
        preNode = (
          <li
            class={[
              "k-pager-item k-pager-prev",
              { "k-pager-item-disabled": defaultPage.value == 1 },
            ]}
            role="button"
            tabindex={props.disabled || defaultPage.value === 1 ? -1 : 0}
            aria-disabled={props.disabled || defaultPage.value === 1}
            aria-label="Previous page"
            onClick={prePage}
            onKeydown={(event) => activateByKeyboard(event, prePage)}
          >
            <Icon type={ChevronUp} />
          </li>
        ),
        nextNode = (
          <li
            class={[
              "k-pager-item k-pager-next",
              { "k-pager-item-disabled": defaultPage.value == pageCount.value },
            ]}
            role="button"
            tabindex={props.disabled || defaultPage.value === pageCount.value ? -1 : 0}
            aria-disabled={props.disabled || defaultPage.value === pageCount.value}
            aria-label="Next page"
            onClick={nextPage}
            onKeydown={(event) => activateByKeyboard(event, nextPage)}
          >
            <Icon type={ChevronUp} />
          </li>
        ),
        totalNode =
          props.showTotal && !props.simple ? (
            <div class="k-page-number">
              <span>
                {locale.value?.k.page.total} {props.total} {locale.value?.k.page.items}
              </span>
            </div>
          ) : null,
        pagerNode = renderPage(),
        sizeNode = renderSize(),
        elevatorNode = renderElevator(),
        firstNode = renderFirst(),
        lastNode = renderLast();
      const simpleNode = (
        <li class="k-page-simple-number" aria-current="page">
          {props.showElevator ? (
            <span class="k-page-simple-input">
              <InputNumber
                modelValue={defaultPage.value}
                min={1}
                max={pageCount.value}
                controls={false}
                disabled={props.disabled}
                size={props.size}
                theme={props.theme}
                onChange={changePageByElevator}
              />
            </span>
          ) : (
            <span>{defaultPage.value}</span>
          )}
          <span aria-hidden="true">/</span>
          <span>{pageCount.value}</span>
        </li>
      );
      return (
        <nav {...attrs} class={[classes, attrs.class]} aria-label="Pagination">
          {totalNode}
          <ul class="k-pager">
            {props.simple
              ? [preNode, simpleNode, nextNode]
              : [preNode, firstNode, pagerNode, lastNode, nextNode]}
          </ul>
          {!props.simple && [sizeNode, elevatorNode]}
        </nav>
      );
    };
  },
});
export default Page;
