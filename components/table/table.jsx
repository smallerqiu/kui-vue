import Empty from '../empty'
import Icon from '../icon'
import Spin from '../spin'
import { Checkbox } from '../checkbox'
import ExtendTable from './extend'
const hasChild = (data) => {
  return data ? data.filter(x => x.children && x.children.length > 0).length > 0 : false
}
export default {
  name: 'Table',
  props: {
    bordered: Boolean,
    mini: Boolean,
    width: Number,
    height: Number,
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] }, // 表格类目
    loading: Boolean,
  },
  data() {
    return {
      scrollType: 'left',
      filters: {},
      scrollFocus: 'body',
      indeterminate: false,
      checkAll: false,
    }
  },
  mounted() {
    // console.log(this.$refs.mainTable.a)
  },
  render(h) {
    let { $slots, columns, data, $scopedSlots, loading, bordered, height, width } = this
    // bordered = true
    const { header, footer } = $slots

    let isTableFixed = false
    const cols = [], colsL = [], colsR = [], content = [],
      head = [], headL = [], headR = [],
      tbody = [], tbodyL = [], tbodyR = [];

    //custom head
    if (header) {
      content.push(<div class="k-table-header" > {header}</div>)
    }

    let getSort = (t) => {
      return t.sorter ? (<span class="k-table-sorter">
        <Icon type="md-arrow-dropup" class={{ actived: t._order == 'asc' }} />
        <Icon type="md-arrow-dropdown" class={{ actived: t._order == 'desc' }} />
      </span>) : null
    }
    const isFixedHeader = height > 0

    let expand = $scopedSlots['expandedRowRender']

    //重新排序
    let leftCol = [], middleCol = [], rightCol = [];

    columns.forEach((c) => {
      if (c.fixed == 'left') {
        leftCol.push(c)
      } else if (c.fixed == 'right') {
        rightCol.push(c)
      } else {
        middleCol.push(c)
      }
    })
    columns = [].concat(leftCol, middleCol, rightCol)

    const pushCol = (c, props) => {
      if (c.children && c.children.length > 0) {
        c.children.forEach(j => {
          pushCol(j, props)
        })
      } else {
        props = Object.assign(props, {
          style: { width: `${c.width}px`, 'min-width': `${c.width}px` },
        })
        cols.push(<col {...props} />)
      }
    }

    //set Cols and thead
    columns.forEach((c, i) => {
      let w = c.width || (isFixedHeader ? 150 : '')
      let hasCheckbox = c.type == 'selection'

      if (isFixedHeader && i == columns.length - 2) w = ''

      // set Cols
      let colProps = {
        style: { width: `${w}px`, 'min-width': `${w}px` },
        class: hasCheckbox ? 'k-table-selection-col' : null
      }
      pushCol(c, colProps)

      if (c.fixed == 'left') {
        colsL.push(<col {...colProps} />)
      }
      if (c.fixed == 'right') {
        colProps.style = { width: `${w || 100}px`, 'min-width': `${w || 100}px` }
        colsR.push(<col {...colProps} />)
      }
      // set Head
      let props = {
        class: {
          'k-table-cell-ellipsis': c.ellipsis,
          'k-table-cell-selection': hasCheckbox,
          'k-table-cell-sorter': c.sorter,
          [c.className]: c.className
        },
        attrs: { key: c.key, colSpan: c.colSpan > 1 ? c.colSpan : null },
        on: {
          click: e => this.sorter(c)
        }
      }
      let inner = hasCheckbox ? <Checkbox indeterminate={this.indeterminate} value={this.checkAll} onChange={this.onSelectAll} /> : c.title
      let th = (
        <th {...props}>
          <span class="k-table-header-col">
            <span class="k-table-header-title">{inner}</span>
            {getSort(c)}
          </span>
        </th>
      )
      if (c.fixed == 'left') {
        headL.push(th)
      }
      if (c.fixed == 'right') {
        headR.push(th)
      }
      if (c.colSpan !== 0) {
        head.push(th)
      }
    })

    if (expand) {
      head.unshift(<th></th>)
      cols.unshift(<col class="k-table-expand-icon-col"></col>)
    }

    //Set Data 
    data.forEach((d, i) => {


      let tr = [], trL = [], trR = [];

      columns.forEach((c, j) => {
        // $scopedSlots[c.key]({ text: d[c.key] })
        if (c.key || c.type) {
          let $scope = d[c.key]

          let props = {
            class: [{
              "k-table-cell-ellipsis": c.ellipsis,
              'k-table-cell-selection': c.type == 'selection',
              [c.className]: c.className
            }],
            attrs: {
              title: c.ellipsis ? d[c.key] : null
            },
          }

          if (c.render) {
            let { children, attrs } = c.render($scope, d, i)
            props = Object.assign(props, { attrs })
            $scope = children || $scope
          } else if ($scopedSlots[c.key]) {
            $scope = $scopedSlots[c.key](d[c.key], d, c)
          } else if (c.type == 'selection') {
            let props = {
              props: {
                disabled: d._disabled,
                checked: d._checked,
              },
              on: {
                change: e => this.onSelect(d, e)
              }
            }
            $scope = <Checkbox {...props} />
          }

          if (c.ellipsis) {
            isTableFixed = true
          }

          if (props.attrs.rowSpan !== 0 && props.attrs.colSpan !== 0) {
            tr.push(h('td', props, [!c.fixed ? $scope : null]))  //or
            // tr.push(<td {...props}>{$scope}</td>)
          }
          if (c.fixed == 'left') {
            trL.push(h('td', props, [$scope]))
          }

          if (c.fixed == 'right') {
            trR.push(h('td', props, [$scope]))
          }
        }
      })
      if (expand) {
        tr.unshift(<td class="k-table-row-expand-icon-cell"><Icon onClick={e => this.onExpand(d)} type={d._expanded ? 'md-remove' : 'md-add'} /></td>)
      }
      if (tr.length) {
        tbody.push(<tr key={d.key}>{tr}</tr>)
      }
      if (trL.length) {
        tbodyL.push(<tr key={d.key}>{trL}</tr>)
      }
      if (trR.length) {
        tbodyR.push(<tr key={d.key}>{trR}</tr>)
      }

      if (expand) {
        tbody.push(<tr v-show={d._expanded} class="k-table-expand-row"><td></td><td colSpan={middleCol.length}>{expand(d)}</td></tr>)
      }
    })

    if (colsL.length) {
      const props = {
        props: {
          cols: colsL,
          head: headL,
          body: tbodyL,
          mode: 'left',
          height,
        },
        ref: 'leftTable',
        on: {
          scroll: this.fixedScroll,
          mouseenter: () => this.scrollFocus = `fixed-left`,
          mouseleave: () => this.scrollFocus = 'body'
        }
      }
      content.push(<ExtendTable {...props} />)
    }
    if (colsR.length) {
      const props = {
        props: {
          cols: colsR,
          head: headR,
          body: tbodyR,
          mode: 'right',
          height,
        },
        ref: 'rightTable',
        on: {
          scroll: this.fixedScroll,
          mouseenter: e => {
            this.scrollFocus = `fixed-right`
          },
          mouseleave: e => {
            this.scrollFocus = 'body'
          }
        }
      }
      content.push(<ExtendTable {...props} />)
    }


    let mainProps = {
      props: {
        mode: 'main',
        cols,
        head,
        body: tbody,
        height,
        width,
      },
      ref: 'mainTable',
      on: {
        scroll: this.scroll,
      }
    }
    content.push(<ExtendTable {...mainProps} />)

    let rootProps = {
      class: ["k-table", {
        'k-table-fixed': isTableFixed,
        'k-table-fixed-header': isFixedHeader,
        'k-table-bordered': bordered,
        [`k-table-scroll-${this.scrollType}`]: width
      }]
    }

    if (!data || !data.length) {
      content.push(<Empty />)
    }
    //custom footer
    if (footer) {
      content.push(<div class="k-table-footer" > {footer}</div>)
    }
    if (loading) {
      content.push(<Spin />)
    }
    return (<div {...rootProps}>{content}</div >)
  },
  methods: {
    onExpand(item) {
      this.$set(item, '_expanded', !item._expanded)
    },
    onSelect(item, e) {
      let checked = e.target.checked
      this.$set(item, '_checked', checked)
      // console.log(item._checked)
      let checkedItem = this.data.filter(x => x._checked)
      let checkCount = checkedItem.length
      if (checkCount == this.data.length && checkCount > 0) {
        this.checkAll = true
        this.indeterminate = false
      } else if (checkCount > 0 && checkCount < this.data.length) {
        this.indeterminate = true
      } else if (checkCount == 0) {
        this.indeterminate = false
        this.checkAll = false
      }
      this.$emit('on-select', item, checked, checkedItem)
      let keys = checkedItem.map(x => x.key).join()
      this.$emit('on-change', keys, checkedItem, e)
      // console.log(checkCount, this.indeterminate, this.checkAll, this.data.length)
    },
    onSelectAll(e) {
      let { checked } = e.target
      this.data.forEach(d => {
        this.$set(d, '_checked', checked)
      })
      this.indeterminate = false
      let checkData = checked ? this.data : []
      this.$emit('on-select-all', checked, checkData)

      let keys = checkData.map(x => x.key).join()

      this.$emit('on-change', keys, checkData, e)
    },
    fixedScroll({ target }) {
      let { mainTable, leftTable, rightTable } = this.$refs
      if (this.scrollFocus == 'fixed-right') {
        mainTable.$body.scrollTo(mainTable.$body.scrollLeft, target.scrollTop)
        leftTable && leftTable.$body.scrollTo(leftTable.$body.scrollLeft, target.scrollTop)
      }
    },
    scroll({ target }) {
      let { mainTable, leftTable, rightTable } = this.$refs

      let { scrollLeft, scrollTop } = target
      let min = 0, max = target.scrollWidth - target.offsetWidth;
      // console.log(min, scrollLeft, max)
      if (scrollLeft > min && scrollLeft < max) {
        this.scrollType = 'middle'
      } else if (scrollLeft == min) {
        this.scrollType = 'left'
      } else if (scrollLeft >= max) {
        this.scrollType = 'right'
      }
      //同步thead scroll
      if (mainTable) {
        mainTable.$thead.scrollTo(scrollLeft, 0)
      }
      if (this.scrollFocus == 'body') {
        leftTable && leftTable.$body.scrollTo(0, scrollTop);
        rightTable && rightTable.$body.scrollTo(0, scrollTop);
      }

    },
    sorter(item) {
      let { key, _order, sorter } = item
      if (sorter) {
        if (!_order) {
          _order = 'asc'
        } else if (_order == 'desc') {
          _order = null
        } else {
          _order = 'desc'
        }

        this.$set(item, '_order', _order)
        this.$emit('change', this.filters, { key, order: _order })
      }
    }
  }
}