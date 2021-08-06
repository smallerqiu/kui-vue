import Vue from 'vue';
import Group from "./group";

const newInstance = (props = {}) => {
  const Notice = new Vue({
    render(h) {
      return h(Group, {
        props: props
      });
    }
  });

  const component = Notice.$mount();
  document.body.appendChild(component.$el);
  const notice = Notice.$children[0];
  return notice
}

export default newInstance