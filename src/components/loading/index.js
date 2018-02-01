import Load from './loading'
import Vue from 'vue';

let loading = null;
let timer = null;
let ftimer = null;

let loadingbar = () => {
   if (loading.type != 'line') return;
   loading.percent = 0
   loading.error = false
   timer = setInterval(() => {
      loading.percent += Math.floor(Math.random() * 3 + 5);
      if (loading.percent >= 95) {
         clearInterval(timer)
         timer = null
      }
   }, 200);
}

const mount = props => {
   clearTimeout(ftimer)
   if (loading) {
      if (timer) return;
      if (props.type) loading.setType(props.type)
      loading.visible = true
      loadingbar()
      return;
   }

   const _props = props || {}
   const Instance = new Vue({
      data:{type:'zoom'},
      render(h) {
         return h(Load, {
            props: _props,
           
         });
      }
   })
   const component = Instance.$mount();
   document.body.appendChild(component.$el)
   loading = Instance.$children[0];
   loadingbar()

}

let Loading = {
   name: 'Loading',
   start(type, title) {
      let options = ['line', 'zoom', 'flip', 'rotate', 'bounce'].indexOf(type) >= 0 ? {
         type: type,
         loadingText: title || ''
      } : {}
      mount(options);
   },
   finish() {
      if (loading) {
         if (loading.type == 'line') {
            loading.percent = 100;
            clearInterval(timer)
            timer = null
            ftimer = setTimeout(() => {
               loading.visible = false
            }, 500);
         } else {
            loading.visible = false
         }
      }
   },
   error() {
      if (!loading) {
         mount({
            type: 'line'
         });
      }
      loading.setType('line')
      loading.percent = 100
      loading.error = true
      loading.visible = true
      clearInterval(timer)
      timer = null
      ftimer = setTimeout(() => {
         loading.visible = false
      }, 500)
   },
   upload(percent) {
      if (loading && loading.percent) loading.percent = percent
   },
   config(options) {
      mount(options);
   },
   destroy() {
      document.body.removeChild(document.getElementsByClassName('k-loading'));
      loading = null;
      timer && clearInterval(timer)
      timer = null
   }
};
export default Loading