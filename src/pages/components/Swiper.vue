<template>
  <div class="index-swiper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item in imgList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
        },
        imgList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/f4/5f2289f8675f0502.jpg_750x200_ab1633c7.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg'
          }
        ]
    }
  }
}
</script>

<style scoped>
.index-swiper >>> .swiper-pagination-bullet-active {
  background: #ffffff;
}
.swiper-img {
  width: 100%;
}
</style>
