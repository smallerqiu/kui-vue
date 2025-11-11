export const withInstall = (component) => {
  component.install = function (app) {
    app.component(component.name, component);
  };

  return component
};
// vue3 fun for vue2.7.16 
import Vue from 'vue';
import { getCurrentInstance } from 'vue'
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

export function cloneVNode(vnode, props = {}, merge = false, transition = false) {
  const instance = getCurrentInstance();
  const h = instance.proxy.$createElement;

  // 重建 VNode
  return h(
    vnode.tag,
    merge ? { ...vnode.data, ...props } : props,
    vnode.children
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