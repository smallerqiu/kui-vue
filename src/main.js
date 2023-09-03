import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Copy from 'vue-clipboard2'
Vue.use(Copy)


import kui from 'kui-vue'
import 'kui-vue/styles/index.less'
//set default lang (along)
// import locale from 'kui-vue/locale/lang/ua'
// Vue.use(kui, { locale })

// with vue-i18n 8.X
// import VueI18n from 'vue-i18n'
// import en from 'kui-vue/locale/lang/en'
// import ua from 'kui-vue/locale/lang/ua'
// import en from '../dist/locale/en'
// import ua from '../dist/locale/ua'
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: 'ua', // set default locale
//   messages: { ua, en }
// })
// Vue.use(kui, {
//   i18n: (key, value) => i18n.t(key, value)
// })
//tes change
// setTimeout(() => { i18n.locale = 'en'}, 5000);

// not set lang
Vue.use(kui)

import './assets/css/index.less'

import Demo from './components/demo'
Vue.component(Demo.name, Demo)

Vue.config.productionTip = false

new Vue({
  // i18n,
  router,
  render: h => h(App),
}).$mount('#app')


var _hmt = _hmt || [], host = window.location.hostname;
// console.log(process)
if (host != 'localhost' && host != '127.0.0.1') {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}