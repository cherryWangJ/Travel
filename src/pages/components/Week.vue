<template>
    <div class="week">
        <div class="week-title">周末去哪儿</div>
            <ul class="week-content border-bottom" v-for="item in weekList" :key="item.id">
                <li class="week-item">
                    <div class="item-img">
                        <img :src="item.imgUrl" alt="漂流勇进"/>
                    </div>
                    <div class="item-content">
                        <p class="content-slogen" v-text="item.slogen"></p>
                        <p class="content-introduce" v-text="item.introduce"></p>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            weekList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
                    slogen: '漂流勇进，烧烤露营',
                    introduce: '轻松水上漂，任我乐逍遥'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
                    slogen: '北京清凉避暑之地',
                    introduce: '到大自然中享受“天然空调”的清凉'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                    slogen: '北京必游TOP10',
                    introduce: '来北京必去的景点非这些地方莫属'
                },
                {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
                    slogen: '学生最爱的博物馆',
                    introduce: '周末干嘛？北京很多博物馆已经免费开放啦'
                }
            ]
        }
    }
}
</script>

<style scoped>
.week-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    font-size: .28rem;
}
.week-item {
    overflow: hidden;
    height: 4.2rem;
}
.item-img img {
    width: 100%;
    height: 3.0rem;
}
.item-content {
    position: relative;
    padding: .1rem;
}
.content-slogen {
    line-height: .48rem;
    font-size: .32rem;
    margin-left: .1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
}
.content-introduce {
    line-height: .42rem;
    font-size: .24rem;
    margin-left: .1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #585757;
}
</style>
