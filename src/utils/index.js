let utils = {
   uuid: function () { return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36); },
   findChilds: (context, componentName) => {
      return context.$children.reduce((components, child) => {
         if (child.$options.name === componentName) components.push(child);
         const foundChilds = utils.findChilds(child, componentName);
         return components.concat(foundChilds);
      }, []);
   },
   findParent: (context, componentName, componentNames) => {
      if (typeof componentName === 'string') {
         componentNames = [componentName];
      } else {
         componentNames = componentName;
      }

      let parent = context.$parent;
      let name = parent.$options.name;
      while (parent && (!name || componentNames.indexOf(name) < 0)) {
         parent = parent.$parent;
         if (parent) name = parent.$options.name;
      }
      return parent;
   }
}

export default utils