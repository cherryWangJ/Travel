<template>
    <div class="recommend">
        <div class="recommend-title">热门推荐</div>
        <ul class="recommend-content border-bottom" v-for="item in recommendlist" :key="item.id">
            <li class="content-item">
                <div class="item-img">
                    <img class="imgWrapper" :src="item.imgUrl" alt="金海湖风景区"/>
                </div>
                <div class="item-text">
                    <p class="text-introduce" v-text="item.introduce"></p>
                    <p class="text-price">￥{{item.price}}<span>起</span></p>
                    <p class="text-place" v-text="item.place"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'recommend',
    props: {
        recommendlist: Array
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.recommend-title {
    height: .8rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    font-size: .28rem;
}
.content-item {
    overflow: hidden;
    display: flex;
    height: 2.0rem;
}
.item-img .imgWrapper {
    width: 1.8rem;
    height: 1.8rem;
    padding: .1rem;
}
.item-text {
    flex: 1;
    padding: .1rem;
    min-width: 0;
    position: relative;
}
.text-introduce {
    line-height: .58rem;
    font-size: .32rem;
    margin-top: .1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.text-price {
    line-height: .54rem;
    font-size: .4rem;
    color: #ff8300;
    position: absolute;
    left: .1rem;
    bottom: .12rem;
}
.item-text span {
    font-size: .24rem;
    color: #ccc;
    margin-left: .04rem;
}
.text-place {
    line-height: .4rem;
    font-size: .28rem;
    color: #333;
    position: absolute;
    right: .24rem;
    bottom: .12rem;
}
</style>
