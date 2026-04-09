import { ChevronDoubleBack, ChevronDoubleForward, ChevronUp, Ellipsis } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, SizeType } from "../const/types";
import Icon from "../icon";
import InputNumber from "../input-number";
import zhCN from "../locale/zh-CN";
import { Select } from "../select";

export const pageProps = {
  disabled: Boolean as BooleanType,
  showSizer: Boolean as BooleanType,
  showTotal: { type: Boolean as BooleanType, default: true },
  showElevator: Boolean as BooleanType,
  theme: { type: String, default: "light" },
  sizeData: { type: Array as PropType<number[]>, default: () => [10, 15, 20, 30, 40] },
  size: {
    default: "default",
    type: String as PropType<SizeType>,
  },
  total: { default: 0, type: Number },
  pageSize: { default: 10, type: Number },
  page: { default: 1, type: Number },
};
export type PageProps = ExtractPropTypes<typeof pageProps>;

const Page = defineComponent({
  name: "Page",
  props: pageProps,
  setup(ps, { emit }) {
    const nextPageGroup = ref(false);
    const prevPageGroup = ref(false);
    const pageCount = ref(Math.ceil(ps.total / ps.pageSize) || 1);
    const defaultPage = ref(ps.page);
    const defaultPageSize = ref(ps.pageSize);
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    watch(
      () => ps.pageSize,
      (v) => {
        defaultPageSize.value = v;
        resetPage();
      }
    );
    watch(
      () => ps.total,
      () => {
        resetPage();
      }
    );

    watch(
      () => ps.page,
      (v) => {
        defaultPage.value = v;
        resetPage();
      }
    );

    const resetPage = () => {
      pageCount.value = Math.ceil(ps.total / defaultPageSize.value) || 1;
      if (defaultPage.value > pageCount.value) {
        defaultPage.value = pageCount.value;
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
      let child = array.map((p, i) => {
        let prop = {
          class: ["k-pager-item", { "k-pager-item-active": page == p }],
          key: i,
          onClick: (e: MouseEvent) => toPage(e, p),
        };
        return (
          <li {...prop}>
            <span>{p}</span>
          </li>
        );
      });

      if (showPrevMore) {
        let p = {
          class: "k-pager-item k-pager-more",
          onMouseenter: () => (prevPageGroup.value = true),
          onMouseleave: () => (prevPageGroup.value = false),
          onClick: (e: MouseEvent) => toPage(e, defaultPage.value - 5),
        };
        const moreNode = (
          <li {...p}>
            <Icon strokeWidth={30} type={prevPageGroup.value ? ChevronDoubleBack : Ellipsis} />
          </li>
        );
        child.unshift(moreNode);
      }
      if (showNextMore) {
        let p = {
          class: "k-pager-item k-pager-more",
          onMouseenter: () => (nextPageGroup.value = true),
          onMouseleave: () => (nextPageGroup.value = false),
          onClick: (e: MouseEvent) => toPage(e, defaultPage.value + 5),
        };
        const moreNode = (
          <li {...p}>
            <Icon strokeWidth={30} type={nextPageGroup.value ? ChevronDoubleForward : Ellipsis} />
          </li>
        );
        child.push(moreNode);
      }
      return child;
    };
    const prePage = () => {
      if (ps.disabled) return;
      if (defaultPage.value > 1) {
        defaultPage.value--;
        emit("update:page", defaultPage.value);
        emit("change", defaultPage.value, defaultPageSize.value);
      }
    };
    const nextPage = () => {
      if (ps.disabled) return;
      if (defaultPage.value < pageCount.value) {
        defaultPage.value++;
        emit("update:page", defaultPage.value);
        emit("change", defaultPage.value, defaultPageSize.value);
      }
    };
    const toPage = (e: MouseEvent, page: number) => {
      e.preventDefault();
      if (ps.disabled) return;
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
    const changeSize = (value: any) => {
      defaultPageSize.value = value;
      pageCount.value = Math.ceil(ps.total / defaultPageSize.value) || 1;
      if (defaultPage.value > pageCount.value) {
        defaultPage.value = pageCount.value;
        emit("update:page", defaultPage.value);
      }
      emit("change", defaultPage.value, defaultPageSize.value);
    };
    const renderFirst = () => {
      if (pageCount.value > 0) {
        return (
          <li
            class={["k-pager-item", { "k-pager-item-active": defaultPage.value == 1 }]}
            onClick={(e) => toPage(e, 1)}
          >
            <span>1</span>
          </li>
        );
      }
      return null;
    };
    const renderLast = () => {
      let pCount = pageCount.value;
      if (pCount > 1) {
        return (
          <li
            class={["k-pager-item", { "k-pager-item-active": defaultPage.value == pCount }]}
            onClick={(e) => toPage(e, pCount)}
          >
            <span>{pCount}</span>
          </li>
        );
      }
      return null;
    };
    const renderSize = () => {
      let prop = {
        value: defaultPageSize.value,
        size: ps.size,
        clearable: false,
        theme: ps.theme,
        options: ps.sizeData.map((s) => {
          return { value: s, label: `${s}${locale.value?.k.page.pageSize}` };
        }),
        disabled: ps.disabled,
        onChange: changeSize,
      };
      return ps.showSizer ? <div class="k-page-sizer">{<Select {...prop} />}</div> : null;
    };

    const renderElevator = () => {
      let { size } = ps;
      let props = {
        class: "k-page-options-elevator",
        size,
        theme: ps.theme,
        disabled: ps.disabled,
        clearable: false,
        // value: defaultPage.value,
        onChange: (page?: number) => {
          if (page == undefined) {
            return;
          }

          let pCount = pageCount.value;
          if (page > pCount) page = pCount;
          if (page < 1) page = 1;

          if ((page >= 1 || page <= pCount) && defaultPage.value != page) {
            defaultPage.value = page;
            emit("update:page", page);
            emit("change", page, defaultPageSize.value);
          }
        },
      };
      return ps.showElevator ? (
        <div class="k-page-options">
          <span>{locale.value?.k.page.goto}</span>
          <InputNumber {...props} />
          <span>{locale.value?.k.page.page}</span>
        </div>
      ) : null;
    };
    return () => {
      const classes = [
          "k-page",
          {
            ["k-page-sm"]: ps.size == "small",
            "k-page-light": ps.theme == "light",
            "k-page-disabled": ps.disabled,
          },
        ],
        preNode = (
          <li
            class={[
              "k-pager-item k-pager-prev",
              { "k-pager-item-disabled": defaultPage.value == 1 },
            ]}
            onClick={prePage}
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
            onClick={nextPage}
          >
            <Icon type={ChevronUp} />
          </li>
        ),
        totalNode = ps.showTotal ? (
          <div class="k-page-number">
            <span>
              {locale.value?.k.page.total} {ps.total} {locale.value?.k.page.items}
            </span>
          </div>
        ) : null,
        pagerNode = renderPage(),
        sizeNode = renderSize(),
        elevatorNode = renderElevator(),
        firstNode = renderFirst(),
        lastNode = renderLast();
      return (
        <div class={classes}>
          {totalNode}
          <ul class="k-pager">{[preNode, firstNode, pagerNode, lastNode, nextNode]}</ul>
          {[sizeNode, elevatorNode]}
        </div>
      );
    };
  },
});
export default Page;
