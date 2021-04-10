import Image from './image'
import ImageGroup from './group'
import createInstance from './instance'
import Vue from 'vue'
// import { easyEqual } from '../_tool/utils'

Image.show = function (options) {
  let preview = Vue.prototype.preview || createInstance()
  preview.show(options)
}

Image.togglePanel = () => {
  let preview = Vue.prototype.preview
  if (preview) {
    preview.togglePanel()
  }
},

Image.destory = () => {
  let preview = Vue.prototype.preview
  if (preview) {
    preview.destory()
  }
}

Image.install = function (Vue) {
  Vue.component(Image.name, Image);
};
export { Image, ImageGroup };