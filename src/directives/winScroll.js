export default {
    bind(el, binding) {
        let scroll = (e) => {
            if (binding.expression) {
                binding.value(e);
            }
        }
        el._scroll = scroll
        el._resize = scroll
        el._mousewhell = scroll
        window.addEventListener('resize', scroll)
        window.addEventListener('mousewheel', scroll)
        document.addEventListener('scroll', scroll)
    },
    unbind(el, bind) {
        window.removeEventListener('resize', el._scroll)
        document.removeEventListener('scroll', el._resize)
        window.removeEventListener('mousewheel', el._mousewhell)
        delete el._scroll
        delete el._resize
        delete el._mousewhell
    }
}