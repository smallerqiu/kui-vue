import { hasChild, sortHeaderCols, findItem, } from './utils'
import { measureScrollBar } from '../_tool/utils'
import { Checkbox } from '../checkbox'
import Icon from '../icon'
import { CaretUp, CaretDown } from 'kui-icons'

export default {
  name: 'ExtendTable',
  props: {
    body: Array,
    columns: Array,
    columns2: Array,
    height: [Number, String],
    width: Number,
    hasExpand: Boolean,
    indeterminate: Boolean,
    sticky: [Boolean, Number],
    checkAll: Boolean,
  },
  data() {
    return {
      scrollBarHeight: 0,
      // type: 'left',
      theadSync: false,
      tbodySync: false
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
      // reset tbody's height
      let col = this.columns2 || this.columns
      for (let i = 0; i < cols.length; i++) {
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
      const isFixedHeader = this.height !== undefined
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
        <Icon type={CaretUp} class={{ actived: col._order == 'asc' }} />
        <Icon type={CaretDown} class={{ actived: col._order == 'desc' }} />
      </span>) : null
    },
    renderTH(col, left, right) {
      let hasCheckbox = col.type == 'selection'
      const hasSort = col.sorter
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
    renderHead() {
      let cols = []
      if (hasChild(this.columns)) {
        cols = sortHeaderCols(this.columns)
      } else {
        cols = this.columns
      }
      if (!cols || cols.length == 0) return null;

      let head = [], ths = [], hasFR = false, left = 0,
        right = cols.filter(c => c.fixed == 'right').map(c => c.width).reduce((a, b) => a + b, 0) + (this.height ? this.scrollBarHeight : 0)

      cols.forEach((col, i) => {
        if (Array.isArray(col)) {
          let ths = [], r = col.filter(c => c.fixed == 'right').map(c => c.width).reduce((a, b) => a + b, 0) + (this.height ? this.scrollBarHeight : 0)

          col.forEach((co, j) => {
            if (co.fixed == 'left' && j > 0) {
              left += col[j - 1].width
            }
            if (co.fixed == 'right' && i < col.length) {
              r -= co.width
            }

            let th = this.renderTH(co, left, r)
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
      let props = { style: {} }
      if (!this.height && this.sticky) {
        props.class = 'k-table-thead-sticky'
        if (this.sticky > 0) {
          props.style.top = this.sticky + 'px'
        }
      }
      return <thead ref="head" {...props}>{head}</thead>
    },
    renderTable(hasHead, body) {
      let props = {}
      props.style = { width: `${this.width}px` }
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
    },
    asyncScroll(e, target) {
      let min = 0, max = e.target.scrollWidth - e.target.offsetWidth,
        scrollLeft = e.target.scrollLeft;
      scrollLeft = Math.round(scrollLeft);

      if (target) {
        if (target == 'tbody') {
          if (!this.theadSync) {
            this.theadSync = true
            this.$refs[target].scrollLeft = scrollLeft
          }
          this.theadSync = false
        }
        if (target == 'thead') {
          if (!this.tbodySync) {
            this.tbodySync = true
            this.$refs[target].scrollLeft = scrollLeft
          }
          this.tbodySync = false
        }
      }
      let ping = 'left'
      // console.log(min, scrollLeft, max)
      if (scrollLeft > min && scrollLeft < max) {
        ping = 'middle'
      } else if (scrollLeft == min) {
        ping = 'left'
      } else if (scrollLeft == max || scrollLeft - this.scrollBarHeight == max) {
        ping = 'right'
      }
      this.$emit('ping', ping)
      // this.$refs.table.setAttribute('class', `k-table11-ping-${ping}`)
    }
  },
  render() {
    let { height, width, body, scrollBarHeight, sticky } = this
    let rootProps = {
      // ref: 'table',
      class: [`k-table-container`,
        //   // { [`k-table-ping-${type}`]: width != undefined },
      ],
      style: {},
      on: {}
    }
    let has_sticky = sticky !== undefined && sticky > 0
    if (width && !height && !has_sticky) {
      rootProps.style.overflow = 'auto';
      rootProps.on.scroll = e => this.asyncScroll(e) //只有左右,没有header scroll
    }
    const content = []
    if (height || (width && has_sticky)) {
      let headProps = {
        class: [`k-table-thead`, { 'k-table-thead-sticky': has_sticky }],
        on: {
          scroll: e => this.asyncScroll(e, 'tbody')
        },
        ref: 'thead',
        style: {
          // marginBottom: -scrollBarHeight + 'px'
        }
      }
      if (has_sticky) {
        headProps.style.top = sticky + 'px'
      }
      if (width && height && !has_sticky) {
        // headProps.style.marginBottom = -scrollBarHeight + 'px'
      }

      if (has_sticky) {
        headProps.style.overflow = 'hidden'
      } else if (height) {
        headProps.style.overflow = 'auto'
      }
      if (this.columns && this.columns.length) {
        content.push(<div {...headProps}>{this.renderTable(true, false)}</div>)
      }
      const props = {
        class: `k-table-body`,
        style: {
        },
        on: {
          scroll: e => this.asyncScroll(e, 'thead')
        },
        ref: "tbody"
      }
      if (height) {
        props.style = {
          height: height + (typeof height === 'number' ? 'px' : ''),
          overflow: 'auto scroll'
        }
      } else if (width || has_sticky) {
        props.style = {
          overflow: 'auto hidden'
        }
      }
      if (body && body.length) {
        content.push(<div {...props}>{this.renderTable(false, body)}</div>)
      }
    } else {
      if (body && body.length) {
        content.push(this.renderTable(true, body))
      }
    }
    return (
      <div {...rootProps}>{content}</div >
    )
  }
}