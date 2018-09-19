<template>
        <a class="m-tabbar-item" @click="checkRouter">
            <span class="m-tabbar-item-icon" :class="{'is-active':isActive}"><slot name="icon"></slot></span>
            <span class="m-tabbar-item-text" :class="{'is-active':isActive}"><slot></slot></span>
        </a>
</template>

<script>
export default {
    props: {
        id: {
            type: String
        },
        isRouter: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
        }
    },
    mounted () {
        this.$router.push('/')
    },
    computed: {
        isActive () {
            if (this.$parent.value === this.id) {
                return true
            }
        }
    },
    methods: {
        checkRouter () {
            this.$parent.$emit('input', this.id)
                if (this.isRouter) {
                    this.$router.push(this.id)
                }                
        }
    }
}
</script>

<style scoped>
.m-tabbar-item {
    flex: 1;
    text-align: center;
}
.m-tabbar-item-icon {
    display: block;
    padding-top: .04rem;
    font-size: .32rem;
}
.m-tabbar-item-text {
    padding-top: .08rem;
    display: block;
    font-size: .24rem;
    color: #949494;
}
.is-active {
    color: #00bcd4;
}
</style>