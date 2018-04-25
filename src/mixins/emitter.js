function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
export default {
    methods: {
        getChilds(context, componentName) {
            return context.$children.reduce((components, child) => {
                if (child.$options.name === componentName) components.push(child);
                const foundChilds = this.getChilds(child, componentName);
                return components.concat(foundChilds);
            }, []);
        },
        getParent(componentName) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            return parent
        },
        dispatch(componentName, eventName, params) {
            let parent = this.getParent(componentName)
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        },
        getElementPos(element) {

            /* //滚动无法取值
              if (element) {
                 return element.getBoundingClientRect()
             } else {
                 throw new Error('找不到Pos emlement')
             } */

            // 父级 为 overflow hidden， 就掉水沟了， 取值不准
            var pos = { x: 0, y: 0, width: 0, height: 0 };
            if (!element) return pos;
            pos.x = element.offsetLeft;
            pos.y = element.offsetTop;
            
            var current = element.offsetParent;
            while (current !== null) {
                pos.x += current.offsetLeft;
                pos.y += current.offsetTop;
                current = current.offsetParent;
            }
            return pos;
        },
    }
};