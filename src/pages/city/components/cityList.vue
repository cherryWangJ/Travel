<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="now-area">
                <div class="area-title border-topbottom">当前城市</div>
                <div class="area-button">
                    <div class="button-wrapper">
                        <div class="button" v-text="this.$store.state.city"></div>
                    </div>
                </div>
            </div>
            <div class="hot-city">
                <div class="area-title border-topbottom">热门城市</div>
                <div class="area-button">
                    <div class="button-wrapper" v-for="item in hotcities" :key="item.id" @click= "handleCityClick(item.name)">
                        <div class="button" v-text="item.name"></div>
                    </div>
                </div>
            </div>
            <div class="city-table" v-for="(item,key,index) in allcities" :key="index" :ref="key">
                <div class="area-title border-topbottom" v-text="key"></div>
                <div class="table-list">
                    <div class="list-item border-bottom" v-for="innerItem in item" :key="innerItem.id" v-text="innerItem.name">
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    props: {
        hotcities: Array,
        allcities: Object,
        letter: String
    },
    name: 'cityList',
    data () {
        return {
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
        handleCityClick (city) {
            console.log(city)
        }
    },
    watch: {
        letter () {
            if (this.letter) {
                const el = this.$refs[this.letter][0]
                this.scroll.scrollToElement(el)
            }
        }
    }
}
</script>
<style scoped>
.border-topbottom ::before {
    border-color: #cccccc;
}
.border-topbottom ::after {
    border-color: #cccccc;
}
.city-list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
}
.area-title {
    line-height: .64rem;
    background-color: #eeeeee;
    color: #808080;
    font-size: .28rem;
    padding-left: .2rem;
}
.area-button {
    padding: .1rem .6rem .1rem .1rem;;
    overflow: hidden;
}
.button-wrapper {
    width: 33.33%;
    float: left;
}
.button {
    margin: .1rem;
    padding: .1rem 0;
    border: .02rem solid #cccccc;
    border-radius: .4rem;
    text-align: center;
}
.table-list .list-item {
    height: .72rem;
    line-height: .72rem;
    padding-left: .2rem;
    color: #808080;
}
</style>
