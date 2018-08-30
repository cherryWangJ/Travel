<template>
    <div class="detail-header">
        <router-link tag="div" to="/" class="header-back" v-show="showHeader">
            <div class="iconfont left-icon">&#xe624;</div>
        </router-link>
        <div class="scroll-header" v-show="showScroll" :style="opacityStyle">
            金海湖风景区
            <router-link to="/">
                <div class="iconfont scroll-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showHeader: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        // 解绑全局对象
        window.removeEventListener('scroll', this.handleScroll)  
    },
    computed: {
        showScroll () {
            return (!this.showHeader)
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 50) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showHeader = false
            } else {
                this.showHeader = true
            }
        }
    }
}
</script>

<style scoped>
.header-back {
    position: absolute;
    top: .1rem;
    left: .1rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background: rgba(0, 0, 0, 0.8)
}
.left-icon {
    color: #ffffff;
    font-size: .4rem;
}
.scroll-header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height: .86rem;
    background-color: #00bcd4;
    text-align: center;
    font-size: .32rem;
    color: #ffffff;
}
.scroll-back {
    position: absolute;
    top: 0;
    left: .2rem;
    font-size: .4rem;
    color: #ffffff;
}
</style>
