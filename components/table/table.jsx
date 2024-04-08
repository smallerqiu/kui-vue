import Empty from '../empty'
import Icon from '../icon'
import Spin from '../spin'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import ExtendTable from './extend'
import { sortFixedCol, hasChild, sortColumnsOnline } from './utils'
import { Remove, Add } from 'kui-icons'
export default {
  name: 'Table',
  props: {
    bordered: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    width: Number,
    height: [Number, String],
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] }, // 表格类目
    loading: Boolean,
    sticky: [Boolean, Number],
    emptyText: String,
  },
  data() {
    return {
      ping: 'left',
      filters: {},
      // scrollFocus: 'body',
    }
  },
  render() {
    let { $slots, data, $scopedSlots, loading, height, width, sticky } = this
    // bordered = true
    const { header, footer } = $slots
    let isTableFixed = width || height
    const content = [], tbody = [];

    //custom head
    if (header) {
      content.push(<div class="k-table-header"> {header}</div>)
    }


    let expandNode = $scopedSlots['expandedRowRender']

    //重新排序

    let { columns } = sortFixedCol(this.columns)

    //reset custom header
    columns.forEach(col => {
      if (col.renderHeader) {
        col.$title = col.renderHeader(h, col.title)
      } else if ($scopedSlots[`header-${col.key}`]) {
        col.$title = $scopedSlots[`header-${col.key}`](col.title)
      }
    })

    let _columns = columns

    if (hasChild(this.columns)) {
      _columns = sortColumnsOnline(columns)
    }

    let checkAll = data.filter(x => x._checked).length == data.length && data.length > 0;

    let indeterminate = data.filter(x => x._checked).length > 0 && !checkAll;
    //Set Data 
    data.forEach((d, i) => {
      let tr = [], trL = [], trR = [];
      // d._checked = d._checked || false
      // d._disabled = d._disabled || false

      let left = 0, right = _columns.filter(c => c.fixed == 'right').map(c => c.width).reduce((a, b) => a + b, 0);
      _columns.forEach((c, j) => {
        // $scopedSlots[c.key]({ text: d[c.key] })
        if (c.key || c.type) {
          let $scope = d[c.key]

          let props = {
            class: [{
              "k-table-cell-ellipsis": c.ellipsis,
              'k-table-cell-selection': c.type == 'selection',
              'k-table-cell-fixed-left': c.fixed == 'left',
              'k-table-cell-fixed-left-last': c.last,
              'k-table-cell-fixed-right-first': c.first,
              'k-table-cell-fixed-right': c.fixed == 'right',
              [c.className]: c.className
            }],
            attrs: {
              title: c.ellipsis ? this.toString(d[c.key]) : null
            },
            style: {}
          }
          if (c.fixed == 'left' && j > 0) {
            left += _columns[j - 1].width
            props.style.left = left + 'px'
          }
          if (c.fixed == 'right' && j < _columns.length - 1) {
            right -= c.width
            props.style.right = right + 'px'
          }
          if (c.render) {
            let h = this.$createElement
            let scope = c.render(h, d, i, c.key)

            let { children, attrs } = scope
            if (attrs) {
              props = Object.assign(props, { attrs })
              $scope = children || $scope
            } else {
              $scope = scope
            }
            // console.log($scope)
          } else if ($scopedSlots[c.key]) {
            $scope = $scopedSlots[c.key](d[c.key], d, c)
          } else if (c.type == 'selection') {
            let props = {
              props: {
                disabled: d._disabled,
                checked: d._checked,
              },
              on: {
                change: e => this.onSelect(d, e, c.checkType)
              }
            }
            $scope = c.checkType == 'radio' ? <Radio {...props} /> : <Checkbox {...props} />
          }

          if (c.ellipsis) {
            isTableFixed = true
          }

          if (props.attrs.rowSpan !== 0 && props.attrs.colSpan !== 0) {
            // tr.push(h('td', props, [!c.fixed ? $scope : null]))  
            // tr.push(h('td', props, $scope))
            //or
            tr.push(<td {...props}>{$scope}</td>)
          }

        }
      })
      if (expandNode) {
        tr.unshift(<td class="k-table-row-expand-icon-cell"><Icon onClick={e => this.onExpand(d)} type={d._expanded ? Remove : Add} /></td>)
      }
      let trProps = {
        class: { 'k-table-row-hover': d._hover },
        key: (d.key || i).toString(),
        on: {
          click: () => {
            this.$emit('row-click', d)
          }
        }
      }

      if (tr.length) {
        tbody.push(<tr {...trProps}>{tr}</tr>)
      }

      if (expandNode) {
        tbody.push(<tr v-show={d._expanded} class="k-table-expand-row"><td></td><td colSpan={_columns.length}>{expandNode(d)}</td></tr>)
      }
    })

    let mainProps = {
      props: {
        columns: columns,
        columns2: _columns,
        body: tbody,
        height,
        indeterminate,
        checkAll,
        width,
        sticky,
        hasExpand: expandNode != null
      },
      on: {
        sorter: this.sorter,
        'select-all': this.onSelectAll,
        ping: p => {
          this.ping = p
          // todo: class 动态赋值 会重新 render 造成卡顿，后面再细细 可能是table 数据有内存泄露问题

        }
        // resize: this.resetHeight
      }
    }
    if (columns && columns.length) {
      content.push(<ExtendTable {...mainProps} />)
    }

    const rootProps = {
      // ref: 'table',
      class: ["k-table", {
        'k-table-fixed': isTableFixed,
        'k-table-sm': this.size == 'small',
        'k-table-lg': this.size == 'large',
        'k-table-bordered': this.bordered,
        [`k-table-ping-${this.ping}`]: width !== undefined
      }]
    }

    if (!data || !data.length || !columns || !columns.length) {
      content.push(<Empty description={this.emptyText} />)
    }
    //custom footer
    if (footer) {
      content.push(<div class="k-table-footer">{footer}</div>)
    }
    if (loading) {
      content.push(<Spin />)
    }
    return (<div {...rootProps}>{content}</div >)
  },

  methods: {
    toString(obj) {
      if (typeof obj === 'object' && obj !== null) {
        return JSON.stringify(obj);
      } else {
        return String(obj);
      }
    },
    sorter(item) {
      let { key, _order } = item
      this.$emit('change', this.filters, { key, order: _order })
    },
    onExpand(item) {
      this.$set(item, '_expanded', !item._expanded)
    },
    onSelect(item, e, type) {
      let checked = e.target.checked
      let checkedItem, keys;
      if (type == 'radio') {
        this.data.forEach(obj => {
          this.$set(obj, '_checked', obj.key == item.key)
        })
        checkedItem = item
        keys = item.key
      } else {
        this.$set(item, '_checked', checked)
        checkedItem = this.data.filter(x => x._checked == true)
        keys = checkedItem.map(x => x.key).join()
      }

      this.$emit('on-select', item, checked, checkedItem)
      this.$emit('on-change', keys, checkedItem, e)
      // console.log(checkCount, this.indeterminate, this.checkAll, this.data.length)
    },
    onSelectAll(e) {
      let { checked } = e.target
      this.selectAll(checked, e)
    },
    selectAll(checked, e) {
      this.data.forEach(d => {
        !d._disabled && this.$set(d, '_checked', checked)
      })
      // this.indeterminate = false
      let checkData = checked ? this.data.filter(x => x._checked) : []
      this.$emit('on-select-all', checked, checkData)

      let keys = checkData.map(x => x.key).join()

      this.$emit('on-change', keys, checkData, e)
      this.checkAll = checked
    }
  }
}