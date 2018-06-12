<template>
    <div :class="classes">
        <div class="k-card-head">
            <Icon :type="icon" v-if="icon" />
            <slot name="title" v-if="!title"></slot>
            <p v-if="title">{{title}}</p>
        </div>
        <div class="k-card-extra">
            <slot name="extra"></slot>
        </div>
        <div class="k-card-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        bordered: Boolean,
        title: String,
        icon: String
    },
    computed: {
        classes() {
            return ['k-card', {
                ['k-card-bordered']: this.bordered
            }]
        }
    }
}
</script>

