
<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Steps',
    props: {
        current: [String, Number],
        vertical: Boolean,
        mini: Boolean,
        status: {
            validator: (v) => {
                return ['wait', 'process', 'finish', 'error'].indexOf(v) >= 0
            },
            default: 'process'
        },
    },
    data() {
        return {
            children: []
        }
    },
    watch: {
        current(v) {
            this.children.forEach((child, index) => {
                if (index == this.current) {
                    child.state = this.status == 'error' ? 'error' : 'process'
                } else if (index > this.current) {
                    child.state = 'wait'
                } else if (index < this.current) {
                    child.state = 'finish'
                }
            })
        }
    },
    computed: {
        classes() {
            return ['k-steps', {
                ['k-steps-vertical']: this.vertical,
                ['k-steps-mini']: this.mini,
            }]
        }
    },
    created() {
        this.$on('steps-add', this.add)
        this.$on('steps-remove', this.remove)
    },
    mounted() {
        this.children.forEach((child, index) => {
            child.width = !this.vertical ? 100 / this.children.length : 0;
            if (index == this.current) {
                child.state = this.status == 'error' ? 'error' : 'process'
            } else if (index > this.current) {
                child.state = 'wait'
            } else if (index < this.current) {
                child.state = 'finish'
            }
        })
    },
    methods: {
        add(obj) {
            this.children.push(obj)
            obj.step = this.children.length
        },
        remove(obj) {
            this.children.splice(this.children.indexOf(obj), 1)
        }
    }
}
</script>
