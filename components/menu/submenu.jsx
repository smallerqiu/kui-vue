import { defineComponent, ref, reactive, provide, inject, onMounted, nextTick } from 'vue'
import Collapse from '../base/collapse'
import BasePop from '../base/pop'
import CMenu from './menu.jsx'
import Icon from '../icon'
import { ChevronDown, ChevronForward } from 'kui-icons'

export default defineComponent({
  name: "SubMenu",
  props: {
    disabled: Boolean,
    title: String,
    icon: [String, Array],
  },
  setup(props, { slots }) {
    const SubMenu = inject('SubMenu', null)
    const Menu = inject('Menu', null)
    const Dropdown = inject('Dropdown', null)

    const state = reactive({
      active: false,
      opened: false,
      left: null,
      minWidth: null,
      rendered: false,
      zIndex: 1,
    })

    provide('SubMenu', state)

    onMounted(() => {
      if (SubMenu) {
        state.zIndex += SubMenu.zIndex
      }
      if (Menu) {
        const { selectedKeys, defaultOpenKeys, inlineCollapsed } = Menu
        const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9)
        const opened = defaultOpenKeys.indexOf(key) >= 0

        if (opened) {
          state.rendered = true
        }
        if (SubMenu) {
          const selected = selectedKeys.indexOf(key) >= 0
          if (selected && selectedKeys.indexOf(SubMenu.title) < 0) {
            Menu.selectedKeys.push(SubMenu.title)
          }
        }
        if (!inlineCollapsed) {
          state.opened = opened
        }
      }
    })

    const openChange = () => {
      if (props.disabled) return;
      if (Menu) {
        const { currentMode, defaultOpenKeys, accordion, inlineCollapsed } = Menu
        let openKeys = [...defaultOpenKeys]
        const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9)
        const index = openKeys.indexOf(key)

        // accordion
        if (accordion && !SubMenu) {
          openKeys = index >= 0 ? [] : [key]
        } else {
          if (index >= 0) {
            openKeys.splice(index, 1)
          } else {
            openKeys.push(key)
          }
        }
        state.rendered = true
        nextTick(() => {
          state.opened = openKeys.indexOf(key) > -1
          Menu.openChange(openKeys)
        })
      }
    }

    const showPopupMenu = () => {
      if (props.disabled) return;
      const { Menu } = state
      const { currentMode, inlineCollapsed } = Menu
      if (currentMode == 'inline' && !inlineCollapsed) return;
      clearTimeout(state.timer)
      state.active = true
      if (state.pop) {
        clearTimeout(state.pop.timer)
      }
      if (state.Dropdown) {
        clearTimeout(state.Dropdown.timer)
      }
      if (currentMode == 'horizontal') {
        state.minWidth = state.el.offsetWidth
      }
      if (currentMode != 'inline' || inlineCollapsed) {
        state.rendered = true
        nextTick(() => {
          // 展开子集
          state.opened = true
          let openKeys = [...Menu.defaultOpenKeys]
          const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9)
          openKeys.indexOf(key) < 0 && openKeys.push(key)
          Menu.openChange(openKeys)
        })
      }
    }

    const hidePopupMenu = () => {
      if (props.disabled) return;
      const { Menu } = state
      const { currentMode, inlineCollapsed } = Menu
      if (currentMode != 'inline' || inlineCollapsed) {
        clearTimeout(state.timer)
        state.timer = setTimeout(() => {
          state.active = false
          state.opened = false

          let openKeys = [...Menu.defaultOpenKeys]
          const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9),
            index = openKeys.indexOf(key)
          index > -1 && openKeys.splice(index, 1)
          Menu.openChange(openKeys)
        }, 200);
      }
    }

    const subMouseEnter = (e) => {
      if (props.disabled) return;
      clearTimeout(state.timer)
      let sub = SubMenu
      while (sub) {
        clearTimeout(sub.timer)
        clearTimeout(sub.pop.timer)
        sub = sub.SubMenu
      }
      let drop = Dropdown
      if (drop) {
        clearTimeout(drop.timer)
        clearTimeout(drop.pop.timer)
      }
    }

    const subMouseLeave = (e) => {
      if (props.disabled) return;
      let sub = SubMenu
      hidePopupMenu()
      while (sub) {
        sub.hidePopupMenu()
        sub = sub.SubMenu
      }
      let drop = Dropdown
      if (drop) {
        drop.hidePopup()
      }
    }

    const handleClick = (options) => {
      const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9)
      options.keyPath.unshift(key)
      let parent = SubMenu || Menu
      if (parent) {
        parent.handleClick(options)
      }
      let { currentMode, inlineCollapsed } = Menu
      if (currentMode != 'inline' || inlineCollapsed) {
        state.opened = false
        Menu.openChange([])
      }
    }

    const pop = ref(null)
    const el = ref(null)

    return () => {
      const { disabled, Dropdown, opened, Menu, icon, rendered } = state
      const key = props.title || 'sub_' + Math.random().toString(36).substr(2, 9)
      const { currentMode, theme, selectedKeys, inlineCollapsed, mode, defaultOpenKeys } = Menu
      const selected = selectedKeys.indexOf(key) >= 0

      const showInline = currentMode == 'inline'

      if (showInline) {
        state.opened = defaultOpenKeys.indexOf(key) >= 0
        if (state.opened) state.rendered = true
      }
      let types = currentMode == 'horizontal' || inlineCollapsed ? 'vertical' : currentMode

      const preCls = Dropdown ? 'dropdown-menu-submenu' : 'menu-submenu';

      let titleProps = {
        class: `k-${preCls}-title`,
        on: {
          click: () => openChange(),
          mouseenter: showPopupMenu,
          mouseleave: hidePopupMenu
        },
        style: {
        }
      }
      if (SubMenu && SubMenu.zIndex > 0 && (Menu && Menu.mode == 'inline' && !Menu.inlineCollapsed)) {
        titleProps.style.paddingLeft = state.zIndex * 16 + 'px'
      }
      let title = props.title || slots.title
      const titleNode = <div {...titleProps}>
        {icon ? <Icon type={icon} class="k-menu-item-icon" /> : null}
        {<span class="k-menu-title-content">{title}</span>}
        <Icon type={(showInline && !inlineCollapsed) || (currentMode == 'horizontal' && SubMenu == null) ?
          ChevronDown : ChevronForward} class={`k-${preCls}-arrow`} />
      </div>

      const popupProps = {
        slot: 'content',
        class: [`k-${preCls}-sub`],
        style: {
          'min-width': `${state.minWidth}px`,
          'margin-left': theme == 'dark' && !SubMenu && mode == "horizontal" ? '-16px' : null
        },
        on: {
          // mouseenter: () => {
          //   clearTimeout(state.timer);
          //   state.active = true;
          //   // if (!showInline)
          //   //   state.opened = true
          // },
          // mouseleave: () => {
          //   // hidePopupMenu()
          // },
        }
      }

      if ((showInline && !inlineCollapsed) ||
        (!showInline && SubMenu) ||
        (showInline && inlineCollapsed && SubMenu)
        || Dropdown) {
        popupProps.directives = [{ name: 'show', value: opened }]
      } else {
        // popupProps.style.minWidth = state.minWidth + 'px'
      }
      const childNode = <div {...popupProps}><CMenu mode={types} theme={theme}>{slots.default}</CMenu></div>

      // let popMenuNode = null
      let popNodes = [titleNode]
      // if (((!showInline || inlineCollapsed) && !SubMenu && !Dropdown)) {
      let popProps = {}
      if (!showInline || inlineCollapsed) {
        popProps = {
          props: {
            isMenu: true,
            showPlacementArrow: false,
            preCls: preCls + '-popup',
            // transfer: !SubMenu,
            transfer: true,
            placement: currentMode == 'horizontal' && !SubMenu && !Dropdown ? 'bottom-left' : 'right-top',
            value: opened,
            offsetLeft: currentMode == 'vertical' || inlineCollapsed || (currentMode == 'horizontal' && SubMenu) ? 6 : 0,
          },
          on: {
            click: openChange,
            mouseleave: subMouseLeave,
            mouseenter: subMouseEnter,
            input: (opened) => {
              state.opened = opened
              // if (currentMode == 'horizontal') {
              //   state.minWidth = state.el.offsetWidth
              // }
            }
          }
        }
        // popMenuNode = <BasePop {...popProps} ref="pop">{[titleNode, childNode]}</BasePop>
      } else {
        // popMenuNode = [titleNode, rendered ? <Collapse collapse={showInline && !inlineCollapsed}
        // name={'k-' + preCls + (showInline && !inlineCollapsed && !Dropdown ? '-slide' : '-fade')}>{childNode}</Collapse> : null]
      }
      let CollapseNode = null

      if (!showInline || inlineCollapsed) {
        popNodes.push(childNode)
      } else if (rendered) {
        CollapseNode = <Collapse collapse={showInline && !inlineCollapsed}
          name={'k-' + preCls + (showInline && !inlineCollapsed && !Dropdown ? '-slide' : '-fade')}>{childNode}</Collapse>
      }
      const classes = [`k-${preCls}`, {
        [`k-${preCls}-active`]: state.active,
        [`k-${preCls}-selected`]: selected && !Dropdown,
        [`k-${preCls}-opened`]: opened,
        [`k-${preCls}-disabled`]: disabled
      }]

      return (<li class={classes}>{<BasePop {...popProps} ref={pop}>{titleNode}{popNodes}</BasePop>}{CollapseNode}</li>)
      // return (<li class={classes}>{popMenuNode}</li>)
    }
  }
});