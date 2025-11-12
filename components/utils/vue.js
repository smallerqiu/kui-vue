export const withInstall = (component) => {
  component.install = function (app) {
    app.component(component.name, component);
  };

  return component
};
// vue3 fun for vue 2.7.16 
import Vue from 'vue';
export function createVNode(component, props) {
  const instance = new Vue({
    render: h => h(component, { props })
  });
  instance.$mount();
  return instance.$children[0]; // 返回组件实例
}
export function render(vnode, container) {
  if (vnode instanceof Vue) {
    container.appendChild(vnode.$el);
  } else {
    // 如果是 VNode，需要特殊处理
    const vm = new Vue({
      render: () => vnode
    });
    vm.$mount();
    container.appendChild(vm.$el);
  }
}

function pick(obj, keys) {
  if (!obj || typeof obj !== 'object') {
    return {};
  }

  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function assign(target, ...sources) {
  if (!target || typeof target !== 'object') {
    target = {};
  }

  for (const source of sources) {
    if (source && typeof source === 'object') {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
}

const PROPS_KEYS = [
  'class', 'staticClass', 'style', 'staticStyle',
  'attrs', 'props', 'domProps',
  'on', 'nativeOn',
  'directives', 'scopedSlots',
  'slot', 'ref', 'key', 'refInFor'
]
// import pick from 'lodash.pick'
// import assign from 'lodash.assign'

function getVNodeProps(vnode) {
  const data = pick(vnode.data, PROPS_KEYS)
  const { componentOptions } = vnode
  if (componentOptions) {
    assign(data, {
      props: componentOptions.propsData,
      on: componentOptions.listeners
    })
  }

  return data
}

export function cloneVNode(vnode, props = {}, merge = false, transition = false) {
  if (!vnode) return vnode
  if (!vnode.tag) return vnode.text

  const h = vnode.context?.$createElement
  const tag = vnode.componentOptions?.tag || vnode.tag;
  const vNodeProps = getVNodeProps(vnode)
  const children = vnode.componentOptions?.children || vnode.children;

  if (merge) {
    for (let key in props) {
      (vNodeProps[key] = { ...vNodeProps[key], ...props[key] })
    }
  }
  return h(
    tag,
    vNodeProps,
    children
  );
}

export function isVNode(node) {
  return (
    node &&
    typeof node === 'object' &&
    node.hasOwnProperty('tag') &&
    node.hasOwnProperty('componentOptions')
  );
}