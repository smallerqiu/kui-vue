import Icon from "../icon";
import Empty from '../empty';
import { hasProp, getChild, isNotEmpty } from '../_tool/utils'

import Drop from '../base/drop'
import { t } from '../locale';
import { Sync, Close, CloseCircle, ChevronDown } from 'kui-icons'
import { Tree } from '../tree'
const cloneDeep = require('lodash.clonedeep');

// const cloneDeep = require('lodash/cloneDeep')
export default {
  name: "TreeSelect",
  props: {
    placeholder: String,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    transfer: { type: Boolean, default: true },
    width: Number,
    value: [String, Number, Array],
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean,
    bordered: { type: Boolean, default: true },
    showArrow: { type: Boolean, default: true },
    theme: String,
    emptyText: String,
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],

    treeData: Array,
    treeCheckable: Boolean,
    treeShowLine: Boolean,
    treeShowIcon: { type: Boolean, default: true },
    treeCheckStrictly: Boolean,
    treeExpandedKeys: Array,
    treeExpandedAll: Boolean,

  },
  provide() {
    return {
      Select: this
    }
  },
  data() {
    return {
      label: "",
      opened: false,
      currentValue: this.value || this.multiple ? [] : '',
      showSearch: false,
      queryKey: '',
      selectWidth: this.width,
      isFocus: false
    };
  },
  watch: {
    value(value) {
      if (isNotEmpty(value)) {
        this.currentValue = value
      } else {
        this.currentValue = this.multiple ? [] : ''
      }
    },
    currentValue(n, o) {
      this.setLabel()
    }
  },
  methods: {
    hideDrop() {
      if (this.showSearch) {
        this.queryKey = ''
        this.$refs.search.value = ''
        this.$refs.search.style.width = ''
      }
      this.showSearch = false
    },
    findNodeByKeyIterative(tree, key) {
      //迭代搜索（深度优先搜索，DFS） 当树的深度可能导致递归方法栈溢出时。
      const stack = [...tree];
      while (stack.length) {
        const node = stack.pop();
        if (node.key === key) {
          return node;
        }
        if (node.children) {
          stack.push(...node.children);
        }
      }
      return null;
    },
    filterTreeByKeyword(tree, keyword) {
      // 使用 lodash 的 cloneDeep 函数深度拷贝树
      return cloneDeep(tree).filter(function iter(node) {
        // 使用 _.some 遍历判断子节点是否符合条件
        if (node.title.includes(keyword)) return true;
        if (node.children) node.children = node.children.filter(iter);
        return node.children && node.children.length > 0;
      });


      // // 创建一个栈来迭代树，存储节点及其父节点信息
      // const stack = tree.map(node => ({ node, parent: null }));
      // const result = [];

      // // 递归函数，克隆并添加节点及其所有子节点
      // function addNodeWithChildren(node) {
      //   // 深拷贝节点以防止原树被修改
      //   const newNode = { ...node, children: [] };
      //   if (node.children) {
      //     for (const child of node.children) {
      //       newNode.children.push(addNodeWithChildren(child));
      //     }
      //   }
      //   return newNode;
      // }

      // // 存储节点的所有父节点，确保结果包含父节点链
      // const parentMap = new Map();

      // // 开始迭代树
      // while (stack.length > 0) {
      //   const { node, parent } = stack.pop();

      //   // 如果节点名包含关键字
      //   if (node.name.includes(keyword)) {
      //     // 把该节点的父节点链添加到结果中
      //     let currentNode = parent;
      //     while (currentNode) {
      //       if (!parentMap.has(currentNode.key)) {
      //         parentMap.set(currentNode.key, addNodeWithChildren(currentNode));
      //         result.push(parentMap.get(currentNode.key));
      //       }
      //       currentNode = parentMap.get(currentNode.key);
      //     }

      //     // 将当前节点及其子节点添加到结果中
      //     result.push(addNodeWithChildren(node));
      //   }

      //   // 把子节点加入堆栈继续遍历
      //   if (node.children) {
      //     for (const child of node.children) {
      //       stack.push({ node: child, parent: node });
      //     }
      //   }
      // }
      // return result;
    },
    getLabel(childs, labelValue) {
      let node = this.findNodeByKeyIterative(childs, labelValue)
      return node?.title || labelValue;
    },
    setLabel() {
      let { currentValue, multiple, label } = this

      currentValue = isNotEmpty(currentValue) ? currentValue : (multiple ? [] : '')
      let currentLabel = isNotEmpty(label) ? label : (multiple ? [] : '')

      if (multiple) {
        if (currentValue.length) {
          let labels = []
          currentValue.forEach((value) => {
            let label = this.getLabel(this.treeData, value)
            labels.push({ label, key: `label_${value}`, value })
          })
          currentLabel = labels
        } else {
          currentLabel = []
        }

      } else {
        currentLabel = this.getLabel(this.treeData, currentValue)
      }
      this.label = currentLabel

      setTimeout(e => { this.setPosition() }, 230);

    },
    clear(e) {
      let label = this.multiple ? [] : ""
      let value = this.multiple ? [] : ""
      this.label = label
      this.currentValue = value
      this.$emit("input", value);
      this.$emit("change", value);
      e.stopPropagation()
    },
    showDrops() {
      let isSearch = ('search' in this.$listeners)

      this.opened = !this.opened;
      if (this.filterable || isSearch) {
        this.showSearch = this.opened
        if (this.opened) {
          this.$nextTick(e => {
            this.isFocus = true
            this.$refs.search.focus()
          })
        } else {
          this.$refs.search.blur()
          this.isFocus = false

          setTimeout(() => {
            this.queryKey = ''
            this.$refs.search.value = ''
          }, 200);
        }
      }
      // this.$nextTick(e => this.setPosition())
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      let isSearch = ('search' in this.$listeners)
      if (isSearch) {
        // this.$nextTick(e => {
        this.showSearch = true
        this.$nextTick(e => {
          this.$refs.search.focus()
          this.isFocus = true
        })
        // })
        return;
      }
      this.showDrops()
    },
    setPosition() {
      // if (!hasProp(this, 'width')) {
      //   this.selectWidth = this.$el.offsetWidth
      // }
      if (this.opened) {
        this.$refs.overlay.setPosition()
      }
    },
    select({ selectedKeys, selected, node }) {
      let item = { label: node.title, value: node.key }
      let { multiple, value, currentValue } = this
      // console.log(value, currentValue, item)

      if (this.showSearch) {
        this.queryKey = ''
        this.$refs.search.value = ''
        this.$refs.search.style.width = ''
      }
      if (!multiple) {
        this.opened = false
        this.showSearch = false
      } else if ('search' in this.$listeners || this.filterable) {
        this.$nextTick(e => {
          this.$refs.search.focus()
          this.isFocus = true
        })
      }
      let hasValue = hasProp(this, 'value')
      //set value
      let newValue = value
      if (!hasValue) {
        newValue = this.multiple ? currentValue || [] : item.value
        this.currentValue = newValue
      }

      if (!multiple) {
        this.currentValue = item.value
        this.currentLabel = item.title
      }

      //set label
      if (!hasValue) {
        if (multiple) {
          let currentLabel = this.label || []
          let index = currentLabel.findIndex(x => x.value === item.value)//  .map(x => x.label).indexOf(item.label)
          if (index === -1) {
            currentLabel.push({ label: item.label, key: item.label + item.value, value: item.value })
          } else {
            currentLabel.splice(index, 1)
          }
          this.label = currentLabel
        } else {
          this.label = item.label
        }
        setTimeout(e => { this.setPosition() }, 230);
      } else {
        this.$nextTick(e => this.setPosition())
      }
      this.$emit("input", this.currentValue);
      this.$emit("change", this.currentValue);

      this.$emit('select', {
        selectedKeys,
        selected,
        node
      })
    },
    removeTag(e, i) {
      if (this.disabled) return
      // let values = this.currentValue || []
      // let labels = this.label || []
      // this.change({ value: values[i], label: labels[i].label })

      this.currentValue.splice(i, 1)
      this.$emit("input", this.currentValue);
      // console.log(this.currentValue,this.label)
      this.$emit("change", this.currentValue);
      e.stopPropagation()
    },
    searchInput(e) {
      this.queryKey = e.target.value
      //todo:
      this.$nextTick(k => {
        //   let max = this.selectWidth - 15 - (this.showArrow ? 25 : 0)
        e.target.style.width = this.$refs.mirror.offsetWidth + 'px'
        this.setPosition()
      })
      if ('search' in this.$listeners) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.opened = true;
          this.$emit('search', e)
        }, 500);
      }
    },
    emptyClick(e) {
      if (this.showSearch) {
        this.$nextTick(e => {
          this.$refs.search.focus()
          this.isFocus = true

        })
      }
    },
    treeCheck() {
      // console.log(e)
      // console.log(checkedKeys)
    }
  },
  mounted() {
    if (hasProp(this, 'value'))
      this.setLabel()
  },
  render() {
    let { disabled, size, multiple,
      opened, placeholder, showArrow, bordered,
      clear, removeTag, queryKey, theme, arrowIcon, icon, shape, filterable,
      clearable, label, toggleDrop, isFocus, currentValue,
      treeData, treeCheckable, treeShowLine, treeShowIcon, treeCheckStrictly, treeExpandedKeys, treeExpandedAll
    } = this
    let childNode = []
    if (arrowIcon == undefined) {
      arrowIcon = ChevronDown
    }
    const classes = [
      "k-tree-select",
      {
        "k-tree-select-disabled": disabled,
        "k-tree-select-open": opened,
        'k-tree-select-borderless': bordered === false,
        "k-tree-select-lg": size == 'large',
        "k-tree-select-sm": size == 'small',
        "k-tree-select-light": theme == 'light',
        "k-tree-select-has-icon": !!icon,
        "k-tree-select-circle": shape == 'circle' && !multiple,
        "k-tree-select-multiple": multiple,
        "k-tree-select-show-search": isFocus,
        "k-tree-select-show-tags": multiple && (label || []).length
      }
    ]

    const queryProps = {
      on: {
        input: this.searchInput,
        blur: () => {
          if (!this.opened) this.showSearch = false
          this.isFocus = false

        }
      },
      ref: 'search',
      class: 'k-tree-select-search',
      attrs: {
        autoComplete: 'off',
      }
    }
    const queryNode = <div v-show={this.showSearch} key="search" class="k-tree-select-search-wrap">
      <input {...queryProps} />
      <span class="k-tree-select-search-mirror" ref="mirror">{queryKey}</span>
    </div>


    const loadingNode = <div class="k-tree-select-loading"><Icon type={Sync} spin /><span>{t('k.select.loading')}</span></div>
    const props = {
      ref: 'overlay',
      props: {
        width: this.selectWidth,
        value: opened,
        selection: this.$el,
        transfer: true,
        extendWidth: true,
        transitionName: 'k-tree-select',
        className: ['k-tree-select-dropdown', { 'k-tree-select-dropdown-multiple': this.multiple, 'k-tree-select-dropdown-sm': size == 'small' }]
      },
      on: {
        input: e => {
          this.opened = e
        },
        hide: () => {
          this.opened = false
          setTimeout(() => {
            this.hideDrop()
          }, 300)
        }
      }
    }
    const selectedKeys = this.multiple ? currentValue || [] : [currentValue]
    // console.log(this.$listeners)
    const treeProps = {
      props: {
        data: treeData,
        checkable: treeCheckable,
        multiple: multiple,
        showLine: treeShowLine,
        showIcon: treeShowIcon,
        checkStrictly: treeCheckStrictly,
        expandedKeys: treeExpandedKeys,
        selectedKeys: selectedKeys,
        checkedKeys: selectedKeys,
      },
      on: {
        select: this.select,
        check: this.treeCheck
      }
    }
    if ('tree-load-data' in this.$listeners) {
      treeProps.on['load-data'] = this.$listeners['tree-load-data']
    }
    if (this.filterable && queryKey && !this.$listeners.search) {
      let parsedQuery = String(queryKey).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
      treeProps.props.data = this.filterTreeByKeyword(treeData, parsedQuery)
    }
    let overlay = <Drop {...props}>
      {this.loading ? loadingNode : (!(treeProps.props.data && treeProps.props.data.length) ?
        <Empty onClick={this.emptyClick} description={this.emptyText} /> :
        <Tree {...treeProps} />)}
    </Drop>

    label = multiple ? (label || []) : label + ''
    placeholder = placeholder || t('k.select.placeholder')
    const placeNode = ((placeholder && (((label === null || label === undefined) || !label.length) && !queryKey))
      ? <div class="k-tree-select-placeholder">{placeholder}</div>
      : null
    )
    const tags = multiple ?
      label.map((c, i) => {
        return <span class="k-tree-select-tag" key={c.key}>{c.label}<Icon type={Close} onClick={e => removeTag(e, i)} /></span>
      })
      : null

    const labelStyle = {
      // opacity: this.showSearch ? .4 : 1,
      display: queryKey.length ? 'none' : ''
    }
    const labelsNode = ((multiple)
      ? (
        [<div class="k-tree-select-labels" name="k-tree-select-tag">{tags}{queryNode}</div>]
      )
      : (label.length ? <div class="k-tree-select-label" style={labelStyle}>{label}</div> : null)
    )
    let isSearch = ('search' in this.$listeners)
    childNode.push(labelsNode);
    placeNode && childNode.push(placeNode);


    if ((filterable || isSearch) && !multiple) {
      childNode.push(queryNode)
    }
    // label = "1"
    const styles = { width: `${this.width}px` }
    let showClear = !disabled && clearable && isNotEmpty(label) && label.length > 0

    classes[1]['k-tree-select-has-clear'] = showClear
    const iconNodes = []

    if (!isSearch && showArrow) {
      iconNodes.push(<Icon class="k-tree-select-arrow" type={arrowIcon} />)
    }
    if (showClear) {
      iconNodes.push(<Icon class="k-tree-select-clearable" type={CloseCircle} onClick={clear} />)
    }
    // console.log(iconNodes)

    iconNodes.push(" ")
    return (
      <div tabIndex="0" class={classes} style={styles} onClick={toggleDrop} ref="rel">
        {icon ? <Icon type={icon} class="k-tree-select-icon" /> : null}
        <div class="k-tree-select-selection">{childNode}</div>
        {iconNodes}
        {overlay}
      </div >
    )
  }
};
