<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Collapse',
    props: {
        value: { type: [Array, String] },
        accrodion: Boolean,
        sample: { type: Boolean, default: false }
    },
    data() {
        return {
            children: []
        }
    },
    watch: {
        value() {
            this.setActive()
        }
    },
    computed: {
        classes() {
            return ['k-collapse', {
                ['k-collaplse-sample']: this.sample
            }]
        }
    },
    created() {
        this.$on('collapse-add', this.add)
        this.$on('collapse-remove', this.remove)
        this.$on('collapse-accrodion', this.handelAccrodion)
    },
    mounted() {
        this.setActive()
    },
    methods: {
        handelAccrodion(obj) {
            this.$emit('change', obj.active)
            this.accrodion && this.children.forEach(child => {
                child!=obj&&(child.active = child == obj)
            })
        },
        setActive() {
            this.children.forEach(child => {
                child.active = Array.isArray(this.value) ? this.value.indexOf(child.name) >= 0 : this.value != undefined && this.value === child.name
            })
        },
        add(obj) {
            this.children.push(obj)
        },
        remove(obj) {
            this.children.splice(this.children.indexOf(obj), 1)
        }
    }
}
</script>
