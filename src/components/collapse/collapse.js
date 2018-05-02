//利用vue 的状态管理 结合 vue transition 和 css3 的 transition 实现 Jqeury toggle
//给需要的 元素加上 css  transition: height .2s ease-in-out;
//by chuchur

let on = {
    beforeEnter(el) {
        el.style.height = 0
    },
    enter(el) {
        if (el.scrollHeight !== 0)
            el.style.height = el.scrollHeight + 'px'
        else {
            el.style.height = ''
        }
    },
    afterEnter(el) {
        el.style.height = ''
    },

    beforeLeave(el) {
        el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
        if (el.scrollHeight !== 0) { el.style.height = 0 }
    },
    afterLeave(el) {
        el.style.height = ''
    },
}

// https://cn.vuejs.org/v2/guide/render-function.html#函数式组件

export default {
    name: 'Collapse',
    functional: true, //为true 表示 无状态 data 无 无实例 没有this
    render(h, context) {
        return h('transition', { on: on }, context.children)
    }
}