<template>
    <div class="week">
        <div class="week-title">周末去哪儿</div>
            <ul class="week-content border-bottom" v-for="item in weeklist" :key="item.id">
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
    name: 'week',
    props: {
        weeklist: Array
    },
    data () {
        return {
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
