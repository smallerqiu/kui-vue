import { createApp, h } from 'vue';
import Group from './group';

const newInstance = (props = {}) => {
  const container = document.createElement('div');

  const app = createApp({
    render() {
      return h(Group, props);
    }
  });

  const instance = app.mount(container);
  document.body.appendChild(container);

  return instance;
};

export default newInstance;