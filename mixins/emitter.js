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
            var pos = { left: 0, top: 0, width: 0, height: 0 };

            // 
            if (!element) return pos
            
            return element.getBoundingClientRect()


            // 父级 为 overflow hidden， 就掉水沟了， 取值不准
            // if (!element) return pos;
            // pos.left = element.offsetLeft;
            // pos.top = element.offsetTop;

            // var parent = element.offsetParent;
            // while (parent !== null) {
            //     pos.left += parent.offsetLeft;
            //     pos.top += parent.offsetTop;
            //     parent = parent.offsetParent;
            // }
            // return pos;
        },
    }
};