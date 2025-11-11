import KImage from './image'
import ImageGroup from './group'
import createInstance from './instance'
import Vue from 'vue'
// import { easyEqual } from '../utils/element'

KImage.show = function (options) {
  // console.log(options)
  let preview = Vue.prototype.preview || createInstance({ type: options.type })
  preview.show(options)
}

KImage.togglePanel = () => {
  let preview = Vue.prototype.preview
  if (preview) {
    preview.togglePanel()
  }
}

KImage.destroy = () => {
  let preview = Vue.prototype.preview
  if (preview) {
    preview.destroy()
  }
}

export { KImage, ImageGroup };