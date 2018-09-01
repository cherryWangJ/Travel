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
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekList: []
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getMessage()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getMessage()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getMessage () {
      axios.get('/api/index.json?city=' + this.city)
        .then(res => {
          console.log(this.city)
          res = res.data
          if (res.flag && res.data) {
            this.swiperList = res.data.swiperList
            this.iconList = res.data.iconList
            for (let key in res.data.recommendList) {
              if (this.city === res.data.recommendList[key].city) {
                this.recommendList = res.data.recommendList[key].cityList
              }
            }
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
