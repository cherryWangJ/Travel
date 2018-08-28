<template>
  <div class="icons">
      <div class="icon-map">
        <swiper :options= "swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon-item" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                      <img :src="item.imgUrl" />
                    </div>
                    <div class="icon-text" v-text="item.text"></div>
               </div>
            </swiper-slide>
        </swiper>
         <div class="swiper-pagination pagination-sight"  slot="pagination"></div>
      </div>
  </div>
</template>
<script>
export default {
    name: 'index-icons',
    props: {
        iconlist: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false,
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconlist.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style scoped>
.icon-map >>> .swiper-pagination-bullet-active {
    width: .12rem;
    height: .12rem;
    background:rgba(0,175,190,.8)
    }
.icon-map >>> .swiper-pagination-bullet {
    width: .12rem;
    height: .12rem;
    margin: 0 .1rem;
    background:rgba(0,175,190,.8)
}
.icon-map >>> .swiper-pagination-bullets {
    position: absolute;
    left: 45%;
    bottom: .2rem;
}
.icon-map {
    width: 100%;
    height: 3.6rem;
    margin-top: .1rem;
    overflow: hidden;
    background-color: #ffffff;
    position: relative;
}
.icon-item {
    width: 25%;
    height: 1.6rem;
    float: left;
    text-align: center;
}
.icon-img img {
    width: 1.1rem;
    height: 1.1rem;
}
.icon-text {
    color: #696969;
    padding-top: .1rem;
    font-size: .28rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
