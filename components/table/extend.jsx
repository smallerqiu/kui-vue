import { hasChild, sortHeaderCols, findItem } from './utils'
import { Checkbox } from '../checkbox'
import Icon from '../icon'
export default {
  name: 'ExtendTable',
  props: {
    mode: String,
    body: Array,
    columns: Array,
    columns2: Array,
    height: Number,
    width: Number,
    hasExpand: Boolean,
    indeterminate: Boolean,
    checkAll: Boolean,
  },
  data() {
    return {
      scrollBarHeight: 0,
      headFocus: false,
    }
  },
  mounted() {
    let { thead } = this.$refs
    if (thead) {
      // thead.style.marginBottom = `-${thead.offsetHeight - thead.scrollHeight}px`
      this.scrollBarHeight = thead.offsetHeight - thead.scrollHeight
    }
  },
  methods: {
    sorter(item) {
      let { _order, sorter } = item

      if (sorter) {
        if (!_order) {
          _order = 'asc'
        } else if (_order == 'desc') {
          _order = null
        } else {
          _order = 'desc'
        }
        if (hasChild(this.columns)) {
          //有子集的话，原来的数据结构被重新排序了，所以要判断当前的item 是原始数据的item再传回
          item = findItem(item, this.columns)
        }
        this.$set(item, '_order', _order)
        this.$emit('sorter', item)
      }
    },
    renderCol() {
      const isFixedHeader = this.height
      let cols = []
      let columns = this.columns2 || this.columns
      columns.forEach((col, i) => {
        let width = col.width || (isFixedHeader ? 150 : '')
        let hasCheckbox = col.type == 'selection'

        if (isFixedHeader && i == columns.length - 2 && columns.length > 2) width = ''

        // set Cols
        let colProps = {
          style: { width: `${width}px`, 'min-width': `${width}px` },
          class: hasCheckbox ? 'k-table-selection-col' : null
        }

        if (col.fixed == 'right') {
          colProps.style = { width: `${width || 100}px`, 'min-width': `${width || 100}px` }
        }
        cols.push(<col {...colProps} />)
      })
      if (this.hasExpand) {
        cols.unshift(<col class="k-table-expand-icon-col"></col>)
      }
      return <colgroup>{cols}</colgroup>
    },
    renderSort(col) {
      return (col.sorter) ? (<span class="k-table-sorter">
        <Icon type="md-arrow-dropup" class={{ actived: col._order == 'asc' }} />
        <Icon type="md-arrow-dropdown" class={{ actived: col._order == 'desc' }} />
      </span>) : null
    },
    renderTH(col) {
      const hasInner = ((this.mode == 'main' && !col.fixed) || (col.fixed && this.mode != 'main')) //分裂模式不渲染子集
      let hasCheckbox = col.type == 'selection' && hasInner
      const hasSort = col.sorter && hasInner
      let props = {
        class: {
          'k-table-cell-ellipsis': col.ellipsis,
          'k-table-cell-selection': hasCheckbox,
          'k-table-cell-sorter': hasSort,
          [col.className]: col.className
        },
        attrs: {
          key: col.key,
          colSpan: col.colSpan > 1 ? col.colSpan : null,
          rowSpan: col.rowSpan
        },
        on: {}
      }
      if (hasSort) {
        props.on.click = () => this.sorter(col)
      }
      let inner = hasCheckbox ? <Checkbox indeterminate={this.indeterminate} value={this.checkAll} onChange={this.onSelectAll} /> : col.title
      return (
        <th {...props}>
          <span class="k-table-header-col">
            <span class="k-table-header-title">{inner}</span>
            {hasSort ? this.renderSort(col) : null}
          </span>
        </th>
      )
    },
    renderHead() {
      let cols = []
      if (hasChild(this.columns)) {
        cols = sortHeaderCols(this.columns)
      } else {
        cols = this.columns
      }
      let head = [], ths = [];
      cols.forEach(col => {
        if (Array.isArray(col)) {
          let ths = []
          col.forEach(co => {
            let th = this.renderTH(co)
            ths.push(th)
          })
          head.push(<tr>{ths}</tr>)
        } else {
          // set Head
          if (col.colSpan !== 0) {
            let th = this.renderTH(col)
            ths.push(th)
          }
        }
      })
      if (this.hasExpand) {
        ths.unshift(<th></th>)
      }
      if (!head.length) {
        head.push(<tr>{ths}</tr>)
      }

      return <thead ref="head">{head}</thead>
    },
    renderTable(hasHead, body) {
      let props = {}
      if (this.mode == 'main') {
        props.style = { width: `${this.width}px` }
      }
      return (
        <table {...props}>
          {this.renderCol()}
          {hasHead ? this.renderHead(hasHead) : null}
          {body ? <tbody ref="tbody">{body}</tbody> : null}
        </table>
      )
    },
    onSelectAll(e) {
      this.$emit('select-all', e)
    }
  },
  render() {
    let { height, width, mode, body, $listeners, scrollBarHeight } = this
    const isMain = mode == 'main'

    let rootProps = {
      class: `k-table-fixed-${mode}`,
      style: {
        'overflow-x': isMain && width && !height ? 'scroll' : null
      },
      on: {
        ...$listeners,
      }
    }

    const content = []
    if (height) {
      let headProps = {
        class: `k-table-fixed-${mode}-thead`,
        style: {
          'margin-bottom': `-${scrollBarHeight}px`,
        },
        on: {},
        ref: 'thead',
      }
      //主体头部滚动
      if (isMain && width) {
        headProps.on.scroll = ({ target }) => {
          this.headFocus && this.$refs.body.scrollTo(target.scrollLeft, this.$refs.body.scrollTop)
        }
        headProps.on.mouseenter = () => this.headFocus = true
        headProps.on.mouseleave = () => this.headFocus = false
      }
      content.push(<div {...headProps}>{this.renderTable(true, false)}</div>)

      const props = {
        class: `k-table-fixed-${mode}-body`,
        style: {
          height: `${isMain ? height : (height - scrollBarHeight)}px`,
          // height: `${height}px`,
          'overflow-x': isMain && width ? 'auto' : null,
          'overflow-y': isMain && height ? 'auto' : null,
        },
        ref: 'body',
        on: {
          ...$listeners
        }
      }
      content.push(<div {...props}>{this.renderTable(false, body)}</div>)
    } else {
      content.push(this.renderTable(true, body))
    }
    return (
      <div {...rootProps}>{content}</div >
    )
  }
}