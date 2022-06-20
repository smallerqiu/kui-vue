import { Select, Option } from '../select'
import { Input } from '../input'
import Icon from '../icon'
import { t } from '../locale';
import { ChevronUp, ChevronDoubleBack, Ellipsis, ChevronDoubleForward } from 'kui-icons'

export default {
  name: "Page",
  props: {
    showSizer: Boolean,
    showTotal: Boolean,
    showElevator: Boolean,
    sizeData: { type: Array, default: () => [10, 15, 20, 30, 40] },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    total: { default: 0, type: Number },
    pageSize: { default: 10, type: Number },
    current: { default: 1, type: Number }
  },
  data() {
    return {
      nextPageGroup: false,
      prevPageGroup: false,
      pageCount: 0,
      page: this.current,
      defaultPageSize: this.pageSize
    }
  },
  watch: {
    pageSize(v) {
      this.defaultPageSize = v
      this.resetPage()
    },
    current(v) {
      this.page = v
      this.resetPage()
    },
    total(v) {
      this.resetPage()
    }
  },
  mounted() {
    this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
  },
  methods: {
    resetPage() {
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
      if (this.page > this.pageCount) {
        this.page = this.pageCount
      }
    },
    renderPage() {
      const groupCount = 7,
        page = Number(this.page),
        pageCount = Number(this.pageCount);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > groupCount) {
        if (page > groupCount - 3) { showPrevMore = true; }
        if (page < pageCount - 3) { showNextMore = true; }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (groupCount - 2);
        for (let i = startPage; i < pageCount; i++) {
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
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      let child = array.map((p, i) => {
        let prop = {
          class: ['k-pager-item', { 'k-pager-item-active': page == p }],
          key: i,
          on: { click: e => this.toPage(p) }
        }
        return <li {...prop}><span>{p}</span></li>
      })

      if (showPrevMore) {
        let p = {
          class: 'k-pager-item k-pager-more',
          on: {
            mouseenter: () => this.prevPageGroup = true,
            mouseleave: () => this.prevPageGroup = false,
            click: () => this.toPage(this.page - 5)
          }
        }
        const moreNode = <li {...p}><Icon strokeWidth={30} type={this.prevPageGroup ? ChevronDoubleBack : Ellipsis} /></li>;
        child.unshift(moreNode)
      }
      if (showNextMore) {
        let p = {
          class: 'k-pager-item k-pager-more',
          on: {
            mouseenter: () => this.nextPageGroup = true,
            mouseleave: () => this.nextPageGroup = false,
            click: () => this.toPage(this.page + 5)
          }
        }
        const moreNode = <li {...p}><Icon strokeWidth={30} type={this.nextPageGroup ? ChevronDoubleForward : Ellipsis} /></li>;
        child.push(moreNode)
      }
      return child
    },
    prePage() {
      if (this.page > 1) {
        this.page--;
        this.$emit('change', this.page)
      }
    },
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
        this.$emit('change', this.page)
      }
    },
    toPage(page) {
      if (page <= 1) {
        page = 1
        this.prevPageGroup = false
      }
      if (page >= this.pageCount) {
        this.nextPageGroup = false
        page = this.pageCount
      }
      this.page = page
      this.$emit('change', page)
    },
    changeSize({ value }) {
      this.defaultPageSize = value
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
      if (this.page > this.pageCount) {
        this.page = this.pageCount
      }
      this.$emit('page-size-change', { current: this.page, pageSize: value })
    },
    renderFirst() {
      if (this.pageCount > 0) {
        return <li class={["k-pager-item", { 'k-pager-item-active': this.page == 1 }]} onClick={e => this.toPage(1)} >
          <span>1</span>
        </li>
      }
      return null
    },
    renderLast() {
      let { pageCount } = this
      if (pageCount > 1) {
        return <li class={['k-pager-item', { 'k-pager-item-active': this.page == pageCount }]} onClick={e => this.toPage(pageCount)} >
          <span>{pageCount}</span>
        </li>
      }
      return null
    },
    renderSize() {
      let prop = {
        props: {
          value: this.defaultPageSize,
          size: this.size,
          options: this.sizeData.map(s => {
            return { value: s, label: `${s}${t('k.page.pageSize')}` }
          })
        },
        on: {
          input: e => this.defaultPageSize = e,
          change: this.changeSize
        },

      }
      return (this.showSizer ? <div class="k-page-sizer"><Select {...prop} /></div > : null)
    },
    renderElvator() {
      let { size } = this
      let prop = {
        class: 'k-page-options-elevator',
        props: { size, value: this.page },
        on: {
          blur: e => {
            let page = e.target.value;
            let { pageCount } = this
            if (page > pageCount) page = pageCount
            if (page < 1) page = 1

            if ((page >= 1 || page <= pageCount) && this.page != page) {
              this.page = page
              this.$emit('change', page)
            }
          },
          // change: e => this.page = e
        }
      }
      return (
        this.showElevator ?
          <div class="k-page-options">
            <span>{t('k.page.goto')}</span><Input {...prop} /><span>{t('k.page.page')}</span>
          </div> : null
      )
    }
  },
  render() {
    const classes = ["k-page", { ["k-page-sm"]: this.size == 'small' }],
      preNode = <li class={['k-pager-item k-pager-prev', { 'k-pager-item-disabled': this.page == 1 }]} onClick={this.prePage}><Icon type={ChevronUp} /></li>,
      nextNode = <li class={['k-pager-item k-pager-next', { 'k-pager-item-disabled': this.page == this.pageCount }]} onClick={this.nextPage}><Icon type={ChevronUp} /></li>,
      totalNode = (this.showTotal ? <div class="k-page-number"><span>{t('k.page.total')} {this.total} {t('k.page.items')}</span></div> : null),
      pagerNode = this.renderPage(),
      sizeNode = this.renderSize(),
      elvatorNode = this.renderElvator(),
      firstNode = this.renderFirst(),
      lastNode = this.renderLast()
    return (
      <div class={classes}>
        <ul class="k-pager">
          {[preNode, firstNode, pagerNode, lastNode, nextNode, sizeNode, totalNode, elvatorNode]}
        </ul>
      </div>
    )
  }
}