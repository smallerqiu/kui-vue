import Image from './image'
import ImageGroup from './group'
import createInstance from './instance'
import Vue from 'vue'

Image.show = (options) => {
  let preview = Vue.prototype.preview || createInstance()
  preview.show(options)
}

Image.install = function (Vue) {
  Vue.component(Image.name, Image);
};
export { Image, ImageGroup };