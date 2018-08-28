<template>
    <div class="recommend">
        <div class="recommend-title">热门推荐</div>
        <ul class="recommend-content border-bottom" v-for="item in imgList" :key="item.id">
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
    data () {
        return {
            imgList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
                    introduce: '金海湖风景区',
                    price: 24,
                    place: '平谷区'
            },
            {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
                    introduce: '北京欢乐谷',
                    price: 180,
                    place: '朝阳区'
            },
            {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
                    price: 20,
                    place: '东城区'
            },
            {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
                    price: 39.9,
                    place: '西城区'
            }
            ]
        }
    }
}
</script>

<style scoped>
.recommend-title {
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
