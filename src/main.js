import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Copy from 'vue-clipboard2'
Vue.use(Copy)

import kui from 'kui-vue'

// return;
import 'kui-vue/styles/index.less'

// 1. set default lang (along)
// import locale from 'kui-vue/locale/lang/ua'
// Vue.use(kui, { locale })

// 2. with vue-i18n 8.X
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import zhCN from 'kui-vue/locale/lang/zh-CN'
import en from 'kui-vue/locale/lang/en'
import fr from 'kui-vue/locale/lang/fr'
import ua from 'kui-vue/locale/lang/ua'
import el from 'kui-vue/locale/lang/el'
const i18n = new VueI18n({
  locale: 'zhCN', // set default locale
  messages: { zhCN, ua, en, fr, el }
})
Vue.use(kui, { i18n })
window.i18n = i18n
// 2.1 test change
// setTimeout(() => { i18n.locale = 'ua'}, 2000);

// 3.no lang
Vue.use(kui)

import './assets/css/index.less'

import Demo from './components/demo'
Vue.component(Demo.name, Demo)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')


var _hmt = _hmt || [], host = window.location.hostname;
if (host != 'localhost' && host != '127.0.0.1') {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2cd83ff4bed8ca08c9962d0c458d8e16";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}