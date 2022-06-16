import { hasChild, sortHeaderCols, findItem, } from './utils'
import { measureScrollBar } from '../_tool/utils'
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
    if (thead && !this.$isServer) {
      // thead.style.marginBottom = `-${thead.offsetHeight - thead.scrollHeight}px`
      let size = measureScrollBar()
      this.scrollBarHeight = size
      if (this.height && this.width) {
        this.setColWidth()
      }
    }
  },
  methods: {
    setColWidth() {
      const cols = this.$refs.colgroup.children//[0].children
      console.log(cols)
      // reset tbody's height
      let col = this.columns2 || this.columns
      // console.log(col)
      for (let i = 0; i < cols.length; i++) {
        // console.log(col[i])
        if (col[i] && !col[i].width) {
          col[i].width = cols[i].getBoundingClientRect().width
        }
      }
    },
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
    renderCol(hasHead) {
      const isFixedHeader = this.height != undefined
      let cols = []
      let columns = this.columns2 || this.columns
      columns.forEach((col, i) => {
        let width = col.width || ''//(isFixedHeader ? 150 : '')
        let hasCheckbox = col.type == 'selection'

        // if (isFixedHeader && i == columns.length - 2 && columns.length > 2) width = ''

        // set Cols
        let colProps = {
          style: { width: `${width}px` },
          class: [{
            'k-table-selection-col': hasCheckbox,
            // 'k-table-cell-fixed-left': col.fixed == 'left',
            // 'k-table-cell-fixed-right': col.fixed == 'right',
          }]
        }
        if (!width) {
          delete colProps.style.width
        }

        if (col.fixed == 'right') {
          // colProps.style = { width: `${width || 100}px`}
        }
        cols.push(<col {...colProps} />)
      })
      if (this.hasExpand) {
        cols.unshift(<col class="k-table-expand-icon-col"></col>)
      }
      if (isFixedHeader && hasHead) {
        cols.push(<col style={{ width: this.scrollBarHeight + 'px' }}></col>)
      }
      return <colgroup ref="colgroup">{cols}</colgroup>
    },
    renderSort(col) {
      return (col.sorter) ? (<span class="k-table-sorter">
        <Icon type="caret-up" class={{ actived: col._order == 'asc' }} />
        <Icon type="caret-down" class={{ actived: col._order == 'desc' }} />
      </span>) : null
    },
    renderTH(col, left, right) {
      const hasInner = ((this.mode == 'main' && !col.fixed) || (col.fixed && this.mode != 'main')) //分裂模式不渲染子集
      let hasCheckbox = col.type == 'selection' && hasInner
      const hasSort = col.sorter && hasInner
      let props = {
        class: {
          'k-table-cell-ellipsis': col.ellipsis,
          'k-table-cell-selection': hasCheckbox,
          'k-table-cell-fixed-left': col.fixed == 'left',
          'k-table-cell-fixed-right': col.fixed == 'right',
          'k-table-cell-fixed-left-last': col.last,
          'k-table-cell-fixed-right-first': col.first,
          'k-table-cell-sorter': hasSort,
          [col.className]: col.className
        },
        attrs: {
          key: col.key,
          colSpan: col.colSpan > 1 ? col.colSpan : null,
          rowSpan: col.rowSpan
        },
        on: {},
        style: {}
      }
      if (col.fixed == 'left') {
        props.style.left = left + 'px'
      }
      if (col.fixed == 'right') {
        props.style.right = right + 'px'
      }

      if (hasSort) {
        props.on.click = () => this.sorter(col)
      }

      // if (hasCheckbox) {
      //   console.log(this.checkAll, this.indeterminate)
      // }

      let inner = hasCheckbox && col.checkType !== 'radio' ?
        <Checkbox indeterminate={this.indeterminate} checked={this.checkAll} onChange={this.onSelectAll} /> :
        (col.$title || col.title)
      return (
        <th {...props}>
          <span class="k-table-header-col">
            {inner ? <span class="k-table-header-title">{inner}</span> : null}
            {hasSort ? this.renderSort(col) : null}
          </span>
        </th>
      )
    },
    getLR(col, cols) {

    },
    renderHead() {
      let cols = []
      if (hasChild(this.columns)) {
        cols = sortHeaderCols(this.columns)
      } else {
        cols = this.columns
      }
      let head = [], ths = [], hasFR = false, left = 0,
        right = cols.filter(c => c.fixed == 'right').map(c => c.width).reduce((a, b) => a + b, 0) + (this.height ? 17 : 0)

      cols.forEach((col, i) => {
        if (Array.isArray(col)) {
          let ths = []
          col.forEach((co, j) => {

            if (co.fixed == 'left' && j > 0) {
              left += col[j - 1].width
            }
            if (co.fixed == 'right' && i < col.length) {
              right -= co.width
            }

            let th = this.renderTH(co, left, right)
            ths.push(th)
          })
          if (i == 0 && this.width) {
            ths.push(<th rowSpan={col.length} class="k-table-cell-fixed-right" style={{ width: this.scrollBarHeight + 'px' }}></th>)
          }
          head.push(<tr>{ths}</tr>)
        } else {
          // set Head
          hasFR = col.fixed == 'right'
          if (col.colSpan !== 0) {
            if (col.fixed == 'left' && i > 0) {
              left += cols[i - 1].width
            }
            if (col.fixed == 'right' && i < cols.length) {
              right -= col.width
            }
            let th = this.renderTH(col, left, right)
            ths.push(th)
          }
        }
      })
      if (this.hasExpand) {
        ths.unshift(<th></th>)
      }
      if (this.height != undefined) {
        let cls = []
        let hasFR = cols.filter(c => c.fixed == 'right')
        if (hasFR) {
          cls.push('k-table-cell-fixed-right')
        }
        ths.push(<th style={{ width: this.scrollBarHeight + 'px' }} class={cls}></th>)
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
          {this.renderCol(hasHead)}
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
        'overflow-x': isMain && width && !height ? 'scroll' : null,
        'overflow-y': !height ? 'hidden' : ''
      },
      on: {
        ...$listeners,
      }
    }

    const content = []
    if (height) {
      let headProps = {
        class: `k-table-fixed-${mode}-thead`,
        // style: {
        //   'margin-bottom': `-${scrollBarHeight}px`,
        // },
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