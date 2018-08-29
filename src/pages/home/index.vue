<template>
  <div>
    <Header></Header>
    <Swiper :swiperlist= "swiperList"></Swiper>
    <Icons :iconlist= "iconList"></Icons>
    <Recommend :recommendlist= "recommendList"></Recommend>
    <Week :weeklist= "weekList"></Week>
  </div>
</template>
<script>
import Header from '@/pages/components/Header'
import Swiper from '@/pages/components/Swiper'
import Icons from '@/pages/components/Icons'
import Recommend from '@/pages/components/Recommend'
import Week from '@/pages/components/Week'

import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekList: []
    }
  },
  mounted () {
    this.getMessage()
  },
  methods: {
    getMessage () {
      axios.get('/api/index.json')
        .then(res => {
          res = res.data
          if (res.flag && res.data) {
            this.swiperList = res.data.swiperList
            this.iconList = res.data.iconList
            this.recommendList = res.data.recommendList
            this.weekList = res.data.weekList
          }
           })
        .catch(error => {
          if (error) {
      alert('网络错误，请等待加载')
          }
        })
    }
  },
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Week
  }
}
</script>

<style scoped>

</style>
