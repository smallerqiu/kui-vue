import { Select, Option } from '../select'
import { Input } from '../input'
import Icon from '../icon'

export default {
  name: "Page",
  props: {
    showSizer: Boolean,
    showTotal: Boolean,
    showElevator: Boolean,
    sizeData: { type: Array, default: () => [10, 15, 20, 30, 40] },
    mini: { default: false, type: Boolean },
    total: { default: 0, type: Number },
    pageSize: { default: 10, type: Number },
    current: { default: 1, type: Number }
  },
  data() {
    return {
      pageCount: 0,
      page: this.current,
      defaultPageSize: this.pageSize
    }
  },
  watch: {
    total(v) {
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
    }
  },
  mounted() {
    this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
  },
  methods: {
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
          class: ['k-pager-item', { active: page == p }],
          key: i,
          on: { click: e => this.toPage(p) }
        }
        return <li {...prop}><span>{p}</span></li>
      })
      const moreNode = <li class="k-pager-item k-pager-more"><Icon type="ios-more" /></li>;

      if (showPrevMore) {
        child.unshift(moreNode)
      }
      if (showNextMore) {
        child.push(moreNode)
      }
      return child
    },
    prePage() {
      this.page > 1 && this.page--;
      this.$emit('change', this.page)
    },
    nextPage() {
      this.page < this.pageCount && this.page++;
      this.$emit('change', this.page)
    },
    toPage(page) {
      this.page = page
      this.$emit('change', page)
    },
    changeSize({ value }) {
      // console.log(value)
      this.defaultPageSize = value
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
      this.$emit('page-size-change', value)
    },
    renderFirst() {
      if (this.pageCount > 0) {
        return <li class={["k-pager-item", { 'active': this.page == 1 }]} onClick={e => this.toPage(1)} >
          <span>1</span>
        </li>
      }
      return null
    },
    renderLast() {
      let { pageCount } = this
      if (pageCount > 1) {
        return <li class={['k-pager-item', { 'active': this.page == pageCount }]} onClick={e => this.toPage(pageCount)} >
          <span>{pageCount}</span>
        </li>
      }
      return null
    },
    renderSize() {
      let prop = {
        value: this.defaultPageSize,
        props: { mini: this.mini },
        on: {
          input: e => this.defaultPageSize = e,
          change: this.changeSize
        }
      }
      return (
        this.showSizer ?
          <div class="k-page-sizer">
            <Select {...prop}>
              {this.sizeData.map((p, i) => <Option key={i} value={p}>{p}条/页</Option>)}
            </Select >
          </div > : null
      )
    },
    renderElvator() {
      let { mini } = this
      let prop = {
        class: 'k-page-options-elevator',
        props: { mini, value: this.page },
        on: {
          blur: e => {
            let page = e.target.value;
            let { pageCount } = this
            if (page > pageCount) topage = pageCount
            if (page < 1) topage = 1

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
            <span>跳至</span><Input {...prop} /><span>页</span>
          </div> : null
      )
    }
  },
  render() {
    const classes = ["k-page", { ["k-page-mini"]: this.mini }],
      preNode = <li class={['k-pager-item', { 'k-pager-item-disabled': this.page == 1 }]} onClick={this.prePage}><Icon type="ios-arrow-back" /></li>,
      nextNode = <li class={['k-pager-item', { 'k-pager-item-disabled': this.page == this.pageCount }]} onClick={this.nextPage}><Icon type="ios-arrow-forward" /></li>,
      totalNode = (this.showTotal ? <div class="k-page-number"><span>共{this.total}条</span></div> : null),
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