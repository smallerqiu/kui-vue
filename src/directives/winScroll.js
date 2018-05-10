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
        document.addEventListener('scroll', scroll)
        window.addEventListener('mousewheel', scroll)
    },
    unbind(el, bind) {
        window.removeEventListener('resize', el._scroll)
        document.removeEventListener('scroll', el._resize)
        document.removeEventListener('scroll', el._mousewhell)
        delete el._scroll
        delete el._resize
        delete el._mousewhell
    }
}