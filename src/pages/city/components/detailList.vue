<template>
    <div class="detail-list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailList',
    props: {
        list: Array
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
}
.title-icon {
    display: inline-block;
    position: relative;
    left: .1rem;
    top: .08rem;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.item-children {
    padding: 0 .2rem;
}
</style>
