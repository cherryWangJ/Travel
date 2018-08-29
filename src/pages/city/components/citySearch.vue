<template>
    <div>
        <div class="city-search">
            <input v-model="keyword" class="iconfont search-input" type="text" :placeholder="showIcon" />
        </div>
        <div class="city-list" ref="search" v-show="keyword">
            <ul>
                <li class="list-item border-bottom" v-for="item in list" :key="item.id" v-text="item.name"></li>
                <li class="list-item border-bottom" v-show="hasShow">没有找到匹配城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'serach',
    props: {
        cities: Object
    },
    data () {
        return {
            showIcon: '\ue632 请输入城市或拼音',
            keyword: '',
            list: [],
            timer: null
        }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    },
    computed: {
        hasShow () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                 return (this.list = [])
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let key in this.cities) {
                    this.cities[key].forEach(val => {
                        if (val.spell.indexOf(this.keyword) !== -1 || val.name.indexOf(this.keyword) !== -1) {
                            result.push(val)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
}
</script>

<style scoped>
.city-search {
    height: .72rem;
    padding: 0 .1rem;
    background-color: #00bcd4;
}
.search-input {
    height: .64rem;
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
    border-radius: .1rem;
    text-align: center;
}
input::-webkit-input-placeholder {
    color: #cccccc;
}
.city-list {
    overflow: hidden;
    z-index: 1;
    position:absolute;
    top: 1.58rem;
    right: 0;
    left: 0;
    bottom: 0;
    background: #cccccc;

}
.list-item {
    line-height: .64rem;
    padding-left: .2rem;
    background: #ffffff;
    color: #666666;
}
</style>
