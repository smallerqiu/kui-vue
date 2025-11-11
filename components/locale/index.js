import Vue from 'vue'
import zhCN from './lang/zh-CN'

const state = Vue.observable({
  currentLang: 'zhCN',
  messages: { zhCN },
  vueI18nInstance: null,
})

export function setI18n(i18n) {
  state.vueI18nInstance = i18n
  state.currentLang = i18n.locale
  Object.defineProperty(i18n, 'locale', {
    get() { return state.currentLang },
    set(v) { state.currentLang = v },
  })
}

export function use(lang) {
  state.currentLang = lang
}

export function t(key, values) {
  const i18n = state.vueI18nInstance
  if (i18n && typeof i18n.t === 'function') {
    return i18n.t(key, values)
  }
  const langs = state.messages[state.currentLang] || {}
  return key.split('.').reduce((o, k) => (o ? o[k] : undefined), langs) || key
}

export default { t, use, setI18n }