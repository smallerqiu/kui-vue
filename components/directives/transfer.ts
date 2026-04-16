// import type { ObjectDirective } from "vue";
// export const transfer: ObjectDirective = {
//   mounted(el, { value }, vnode) {
//     if (value) {
//       const parentNode = el.parentNode;
//       if (!parentNode) return false;

//       const target = (value === true ? document.body : value) || document.body;

//       if (target != document.body) {
//         const container = target?.$el || target;
//         container.appendChild(el);
//         el.__data = { parentNode, box: el };
//       } else {
//         let box = document.createElement("div");

//         box.appendChild(el);
//         target.appendChild(box);
//         el.__data = { parentNode, box };
//       }
//     }
//   },
//   unmounted(el, { value }) {
//     // if parentNode is removed, we need to remove the element
//     if (value) {
//       const target = value === true ? document.body : value || document.body;
//       // el.__data.parentNode.appendChild(el)
//       const container = target?.$el || target;
//       container.removeChild(el.__data.box);
//       el.__data = null;
//     }
//   },
// };

import type { ObjectDirective } from "vue";
export const transfer: ObjectDirective = {
  mounted(el, { value }) {
    if (value) {
      const parentNode = el.parentNode;
      if (!parentNode) return false;
      const target = value.$el
        ? value.$el
        : (value === true ? document.body : value) || document.body;
      target.appendChild(el);
      el.__data = { parentNode };
    }
  },
  unmounted(el, { value }) {
    if (value && el.__data && el.__data.parentNode) {
      el.__data.parentNode.appendChild(el);
      el.__data = null;
    }
  },
};

