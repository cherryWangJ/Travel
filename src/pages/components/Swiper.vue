<template>
  <div class="index-swiper">
    <swiper :options= "swiperOption" v-if="showFirst">
    <swiper-slide v-for= "item in swiperlist" :key= "item.id">
      <img class="swiper-img" :src= "item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    swiperlist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
        }
    }
  },
  computed: {
    showFirst () {
      return this.swiperlist.length
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
