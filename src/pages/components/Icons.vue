<template>
  <div class="icons">
      <div class="icon-map">
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon-item" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                      <img :src="item.imgUrl" />
                    </div>
                    <div class="icon-text" v-text="item.text"></div>
               </div>
            </swiper-slide>
        </swiper>
      </div>
  </div>
</template>
<script>
export default {
    name: 'index-icons',
    data () {
        return {
            iconList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    text: '景点门票'
            },
            {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    text: '北京必游'
            },
            {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                    text: '夏日玩水'
            },
            {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                    text: '文化古迹'
            },
            {
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    text: '动植物园'
            },
            {
                    id: '0006',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    text: '故宫'
            },
            {
                    id: '0007',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    text: '一日游'
            },
            {
                    id: '0008',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                    text: '汽车票'
            },
            {
                    id: '0009',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    text: '游乐园'
            },
            {
                    id: '0010',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    text: '全部玩乐'
            }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
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
.icon-map {
    width: 100%;
    height: 3.8rem;
    margin-top: .2rem;
    overflow: hidden;
    background-color: #ffffff;
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
