export default {
   bind(el, binding, ) {
      let scroll = (e) => {
         if (binding.expression) {
            binding.value(e);
         }
      }
      el._scroll = scroll
      el._resize = scroll
      window.addEventListener('resize', scroll)
      document.addEventListener('scroll', scroll)
   },
   unbind(el, bind) {
      window.removeEventListener('resize', el._scroll)
      document.removeEventListener('scroll', el._resize)
      delete el._scroll
      delete el._resize
   }
}