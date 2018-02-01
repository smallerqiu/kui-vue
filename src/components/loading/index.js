import Load from './loading'
import Vue from 'vue';

let loading = null;
let timer = null;
let ftimer = null;

let loadingbar = () => {
    if (loading.mode != 'line') return;
    loading.percent = 0
    loading.error = false
    timer = setInterval(() => {
        loading.percent += Math.floor(Math.random() * 3 + 5);
        if (loading.percent >= 95) {
            loading.percent = 95
            clearInterval(timer)
            clearTimeout(ftimer)
            timer = null
        }
    }, 200);
}

const mount = props => {
    if (loading) {
        if (props.mode) loading.mode = props.mode
        loading.visible = true
        loadingbar()
        return;
    }
    console.log(props)
    const _props = props || {}
    const Instance = new Vue({
        render(h) {
            return h(Load, {
                props: _props,
            });
        }
    })
    const component = Instance.$mount();
    document.body.appendChild(component.$el)
    loading = Instance.$children[0];
    loadingbar()

}

let Loading = {
    name: 'Loading',
    start(type, title) {
        clearInterval(timer)
        clearTimeout(ftimer)
        let options = {}
        let t = ['line', 'zoom', 'flip', 'rotate', 'bounce'].indexOf(type) >= 0 ? type : ''
        options.loadingText = title || ''
        if (loading) {
            t && (options.mode = t)
        }else{
            options.type = t
        }
        mount(options);
    },
    finish() {
        clearInterval(timer)
        clearTimeout(ftimer)
        if (loading) {
            if (loading.mode == 'line') {
                loading.error = false;
                loading.visible = true;
                loading.percent = 100;
                timer = null
                ftimer = setTimeout(() => {
                    loading.visible = false
                    clearInterval(timer)
                    clearTimeout(ftimer)
                }, 500);
            } else {
                loading.visible = false
            }
        }
    },
    error() {
        if (!loading) {
            mount({
                type: 'line'
            });
        }
        loading.mode = 'line'
        loading.percent = 100
        loading.error = true
        loading.visible = true
        clearInterval(timer)
        timer = null
        ftimer = setTimeout(() => {
            loading.visible = false
        }, 500)
    },
    upload(percent) {
        if (loading && loading.percent) loading.percent = percent
    },
    config(options) {
        mount(options);
    },
    destroy() {
        document.body.removeChild(document.getElementsByClassName('k-loading'));
        loading = null;
        clearInterval(timer)
        clearTimeout(ftimer)
        timer = null
    }
};
export default Loading